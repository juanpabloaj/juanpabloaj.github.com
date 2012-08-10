---
layout: default
title : Debian
---
Ver servicios disponibles

    service --status-all

Para definir la zona horaria

    dpkg-reconfigure tzdata

###Recuperar password
En grub presionar `e`, al final de la linea del kernel agregar

    init=/bin/bash

Al iniciar como `root` re montar con permisos de escritura

    mount -n -o remount,rw /

Y cambiar el password

    passwd

###De lenny a squeeze
En el archivo `/etc/apt/source.list` remplezar todas las palabras lenny por squeeze.

Actualizar los paquetes necesario

	$ sudo apt-get update
	$ sudo apt-get install apt dpkg
	$ sudo apt-get dist-upgrade

