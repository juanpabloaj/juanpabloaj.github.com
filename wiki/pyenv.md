---
layout: default
title: pyenv
---

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
