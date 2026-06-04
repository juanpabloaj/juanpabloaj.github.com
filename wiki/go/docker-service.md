---
layout: wiki-note
title: go docker service
---

## Dockerfile

Usar una imagen con Go solo para compilar y una imagen runtime separada.

```dockerfile
FROM golang:1.25-alpine AS builder

WORKDIR /app

RUN apk add --no-cache git

COPY go.mod go.sum ./
RUN go mod download

COPY . .

RUN CGO_ENABLED=0 go build \
  -trimpath \
  -ldflags "-s -w -X 'main.gitHash=$(git describe --tags --always --dirty)' -X 'main.buildDate=$(date -Iseconds)'" \
  -o application ./cmd/server/

FROM alpine:3.22

RUN apk add --no-cache ca-certificates
RUN addgroup -S app && adduser -S app -G app

WORKDIR /app

COPY --from=builder --chown=app:app /app/application .

EXPOSE 8080

USER app

CMD ["/app/application"]
```

Recordatorios


- Metadata de build: inyectar hash y fecha permite saber qué binario está
  corriendo.
- Versiones: evitar tags flotantes como `latest`; preferir tags concretos para
  builder y runtime.
- HTTPS: si el servicio llama APIs HTTPS desde una imagen mínima, incluir
  certificados.
- Usuario no-root: correr el runtime con un usuario sin privilegios.
- Build cache: copiar primero `go.mod` y `go.sum`, descargar dependencias y
  después copiar el resto del código.
- Runtime: copiar solo el binario y archivos necesarios.
- Las variables usadas por `-ldflags` deben existir en el paquete `main`.

```go
var (
	buildDate = "unknown"
	gitHash   = "unknown"
)
```
