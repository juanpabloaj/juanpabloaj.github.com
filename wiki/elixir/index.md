---
layout: default
title: Elixir
---

Cargar archivo al iniciar `iex`

    iex -r elixir_file.ex

Cargar desde iex

    iex> r MyModule

Entrar a iex con la configuracion del proyecto/mix

    iex -S mix

Ejecutar script al iniciar `iex`

    iex -S mix run startup.exs

Iniciar observer

    iex> :observer.start

Habilitar historial en iex

    export ERL_AFLAGS="-kernel shell_history enabled"

Obtener aplicaciones que se están ejecutando

    iex> :application.which_applications

Obtener lista de aplicaciones que se están ejecutando con sus pid y obtener info de ese pid.

    iex> :application.info[:running]
    ...
    iex> pid(0, 316, 0) |> Process.info

Detener e iniciar una aplicación. Algunas veces he tenido que reiniciar `:logger` después de un `recompile`.

    Application.stop(:logger)
    Application.start(:logger)

Listar los procesos bajo un supervisor

    iex > Supervisor.which_children(MyApp.Supervisor)

Filtrar procesos por nombre y listarlos. Listar los que contienen `MyApp` en su nombre

    Process.list
    |> Enum.filter(fn(pid) ->
        {:registered_name, name} = Process.info(pid, :registered_name)
        to_string(name) =~ "MyApp"
    end)
    |> Enum.map(fn pid -> Process.info(pid, :registered_name) end)

Obtener estado de un proceso

    :sys.get_state(pid)

### mix

Crear proyecto umbrella para tener sub apps

    mix new hello_world --umbrella

Crear app con supervisor

    mix new hello_world --sup

Crear módulo

    mix new hello_world

O el equivalente

    mix new hello_world --module HelloWorld

Obtener dependencias

    mix deps.get

Actualizar dependencias

    mix deps.update

Dar formato a archivo con mix

    mix format file.ex

Verificar formato con mix

    mix format --check-formatted file.ex

### Documentación

-   [Elixir - Getting started][elixir-lang-doc]
-   [Elixir school][elixirschool]
-   [mix](https://hexdocs.pm/mix/Mix.html)

[elixir-lang-doc]: http://elixir-lang.org/getting-started/introduction.html
[elixirschool]: http://elixirschool.com/

### Referencias

-   https://samueldavies.net/2017/04/18/how-to-load-a-file-into-iex/
-   https://hexdocs.pm/mix/Mix.Tasks.Format.html#module-task-specific-options
-   https://hashrocket.com/blog/posts/format-your-elixir-code-now
-   https://stackoverflow.com/questions/45405070/how-do-i-save-iex-history
-   https://subscription.packtpub.com/book/application_development/9781784397517/1/ch01lvl1sec14/inspecting-your-system-in-iex
-   https://til.hashrocket.com/posts/mpqu7rjuy3-get-pids-for-each-beam-application-in-elixir
-   https://stackoverflow.com/questions/36063848/elixir-get-all-pids-for-processes-under-a-supervisor
-   https://samuelmullen.com/articles/elixir-processes-observability/
-   https://elixir-lang.org/getting-started/mix-otp/supervisor-and-application.html
-   https://elixirforum.com/t/elixir-apps-as-systemd-services-info-wiki/2400
-   https://hexdocs.pm/mix/Mix.Tasks.New.html#module-examples
