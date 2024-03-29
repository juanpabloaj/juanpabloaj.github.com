---
layout: default
title : OSX
---
## Recomendados

* TotalTerminal
* cloudapp
* iTerm2
* moon

Abrir Chrome desde la consola

    open -a "Google Chrome" *.svg

## pbpaste
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

	defaults write org.x.X11 app_to_run "/usr/X11/bin/uxterm -bg black -geometry 140x40+430+10"

Para cambiar las preferencias de uxterm, basta con volver a escribir el comando con las nuevas opciones, sobre escribirán las anteriores.

## Cambiar nombre de screenshots
Para acortar el nombre a mostrar

	defaults write com.apple.screencapture name -string "ss"
	pablo@mbp ~$ killall SystemUIServer

Y simplificar la cadena entre hora y fecha ` a la(s) `

	$ sudo su -
	# cd /System/Library/CoreServices/SystemUIServer.app/Contents/Resources/Spanish.lproj
	# plutil -convert xml1 ScreenCapture.strings

Modificar las lineas

	# vim ScreenCapture.strings

	<key>%@ %@ at %@</key>
			  <string>%@ %@ a la(s) %@</string>
A

	<key>%@ %@ at %@</key>
			  <string>%@ %@_at_%@</string>

Y volver al archivo a binario

	# plutil -convert binary1 ScreenCapture.strings
	# exit
	$ killall SystemUIServer

## Recuperar espacio

Revisar el directorio `Caches` y borrar algunos de los directorios que utilizan más espacio

    du --max-depth=1 -h ~/Library/Caches/ | sort -hk1

Revisar el directorio de docker y hacer un prune para limpiar, con esto se perderán volúmenes e imágenes docker.

    du --max-depth=1 -h ~/Library/Containers/com.docker.docker/Data
    docker system prune -a --volumes

Limpiar y recuperar espacio utilizado por brew

    brew cleanup


## Referencias:
* [Screenshot filename in Lion](https://discussions.apple.com/thread/3214350?start=0&tstart=0)
* [How do I change the default screenshot name in OS X Lion?](http://superuser.com/questions/339702/how-do-i-change-the-default-screenshot-name-in-os-x-lion/)
