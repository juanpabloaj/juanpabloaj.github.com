---
layout: default
title: Phoenix framework
---

No crear archivos ecto de base de datos

    mix phx.new --no-ecto hello

## Errors

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

