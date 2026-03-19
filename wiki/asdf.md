---
layout: wiki-note
title: asdf
---

Mostrar paquetes instalados

    asdf list

Mostrar plugins disponibles

    asdf plugin-list

Actualizar plugin

    asdf plugin update python

Mostrar versiones para un plugin

    asdf list all python

## python

Dependencias de python

    https://github.com/pyenv/pyenv/wiki#suggested-build-environment

Instalar python 2 y 3

    asdf plugin-add python
    asdf install python 2.7.18
    asdf install python 3.10.8
    asdf set -u python 3.10.8 2.7.18

## elixir

Para usar observer o debugger de elixir

    brew install wxmac

Instalar dependecias de erlang

    https://github.com/asdf-vm/asdf-erlang#before-asdf-install

Instalar

    asdf plugin-add erlang
    asdf plugin-update erlang
    asdf install erlang 26.0.2
    asdf global erlang 26.0.2

    asdf plugin-add elixir
    asdf plugin-update elixir
    asdf install elixir 1.15.2-otp-26
    asdf global elixir 1.15.2-otp-26

Borrar

    asdf uninstall elixir 1.11.4-otp-23

## nodejs

    asdf plugin add nodejs
    asdf install nodejs 16.14.2
    asdf global nodejs 16.14.2

Para tener disponible los paquetes instalados de forma global, agregar al `~/.bashrc`

    export PATH=$(asdf where nodejs)/.npm/bin:$PATH

## golang

    asdf plugin-add golang
    asdf install golang 1.21.1
    asdf global golang 1.21.1

## vscode y zsh

vscode utiliza por defecto zsh, para tener en vscode lo instalado con asdf, agregar al `~/.zshrc`

    # asdf location, in my case is in $HOME/opt
    export PATH=$HOME/opt/bin:$PATH

    export ASDF_DATA_DIR=/Users/pablo/.asdf
    export PATH="${ASDF_DATA_DIR:-$HOME/.asdf}/shims:$PATH"

# Troubleshooting

## Instalar Python 3.14 con asdf en macOS 12 Apple Silicon

### Problema

Al intentar `asdf install python 3.14.3` en macOS 12 (Monterey) con Apple Silicon (aarch64), el build falla con errores de linker como:

```
Undefined symbols for architecture x86_64:
  "_libintl_bindtextdomain"
  ...
ld: symbol(s) not found for architecture x86_64
```

o bien:

```
ld: warning: ignoring file /opt/homebrew/opt/gettext/lib/libintl.dylib,
building for macOS-x86_64 but attempting to link with file built for macOS-arm64
```

### Causa

Dos problemas encadenados:

1. Python 3.14 requiere `libintl` (parte de `gettext`) en macOS, pero el linker no la encuentra automáticamente.
2. `brew upgrade gettext` falla en macOS 12 porque la fórmula de `gettext 1.0` tiene un bug con `json-c` (`spit.c:39:10: fatal error: 'json.h' file not found`).

### Solución

Usar la versión de gettext ya instalada (0.22.5) forzando la arquitectura arm64 explícitamente:

```bash
CFLAGS="-I/opt/homebrew/Cellar/gettext/0.22.5/include -arch arm64" \
LDFLAGS="-L/opt/homebrew/Cellar/gettext/0.22.5/lib -lintl -arch arm64" \
CPPFLAGS="-I/opt/homebrew/Cellar/gettext/0.22.5/include" \
asdf install python 3.14.3
```

Para evitar que Homebrew intente actualizar gettext en el futuro:

```bash
brew pin gettext
```

### Entorno

- macOS 12 (Monterey), Apple Silicon (aarch64)
- Homebrew en `/opt/homebrew`
- asdf para gestión de versiones de Python

# Referencias

* https://asdf-vm.com
* https://asdf-vm.com/guide/getting-started.html
* https://github.com/asdf-vm/asdf-nodejs
* https://github.com/asdf-vm/asdf-erlang
* https://github.com/asdf-community/asdf-python
