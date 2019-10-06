---
layout: default
title: Phoenix framework
---

No crear archivos ecto de base de datos

    mix phx.new --no-ecto hello

Context sin schema

    mix phx.gen.context Dashboard Message messages content --no-schema

## Errors

### Jason y no Poison

Si se está usando Jason en lugar de Poison como dependencia

    {:jason, "~> 1.0"},

https://github.com/chrismccord/phoenix_live_view_example/blob/366abefc66769312fe60a9602704a998da309b70/mix.exs#L47

Es necesario modificar en los archivos

config/config.exs

    config :phoenix, :json_library, Jason

https://github.com/chrismccord/phoenix_live_view_example/blob/366abefc66769312fe60a9602704a998da309b70/config/config.exs#L26

lib/demo_web/endpoint.ex

    json_decoder: Phoenix.json_library()

https://github.com/chrismccord/phoenix_live_view_example/blob/366abefc66769312fe60a9602704a998da309b70/lib/demo_web/endpoint.ex#L34

### ERROR 22023 (invalid parameter value): new encoding (UTF8) is incompatible

	mix ecto.create

I get the error

	** (Mix) The database for PhoenixChat.Repo couldn't be created: ERROR 22023 (invalid_parameter_value): new encoding (UTF8) is incompatible
	with the encoding of the template database (SQL_ASCII)

I solved adding the line "template: "template0"," to the database configuration in the config/dev.exs file

	# Configure your database
	config :phoenix_chat, PhoenixChat.Repo,
	adapter: Ecto.Adapters.Postgres,
	username: "postgres",
	password: "postgres",
	database: "phoenix_chat_dev",
	hostname: "localhost",
	template: "template0",
	pool_size: 10

## Referencias

* https://hexdocs.pm/phoenix/Mix.Tasks.Phx.Gen.Context.html
