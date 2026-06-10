---
layout: wiki-note
title: go service bootstrap
---

Checklist para iniciar un servicio Go HTTP.

## Build info

Exponer metadata de build en variables globales y setearlas al compilar con
`-ldflags`.

```go
var (
	buildDate = "unknown"
	gitHash   = "unknown"
)
```

Ejemplo de build:

```sh
go build \
  -ldflags "-X 'main.gitHash=$(git describe --tags --always --dirty)' -X 'main.buildDate=$(date -Iseconds)'" \
  -o application ./cmd/server/
```

En Docker, inyectarlo dentro del stage de build.

```dockerfile
RUN go build \
  -ldflags "-X 'main.gitHash=$(git describe --tags --always --dirty)' -X 'main.buildDate=$(date -Iseconds)'" \
  -o application ./cmd/server/
```

## Startup logs

Al iniciar, loggear la versión del binario y la configuración. Esto
ayuda a diagnosticar imágenes, deploys y variables mal seteadas.

```go
log.SetFlags(log.LstdFlags | log.Lshortfile | log.Lmicroseconds)

log.Printf("build date: %s", buildDate)
log.Printf("git hash: %s", gitHash)

log.Printf("PORT: %s", port)
log.Printf("HTTP_CLIENT_TIMEOUT_SECONDS: %d", httpClientTimeout)
log.Printf("EXTERNAL_API_URL: %s", externalAPIURL)
```

No loggear secretos completos. Para passwords, tokens, API keys o DSNs, loggear
solo presencia, host, usuario o una versión redactada.

## Config defaults

Leer configuración desde variables de ambiente, pero mantener defaults
explícitos cerca del bootstrap.

```go
var (
	defaultHTTPPort             = "8080"
	defaultHTTPClientTimeoutSec = 2
	defaultExternalAPIURL       = "https://example.com"
)
```

```go
port := ":" + cmp.Or(os.Getenv("PORT"), defaultHTTPPort)
httpClientTimeout := getEnvInt("HTTP_CLIENT_TIMEOUT_SECONDS", defaultHTTPClientTimeoutSec)
externalAPIURL := cmp.Or(os.Getenv("EXTERNAL_API_URL"), defaultExternalAPIURL)
```

```go
func getEnvInt(key string, fallback int) int {
	if value, exists := os.LookupEnv(key); exists {
		if intValue, err := strconv.Atoi(value); err == nil {
			return intValue
		}
	}

	return fallback
}
```

Para servicios reales, considerar fallar rápido si una variable obligatoria no
existe o tiene formato inválido. Los defaults son útiles para desarrollo y
pruebas técnicas, pero pueden esconder errores en producción.

## HTTP client

No usar `http.DefaultClient` ni `http.Get` en código de servicio. Crear cliente
explícito con timeout e inyectarlo en adapters.

```go
httpClient := &http.Client{
	Timeout: time.Duration(httpClientTimeout) * time.Second,
}
```

## HTTP server

No usar `http.ListenAndServe` directo. Crear `http.Server` explícito y setear
timeouts.

```go
httpServer := &http.Server{
	Addr:              port,
	Handler:           mux,
	ReadHeaderTimeout: 5 * time.Second,
	ReadTimeout:       10 * time.Second,
	WriteTimeout:      10 * time.Second,
	IdleTimeout:       60 * time.Second,
}
```

## Graceful shutdown

Para servicios persistentes, escuchar señales del proceso y cerrar el server con
timeout.

```go
ctx, stop := signal.NotifyContext(context.Background(), os.Interrupt, syscall.SIGTERM)
defer stop()

go func() {
	log.Printf("starting server on %s", port)
	if err := httpServer.ListenAndServe(); err != nil && !errors.Is(err, http.ErrServerClosed) {
		log.Fatalf("server error: %v", err)
	}
}()

<-ctx.Done()

shutdownCtx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
defer cancel()

if err := httpServer.Shutdown(shutdownCtx); err != nil {
	log.Printf("server shutdown error: %v", err)
}
```

## Orden sugerido en `main`

1. Configurar logger.
2. Loggear build info.
3. Cargar configuración.
4. Loggear configuración.
5. Crear clientes externos con timeouts.
6. Crear adapters.
7. Crear servicios de aplicación.
8. Crear handlers y rutas.
9. Crear `http.Server` con timeouts.
10. Iniciar server y graceful shutdown.
