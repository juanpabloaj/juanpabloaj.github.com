--- 
layout: default
title : python
---
##easy_install
Para facilitar la instalación de paquetes.  

	easy_install networkx

Si instala para `python2.7` y se requiere para `python2.6`

	easy_install-2.6 networkx

###Pypi
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

## __hash__
