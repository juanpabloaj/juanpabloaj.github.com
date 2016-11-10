---
layout: default
title : Subversion
---
Descargar el repositorio

	svn ckeckout http://url_del_repositiorio

Actualizar

	svn update

Mostrar revisión actual

    svn info

Actualizar a revisión específica

	svn update -r <number>

Mostrar diferencias

    svn diff

Mostrar diferencias y log de un archivo

    svn log --diff nombre_de_archivo

Revertir los cambios

    svn revert archivos_modificado
