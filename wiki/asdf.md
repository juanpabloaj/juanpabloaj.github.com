---
layout: default
title: asdf
---

Mostrar paquetes instalados

    asdf list

Mostrar plugins disponibles

    asdf plugin-list

Mostrar versiones para un plugin

    asdf list-all python

### elixir

Para usar observer o debugger de elixir

    brew install wxmac

Instalar dependecias de erlang

    https://github.com/asdf-vm/asdf-erlang#before-asdf-install

Instalar

    asdf plugin-add elixir
    asdf install elixir 1.12.1-otp-24
    asdf global elixir 1.12.1-otp-24

    asdf plugin-add erlang
    asdf plugin-update erlang
    asdf install erlang 24.0.2
    asdf global erlang 24.0.2

Borrar

    asdf uninstall elixir 1.11.4-otp-23

### nodejs

    asdf plugin add nodejs
    asdf install nodejs 16.4.0
    asdf global nodejs 16.4.0

Para tener disponible los paquetes instalados de forma global, agregar al `~/.bashrc`

    export PATH=$(asdf where nodejs)/.npm/bin:$PATH

## Referencias

* https://asdf-vm.com
* https://github.com/asdf-vm/asdf-nodejs
* https://github.com/asdf-vm/asdf-erlang
