--- 
layout: default
title : Mercurial
---

status del repositorio  
`hg st` 

traer los cambios  
`hg pull` 

actualizar los cambios descargados  
`hg update` 

traer y actualizar los cambios  
`hg pull -u` 

ver el log de la revision numero 2  
`hg log -r 2`

el último log  
`hg log -r -1`

los últimos 2 logs  
`hg log -r -1:-2`

comparar los cambios desde la revision -3  
`hg diff -r -3`

comparar los cambios con las revisiones entre -2:-3  
`hg diff -r -2:-3`

ver un resumen de las modificaciones solo los nombres de los archivos modificados

	hg diff --stat

## .hgignore 
para ignorar archivos que no se quieran considerar en el repositorio  

ignorar todos los que terminen en .py  
`*py`

ignorar todos los que no terminen en .c o .h  
`*[!.c|!.h]`

## Branches

Crear una rama nueva

	$ hg branch ramaNueva

mostrar las existentes

	$ hg branches
	ramaNueva                    10:d3959df85fcf
	default                        9:7d1a900129f9 

moverse a la rama default

	$ hg update default 

saber en que rama estamos 

	$ hg branch
	default

traer los cambios desde otra rama

	$ hg merge ramaNueva 

## glog 

Agregar al archivo `~/.hgrc`  

	[extensions]
	hgext.graphlog =
