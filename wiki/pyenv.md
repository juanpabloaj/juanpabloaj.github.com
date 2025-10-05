---
layout: wiki-note
title: pyenv
---

## Install

Para instalar python en [ubuntu/debian](https://github.com/pyenv/pyenv/wiki#suggested-build-environment)

    sudo apt-get update; sudo apt-get install make build-essential libssl-dev zlib1g-dev \
    libbz2-dev libreadline-dev libsqlite3-dev wget curl llvm \
    libncursesw5-dev xz-utils tk-dev libxml2-dev libxmlsec1-dev libffi-dev liblzma-dev

Mostrar versiones disponibles

    pyenv install --list

Apuntar a python 3.5.1 instalado con pyenv desde python3

    pyenv global system 3.5.1

Cargar dos versiones de python

    pyenv shell 2.7.13 3.6.6

Activar y desactivar virtualenv

    pyenv virtualenv 2.7.10 my-virtualenv
    pyenv activate my-virtualenv
    pyenv deactivate

### Referencias

* [pyenv](https://github.com/yyuu/pyenv)
* [Using pyenv to install & manage multiple python versions](https://anil.io/blog/python/pyenv/using-pyenv-to-install-multiple-python-versions-tox/)
* https://github.com/pyenv/pyenv-virtualenv
