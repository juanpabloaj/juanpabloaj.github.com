---
layout: post
comments: true
title : Phoenix y Plug.RequestId
categories:
---
Para que cada request tenga un id único y sea mostrado en el log

1. Crear proyecto

    mix http://phx.new  --no-ecto request

2. Agregar al archivo `lib/request_web/endpoint.ex`

    plug Plug.RequestId

3. Editar el archivo `config/dev.exs` para mostrar el id del request en el log

    config :logger, :console,
      format: "[$level] $metadata$message\n",
      metadata: [:request_id]

Con esto, por cada request se debería obtener una linea de log similar a

    [info] request_id=2lfdtb54lt7i3bdppk0000fh GET /

Si en el request se envía el header `x-request-id` con un valor entre 20 y 200 caracteres, este se mantiene.

Con

    curl -H "x-request-id: 12345678901234567890" http://localhost:4000

Se registra en el log

    [info] request_id=12345678901234567890 GET /

Más información en

https://hexdocs.pm/plug/Plug.RequestId.html
