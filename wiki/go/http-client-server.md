---
layout: wiki-note
title: go http client and server
---

## HTTP client

No usar `http.DefaultClient`, `http.Get`, `http.Post` ni helpers equivalentes en
código de servicio. Esos caminos no fuerzan timeout y hacen más difícil testear.

Crear un cliente explícito:

```go
client := &http.Client{
	Timeout: 2 * time.Second,
}
```

Para código reusable, inyectar una interfaz mínima:

```go
type HTTPClient interface {
	Do(req *http.Request) (*http.Response, error)
}

type Client struct {
	baseURL    string
	httpClient HTTPClient
}
```

Crear requests con contexto:

```go
req, err := http.NewRequestWithContext(ctx, http.MethodGet, url, nil)
if err != nil {
	return nil, err
}

resp, err := c.httpClient.Do(req)
if err != nil {
	return nil, err
}
defer resp.Body.Close()
```

## Status codes

Tratar respuestas no-2xx como error explícito. Usar sentinel errors cuando el
código que llama necesite distinguir el caso.

```go
var ErrUnexpectedStatusCode = errors.New("unexpected status code")
```

```go
if resp.StatusCode < 200 || resp.StatusCode >= 300 {
	return nil, fmt.Errorf("%w: %d", ErrUnexpectedStatusCode, resp.StatusCode)
}
```

## Decode

Decodificar directo desde el body. Usar structs separados cuando el JSON externo
no coincide con el modelo interno.

```go
var data apiResponse
if err := json.NewDecoder(resp.Body).Decode(&data); err != nil {
	return nil, err
}

return &domain.Record{
	ID:    data.ID,
	Label: data.Label,
}, nil
```

## HTTP server

No usar `http.ListenAndServe` directo. Crear `http.Server` para poder configurar
timeouts y shutdown.

```go
mux := http.NewServeMux()
mux.HandleFunc("GET /healthz", healthHandler)

server := &http.Server{
	Addr:              ":8080",
	Handler:           mux,
	ReadHeaderTimeout: 5 * time.Second,
	ReadTimeout:       10 * time.Second,
	WriteTimeout:      10 * time.Second,
	IdleTimeout:       60 * time.Second,
}
```

`ReadHeaderTimeout` protege contra clientes lentos enviando headers.
`ReadTimeout` y `WriteTimeout` limitan lectura y escritura total por request.
`IdleTimeout` controla conexiones keep-alive inactivas.

## Handler

Validar inputs en el handler HTTP y pasar `r.Context()` hacia la capa de
aplicación.

```go
func (h *Handler) GetRecord(w http.ResponseWriter, r *http.Request) {
	id, err := strconv.Atoi(r.PathValue("id"))
	if err != nil {
		http.Error(w, "invalid id", http.StatusBadRequest)
		return
	}

	record, err := h.service.GetRecord(r.Context(), id)
	if err != nil {
		http.Error(w, "failed to fetch record", http.StatusBadGateway)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	if err := json.NewEncoder(w).Encode(record); err != nil {
		log.Printf("error encoding response: %v", err)
	}
}
```

## Checklist

- Cliente HTTP explícito con timeout.
- Requests con `context.Context`.
- `resp.Body.Close()` después de `Do` exitoso.
- Status no-2xx convertido a error.
- Structs externos separados de modelos internos cuando corresponda.
- HTTP server explícito con timeouts.
- Handlers validan inputs y devuelven status codes claros.
- `r.Context()` se propaga a servicios y adapters.
