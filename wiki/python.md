--- 
layout: default
title : python
---
### String
Mostrar todas las letras

	import string
	for a in string.lowercase:
		print a

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
