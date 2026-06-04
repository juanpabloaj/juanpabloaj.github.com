---
layout: wiki-note
title: go service architecture
---

## Capas

```text
cmd/
  server/
    main.go
internal/
  domain/
  application/
  adapters/
    http/
    postgres/
    pubsub/
```

`cmd/server` arma el proceso: configuración, logger, clientes, servicios,
handlers y servidor HTTP.

`domain` contiene tipos y reglas puras cuando existen.

`application` orquesta casos de uso y define las interfaces que necesita.

`adapters` traducen entre la aplicación y sistemas externos: HTTP, DB, queues,
filesystem, APIs externas.

También he visto usar `interfaces/` para adapters de entrada y
`infrastructure/` para adapters de salida. Para mis notas, `adapters/` es más
claro y fácil de recordar.

## Interfaces en la capa que las usa

Definir interfaces en el paquete que las consume. Esto evita interfaces grandes
y mantiene dependencias hacia adentro.

```go
package application

type Store interface {
	Find(ctx context.Context, id string) (*domain.Record, error)
}

type Publisher interface {
	Publish(ctx context.Context, event domain.Event) error
}

type Service struct {
	store     Store
	publisher Publisher
}
```

En `cmd/server`, los adapters concretos se conectan con la capa de aplicación
sin acoplarla a detalles externos.

```go
store := postgres.NewStore(db)
publisher := pubsub.NewPublisher(client)

service := application.NewService(store, publisher)
```

## Application service

La capa de aplicación recibe dependencias por constructor.

```go
func NewService(store Store, publisher Publisher) *Service {
	return &Service{
		store:     store,
		publisher: publisher,
	}
}
```

El constructor retorna `*Service`, un struct, no una interfaz. Retornar el tipo
concreto mantiene disponible todo el comportamiento del tipo. En tests, también
permite inspeccionar la instancia construida cuando realmente hace falta, sin
type assertions. Si otro paquete necesita abstraer el servicio, que defina una
interfaz mínima donde lo consume.

## context.Context

Si el caso de uso puede bloquear, tardar, coordinar adapters o cancelarse por
request/timeout, aceptar `context.Context` y propagarlo.

```go
func (s *Service) Process(ctx context.Context, id string) error {
	record, err := s.store.Find(ctx, id)
	if err != nil {
		return err
	}

	event := domain.NewEvent(record)

	return s.publisher.Publish(ctx, event)
}
```

## Dirección de dependencias

Las dependencias deben apuntar hacia reglas internas, no hacia detalles
externos.

```text
adapters/http -> application -> domain
```

`application` define interfaces como `Store` o `Publisher`. Los adapters de
salida las implementan y se conectan en `cmd/server`.

Evitar que `domain` importe handlers HTTP, drivers de base de datos, SDKs
externos o detalles de serialización.

`application` puede conocer interfaces, errores de aplicación y tipos de
dominio. No debería depender de `net/http`, SQL concreto, Kafka, S3, etc.

## Adapters

Los adapters traducen entre el mundo externo y el modelo interno:

- HTTP request/response.
- JSON externo.
- Filas SQL.
- Mensajes de queue.
- Archivos.

Mantener esa traducción fuera de `domain` evita que las reglas internas cambien
por detalles de transporte o persistencia.

Usar structs separados en adapters cuando el formato externo no coincide con el
modelo interno.

```go
type apiResponse struct {
	ID        string `json:"id"`
	Label     string `json:"label"`
	CreatedAt string `json:"created_at"`
}
```

Convertir tipos externos a tipos internos cerca del adapter. No propagar
estructuras de APIs externas hacia la capa de aplicación.

## Paquetes pequeños

Preferir paquetes con responsabilidad clara antes que nombres genéricos como
`common`, `utils` o `helpers`.

Si una función utilitaria solo la usa un paquete, mantenerla privada en ese
paquete. Extraerla después, cuando aparezca un segundo uso real.

## No sobrediseñar

Empezar simple. No crear capas, interfaces o paquetes solo porque una
arquitectura lo permite.

Señales de que una separación sí aporta:

- Hay un adapter que se quiere testear o reemplazar.
- Hay reglas de negocio que conviene probar sin adapters.
- Hay varios adapters de entrada usando el mismo caso de uso.
- Hay formatos externos que no deberían contaminar el dominio.
- El `main` empieza a mezclar bootstrap con lógica de negocio.

## Checklist

- `main` solo compone dependencias y arranca el proceso.
- Interfaces pequeñas definidas donde se consumen.
- Adapters implementan interfaces definidas en `application`.
- `context.Context` atraviesa handlers, servicios y adapters.
- `domain` no depende de transporte, persistencia ni SDKs externos.
- Tipos externos no se propagan hacia reglas internas.
- Paquetes con responsabilidad clara, sin `utils` prematuro.
- Capas agregadas solo cuando reducen acoplamiento real.
- Evitar frameworks si la stdlib resuelve bien el caso.
