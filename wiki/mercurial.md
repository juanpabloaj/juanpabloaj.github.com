--- 
layout: wiki-note
title : Mercurial
---

Inicializar repositorio

	hg init

Status del repositorio

	hg st

Traer los cambios

	hg pull

Actualizar los cambios descargados

	hg update

Traer y actualizar los cambios

	hg pull -u

Ver el log de la revisión numero 2

	hg log -r 2

Último log

	hg log -r -1

Los últimos 2 logs

	hg log -r -1:-2

Comparar los cambios desde la revisión -3

	hg diff -r -3

Comparar los cambios con las revisiones entre -2:-3

	hg diff -r -2:-3

Ver un resumen de las modificaciones solo los nombres de los archivos modificados

	hg diff --stat

## .hgignore
para ignorar archivos que no se quieran considerar en el repositorio

Ignorar todos los que terminen en .py

	*py

Ignorar todos los que no terminen en .c o .h

	*[!.c|!.h]

## Branch

Crear una rama nueva

	$ hg branch ramaNueva

Mostrar las existentes

	$ hg branches
	ramaNueva                    10:d3959df85fcf
	default                        9:7d1a900129f9

Moverse a la rama default

	$ hg update default

Saber en que rama estamos

	$ hg branch
	default

Traer los cambios desde otra rama

	$ hg merge ramaNueva

### Ejemplo de branches y merge

	#!/bin/bash
	mkdir eBranch
	cd eBranch
	hg init
	echo "Creado e inicializado proyecto"
	touch README core.py
	hg st
	hg add README core.py
	hg st
	hg ci -m "primer commit"
	hg branch server
	echo "branch server creada y movido a esta"
	touch server.py
	hg add server.py
	hg ci -m "agregardo server.py en server branch"
	hg up default
	hg merge server
	hg st
	hg ci -m "mezclando desde server a default"
	hg branches
	hg log

## subrepo
## glog

Agregar al archivo `~/.hgrc`

	[extensions]
	hgext.graphlog =

## .hgrc
### alias

	[alias]
	d0 = diff -U0

