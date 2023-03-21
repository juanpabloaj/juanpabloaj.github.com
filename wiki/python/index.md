---
layout: default
title : python
---
# Install

## Windows
python se debería instalar en `C:\python26` o un directorio similar.

Es recomendable agregar la ubicación en la variable de entorno `PATH` en

	Sistema > optiones avanzadas > variables de entorno

### Executable
Para crear un executable para windows es necesario bajar el paquete [py2exe](http://py2exe.org/).

Crear un archivo `setup.py` y usar el comando

	python setup.py py2exe

## easy_install
Para facilitar la instalación de paquetes.

	easy_install networkx

Si instala para `python2.7` y se requiere para `python2.6`

	easy_install-2.6 networkx

## setup.py

Es posible instalar los paquetes como usuario en un directorio especifico, con prefix

    python setup.py install --prefix=$HOME/opt

Con lo cual se crearan algunos directorios los cuales es necesario añadir al `PYTHONPATH`

    export PYTHONPATH=$HOME/opt/lib/python2.7/site-packages:$PYTHONPATH

## Pypi

## General

Las siguientes variables contienen el nombre de archivo con path, archivo sin extensión ni path y nombre de clase

    __file__
    __name__
    self.__name__
    self.__class__.__name__

### String
Mostrar todas las letras

	import string
	for a in string.lowercase:
		print a

### warnings
Ignorar warnings
	import warnings
	warnings.filterwarnings(action="ignore", message='the sets module is deprecated')

### Listas

### Funcional

Evaluar una lista con elementos booleanos

	>>> t=[True]*5 + [False]
	>>> t
	[True, True, True, True, True, False]
	>>> reduce(lambda a,b: a or b, t)
	True
	>>> reduce(lambda a,b: a and b, t)
	False

Un if en map

	a = [ i for i in range(10)]
	m= map(lambda i: i > 0, a)
	print m
	print reduce(lambda a,b: a and b, m)

map entrega una lista y reduce un valor

    [False, True, True, True, True, True, True, True, True, True]
    False

### yield

Devuelve un objeto de tipo generator

### hash

	__hash__

### datetime

Incrementar fecha en un día

    import datetime
    datetime.datetime.now() + datetime.timedelta(days=1)

### virtual environments

    python3 -m venv /path/to/new/virtual/environment

### More

* [Herencia](/wiki/python/herencia)
* [flake8](/wiki/python/flake8)
* [flask](/wiki/python/flask)
* [ftplib](/wiki/python/ftplib)
* [ipython](/wiki/python/ipython)
* [matplotlib](/wiki/python/matplotlib)
* [networkx](/wiki/python/networkx)
* [pandas](/wiki/python/pandas)
* [prophet](/wiki/python/prophet)
* [pyenv](/wiki/pyenv)
* [scipy](/wiki/python/scipy)
* [seaborn](/wiki/python/seaborn)
* [setuptools](/wiki/python/setuptools)
* [unittest](/wiki/python/unittest)

### Ejemplos

* [Listas: moda y mediana](https://gist.github.com/2832821)
* [Archivos: suma columna](https://gist.github.com/2920582)
* [Captura de entrada](https://gist.github.com/2965892)
* [Búsqueda en varios archivos](https://gist.github.com/3050904)
* [numpy para archivos y columnas con loadtxt](https://gist.github.com/juanpabloaj/4535991)
