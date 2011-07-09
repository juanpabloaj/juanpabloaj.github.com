--- 
layout: default
title : OSX
---
Pegar en la terminal 
	
	pbpaste

Copiar desde la terminal 

	cat archivo.txt | pbcopy 

## top 

Ordenar proceso por cpu 

	top -o cpu

## defaults 

Es preferible usar uxterm a xterm, ya que ofrece soporte para unicode.  
Dejar uxterm en una posición especifica al comienzo de X11  

	defaults write org.x.X11 app_to_run "/usr/X11/bin/uxterm -bg black -fg white -geometry 140x40+430+10"

Para cambiar las preferencias de uxterm, basta con volver a escribir el comando con las nuevas opciones, sobre escribirán las anteriores.
