---
layout: default
title : Debian
---
Ver servicios disponibles

    service --status-all

###De lenny a squeeze
En el archivo `/etc/apt/source.list` remplezar todas las palabras lenny por squeeze.

Actualizar los paquetes necesario

	$ sudo apt-get update
	$ sudo apt-get install apt dpkg
	$ sudo apt-get dist-upgrade

Para definir la zona horaria

    dpkg-reconfigure tzdata
