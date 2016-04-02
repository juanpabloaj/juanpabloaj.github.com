---
layout: default
title: SSH
---
Para comandos remotos

    ssh remote_host '/sbin/lspci | grep Ether'

## scp
Para transferencia de archivos usar el comando `scp`

    scp archivo user@host:

Donde `host` es el remoto donde se transferirá el archivo, notar los dos puntos al final.

## SSH sin password

### Automático

	ssh-copy-id -i ~/.ssh/id_rsa.pub user@remoteHost

### Manual
Generar llave en equipo cliente

	ssh-keygen -t rsa

Pedirá una frase, dejar en blanco

En el directorio ~/.ssh se creo el archivo `id_rsa.pub`, es necesario enviarlo al
equipo a conectar.

	scp ~/.ssh/id_rsa.pub user@equipo:.ssh/authorized_keys2

Cambiar los permisos en la llave copiada

	chmod 700 ~/.ssh
	chmod 644 ~/.ssh/authorized_keys2

En el caso de tener mas de una llave agregar al final del archivo

	cat id_rsa.pub >> ~/.ssh/authorized_keys2

### Importando public key
Desde cliente tectia para openssh

    OpenSSH: ssh-keygen -i -f [filename]

Desde openssh a tectia

    OpenSSH: ssh-keygen -e -f [filename].
    Tectia: ssh-keygen --import-public-key [infile] [outfile]

## SSH túnel inverso

Conectar a un equipo remoto detrás de un router, este inicia la conexión para
poder acceder a el

	u_local@local (www.miip.com)   < - - - -   u_remoto@remoto (192.168.0.12)


En equipo remoto

	ssh -l u_local -R 22222:localhost:22 -N www.miip.com

En el local

	ssh -p 22222 u_remoto@localhost

## Config

Crear el archivo ~/.ssh/config con lo siguiente

	Host nombre_del_host
	Hostname ip_del_host
	port puerto
	user usuario
	ForwardX11 yes

Para hacer la conexión basta con

	ssh nombre_del_host

## sshd_config

Solo alojar usuarios específicos

    AllowUsers user1 user2

No permitir password, solo se puede autentificar por llave

    PasswordAuthentication no

## Referencias

* [How do I get publickey user authentication to work?](http://www.snailbook.com/faq/publickey-userauth.auto.html)  
* [Using Putty on Windows to login Linux securely via OpenSSH](http://www.linux-sxs.org/networking/openssh.putty.html)  
