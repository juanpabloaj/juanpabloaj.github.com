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

### python

    asdf plugin-add python
    asdf install python 2.7.18
    asdf install python 3.10.8
    asdf global python 3.10.8 2.7.18

### elixir

Para usar observer o debugger de elixir

    brew install wxmac

Instalar dependecias de erlang

    https://github.com/asdf-vm/asdf-erlang#before-asdf-install

Instalar

    asdf plugin-add erlang
    asdf plugin-update erlang
    asdf install erlang 25.1.1
    asdf global erlang 25.1.1

    asdf plugin-add elixir
    asdf install elixir 1.14.0-otp-25
    asdf global elixir 1.14.0-otp-25

Borrar

    asdf uninstall elixir 1.11.4-otp-23

### nodejs

    asdf plugin add nodejs
    asdf install nodejs 16.14.2
    asdf global nodejs 16.14.2

Para tener disponible los paquetes instalados de forma global, agregar al `~/.bashrc`

    export PATH=$(asdf where nodejs)/.npm/bin:$PATH

## Referencias

* https://asdf-vm.com
* https://github.com/asdf-vm/asdf-nodejs
* https://github.com/asdf-vm/asdf-erlang
* https://github.com/asdf-community/asdf-python
