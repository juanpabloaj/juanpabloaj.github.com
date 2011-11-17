---
layout: default
title : python
---
{:enlaces: .enlaceGris }  
##General
### String
Mostrar todas las letras

	import string
	for a in string.lowercase:
		print a

###warnings
Ignorar warnings
	import warnings
	warnings.filterwarnings(action="ignore", message='the sets module is deprecated')
### Listas

Evaluar una lista con elementos booleanos

	>>> t=[True]*5 + [False]
	>>> t
	[True, True, True, True, True, False]
	>>> reduce(lambda a,b: a or b, t)
	True
	>>> reduce(lambda a,b: a and b, t)
	False

### yield

Devuelve un objeto de tipo generator

###hash

	__hash__

###more...
[Herencia](/wiki/python/Herencia)
{:enlaces}
##easy_install
Para facilitar la instalación de paquetes.

	easy_install networkx

Si instala para `python2.7` y se requiere para `python2.6`

	easy_install-2.6 networkx

##Pypi
## Windows
python se debería instalar en `C:\python26` o un directorio similar.  
Es recomendable agregar la ubicación en la variable de entorno `PATH` en

	Sistema > optiones avanzadas > variables de entorno

###Executable
Para crear un executable para windows es necesario bajar el paquete [py2exe](http://py2exe.org/).  
{:enlaces}
Crear un archivo `setup.py` y usar el comando

	python setup.py py2exe

##Libs
[matplotlib](/wiki/python/matplotlib)
{:enlaces}
