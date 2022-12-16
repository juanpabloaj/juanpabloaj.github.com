---
layout: default
title: find
---

Mostrar los encontrados en forma ls

    find . -ls

Mostrar solo los directorios

    find . -type d

Mostrar los directorios más cercanos

    find . -type d -maxdepth 1 -mindepth 1

Mostrar solo los archivos

    find . -type f

Buscar por nombre

    find . -name "archivo*.tx*"

por fecha

Buscar archivos creados después de la  fecha exacta

	$ touch -d "13 may 2001 17:54:19" marker
	$ find . -newer marker

Mostrar su fecha de creación y nombre

    find . -newer marker -printf %Cc"\t"%P"\n"

Mostrar permisos y ultima fecha de ultima modificación

    find . -newer marker -printf %M"\t"%Ac"\t"%P"\n"

Antes de la fecha exacta

    $ find . \! -cnewer marker
