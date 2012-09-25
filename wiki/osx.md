--- 
layout: default
title : OSX
---
## Recomendados

* TotalTerminal
* geektool
* Alfred
* Sparrow
* cloudapp
* iTerm2
* moon

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

## Volumen modo consola
El mínimo volumen es 0, el máximo es 10

    osascript -e "set Volume 10"

## Referencias:
[Screenshot filename in Lion](https://discussions.apple.com/thread/3214350?start=0&tstart=0)  
[How do I change the default screenshot name in OS X Lion?](http://superuser.com/questions/339702/how-do-i-change-the-default-screenshot-name-in-os-x-lion/)  
{:enlaces}
