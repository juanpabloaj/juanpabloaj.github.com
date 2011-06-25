---
layout: default
title: ssh
---

SSH sin password

automatico

	ssh-copy-id -i ~/.ssh/id_rsa.pub user@remoteHost

manual 
Generar llave en equipo cliente

	ssh-keygen -t rsa

pedira una frase, dejar en blanco

En el directorio ~/.ssh se creo el archivo id_rsa.pub, es necesario enviarlo al equipo a conectar.

	scp ~/.ssh/id_rsa.pub user@equipo:.ssh/authorized_keys2

cambiar los permisos en la llave copiada

	chmod 700 ~/.ssh
	chmod 644 ~/.ssh/authorized_keys2

en el caso de tener mas de una llave agregar al final del archivo 

	cat id_rsa.pub >> ~/.ssh/authorized_keys2

## SSH tunel inverso 

Conectar a un equipo remoto detras de un router, este inicia la conexion para poder acceder a el 

	u_local@local (www.miip.com)   < - - - -   u_remoto@remoto (192.168.0.12) 


en equipo remoto

	ssh -l u_local -R 22222:localhost:22 -N www.miip.com

en el local

	ssh -p 22222 u_remoto@localhost

## Config

crear el archivo ~/.ssh/config con lo siguiente

	Host nombre_del_host
	Hostname ip_del_host
	port puerto
	user usuario
	ForwardX11 yes

para hacer la conexión basta con 

	ssh nombre_del_host

