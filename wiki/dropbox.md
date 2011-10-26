---
layout: default
title : irssi
---
###OSX
Si el proceso `opendirectoryd` habitualmente consume demasiada CPU, uno de los causantes puede ser enlaces simbólicos rotos en Dropbox.  
Para encontrarlos:

	find ~/Dropbox -type l -printf "%Y %p\n" | grep "^N"

Al eliminarlos debería solucionarse el problema.
