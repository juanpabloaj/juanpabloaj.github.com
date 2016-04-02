---
layout: default
title: xen
---
# Install

## Ubuntu
Instalar los paquetes

    sudo apt-get install xen-hypervisor-4.1-amd64 xen-utils-4.1 xenwatch xen-tools xen-utils-common xenstore-utils virtinst

Reiniciar, escoger el kernel de xen y verificar la instalación

    xm info
    brctl show

En el archivo `/etc/xen/xend-config.sxp` descomentar o agregar la linea

    (xend-unix-server yes)

Agregar a `~/.bashrc`

    export VIRSH_DEFAULT_CONNECT_URI="xen:///"

Reiniciar, escoger el kernel de xen y verificar

    $ virsh version
    Compilado contra la biblioteca: libvir 0.9.8
    Utilizando la biblioteca: libvir 0.9.8
    Utilizando API: Xen 0.9.8
    Ejecutando hypervisor: Xen 4.1.0

# Uso

Información de xen

    xm info

Listar imágenes existentes

    xen-list-images

Levantar una vm

    xm create /etc/xen/nombre_maquina.cfg

Acceder a la vm

    xm console nombre_maquina

Para salir de la consola de la maquina virtual

    CTRL-]

Listar vm que están arriba

    xm list

Para que las imágenes se inicien en el booteo es necesario crear un link simbólico del archivo de configuración de la vm al directorio auto en xen

    ln -s /etc/xen/nombre_maquina.cfg /etc/xen/auto

# Referencias

* [Setup your cloud server in 3 minutes with Xen 4.1 on Ubuntu 11.10](http://www.beyondlinux.com/2011/11/02/install-xen-4-1-and-setup-your-cloud-os-on-ubuntu-11-10/)
