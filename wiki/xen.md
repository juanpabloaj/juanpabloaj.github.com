---
layout: default
title: xen
---
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
