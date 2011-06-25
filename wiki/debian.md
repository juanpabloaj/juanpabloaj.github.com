--- 
layout: default
title : Debian
---
###De lenny a squeeze 
En el archivo `/etc/apt/source.list` remplezar todas las palabras lenny por squeeze.  
Actulizar los paquetes necesario  

	$ sudo apt-get update
	$ sudo apt-get install apt dpkg 
	$ sudo apt-get dist-upgrade
