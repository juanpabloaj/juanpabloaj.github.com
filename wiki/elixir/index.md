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

Iniciar observer

    iex> :observer.start

Habilitar historial en iex

    export ERL_AFLAGS="-kernel shell_history enabled"

### mix

Obtener dependencias

    mix deps.get

Actualizar dependencias

    mix deps.update

Dar formato a archivo con mix

    mix format file.ex

Verificar formato con mix

    mix format --check-formatted file.ex

### Documentación

* [Elixir - Getting started][elixir-lang-doc]
* [Elixir school][elixirschool]
* [mix](https://hexdocs.pm/mix/Mix.html)

[elixir-lang-doc]: http://elixir-lang.org/getting-started/introduction.html
[elixirschool]: http://elixirschool.com/

### Referencias

* https://samueldavies.net/2017/04/18/how-to-load-a-file-into-iex/
* https://hexdocs.pm/mix/Mix.Tasks.Format.html#module-task-specific-options
* https://hashrocket.com/blog/posts/format-your-elixir-code-now
* https://stackoverflow.com/questions/45405070/how-do-i-save-iex-history
