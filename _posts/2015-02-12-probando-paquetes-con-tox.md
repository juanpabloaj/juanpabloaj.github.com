---
layout: post
comments: true
title : Probando paquetes en diferentes versiones de python con tox
categories:
---
Cuando creas un paquete para python y quieres testearlo sobre varias versiones, `python2.7`, `python3.3`, etc, es posible hacerlo creando manualmente varios entornos virtuales con virtualenv, uno para cada versión, o automatizar este proceso con tox.

Para instalar `tox`

    pip install tox

Para utilizarlo es necesario crear un archivo de configuración `tox.ini`

    [tox]
    envlist = py26, py27
    [testenv]
    deps=nose
    commands=nosetest

Y lanzar tox

    tox

En el archivo `tox.ini` se especifican algunos paramétros como:

* `envlist` describe los entornos a utilizar. `tox` interpreta `py26` como `python2.6` y `py27` como `python2.7`.
* `deps`, las dependencias a instalar en cada entorno.
* `commands` comandos a utilizar en cada entorno después de instalar las dependencias.

Cada uno de los entornos creados es independiente entre ellos e independiente del entorno principal del sistema. Ellos son almacenados como entornos virtuales en un directorio llamado `.tox`, ubicado donde llamamos a `tox`, son creados la primera vez que `tox` es ejecutado y reutilizados la siguientes veces, por lo que la primera vez puede tomar un par de segundos más que las siguientes.

Normalmente, además de lanzar los test, me gusta verificar el code style, [PEP8][PEP8], por que lo que en el archivo `tox.ini` agrego un entorno donde no se ejecutan los test, solo se instala y ejecuta `flake8` para verificar el code style.

    [tox]
    envlist = flake8, py27, py34

    [testenv]
    deps=nose
    commands=nosetest

    [testenv:flake8]
    deps = flake8
    commands = flake8


## Referencias

* [Documentación de tox](http://tox.readthedocs.org/)
* [Continuous integration/Tutorials/Test your python](http://www.mediawiki.org/wiki/Continuous_integration/Tutorials/Test_your_python)
* [flake8](https://pypi.python.org/pypi/flake8)

[PEP8]: https://www.python.org/dev/peps/pep-0008/
