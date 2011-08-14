--- 
layout: default
title : python
---
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
 
devuelve un objeto de tipo generator 

## __hash__
