---
layout: wiki-note
title: go functional options
---

Usar cuando un constructor tiene varias opciones opcionales. Mantener parametros
explicitos para dependencias obligatorias.

## Ejemplo

```go
type Client struct {
	baseURL string
	timeout time.Duration
	logger  *slog.Logger
}

type Option func(*Client)

func WithTimeout(timeout time.Duration) Option {
	return func(c *Client) {
		c.timeout = timeout
	}
}

func WithLogger(logger *slog.Logger) Option {
	return func(c *Client) {
		c.logger = logger
	}
}

func NewClient(baseURL string, opts ...Option) *Client {
	c := &Client{
		baseURL: baseURL,
		timeout: 2 * time.Second,
		logger:  slog.Default(),
	}

	for _, opt := range opts {
		opt(c)
	}

	return c
}
```

Uso:

```go
client := NewClient(
	"https://example.com",
	WithTimeout(5*time.Second),
	WithLogger(logger),
)
```

## Cuando usar

- Varias opciones realmente opcionales.
- Defaults razonables.
- Configuracion que puede crecer sin romper llamadas existentes.

## Cuando no usar

- Dos o tres argumentos obligatorios.
- Cuando oculta dependencias requeridas.
- Cuando una config struct simple es suficiente.

