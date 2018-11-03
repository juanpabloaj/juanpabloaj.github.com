---
layout: post
comments: true
title : Phoenix, cambiando nivel de log de una aplicación en ejecución
categories:
---

Para cambiar el nivel de log sin reiniciar la aplicación.

Iniciar Phoenix con elixir y agregar el argumento `sname`

    elixir --sname myapp -S mix phx.server

Conectar a Phoenix with a terminal remota `remsh`

    iex --sname baz --remsh myapp@${HOSTNAME}

Cambiar el nivel del log de `Logger` y del `backend`

    iex(myapp@ecb1011caa1e)6> Logger.configure(level: :debug)
    :ok
    iex(myapp@ecb1011caa1e)5> Logger.configure_backend(:console, [level: :debug])
    :ok

Desde ahora el nivel de log está en debug

    15:21:07.521 [debug]...

### References

* https://christopherjmcclellan.wordpress.com/2018/06/02/how-to-change-elixir-log-levels-for-a-running-application/
* https://hexdocs.pm/iex/IEx.html
* https://hexdocs.pm/logger/Logger.html

