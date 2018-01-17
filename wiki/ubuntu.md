---
layout: default
title : Ubuntu
---
Bloquear y desbloquear la pantalla desde la terminal

    DISPLAY=:0 gnome-screensaver-command -l
    DISPLAY=:0 gnome-screensaver-command -d

## java

Listar alternativas disponibles de java

    update-java-alternatives -l

Escoger

    update-java-alternatives -s java-6-sun

## Discos de arranque

Para crear un Ubuntu que bootee desde USB se puede utilizar el creador de discos de arranque (Startup Disk Creator) que trae la distribución.

## DNS

Agregar DNS, al final de archivo `/etc/network/interfaces` agregar

    dns-nameservers dnsserverip

Reiniciar red

    sudo /etc/init.d/networking restart

## Interfaces de red

Agregar gateway a interfaz de red

    route add default gw 192.168.1.1 enp3s0


## Referencias

* https://unix.stackexchange.com/questions/174349/what-overwrites-etc-resolv-conf-on-every-boot
