---
layout: default
title: fdisk
---
Mostrar los discos y particiones

    fdisk -l

## Crear una partición en un disco vacío
Tomar el disco 

    fdisk /dev/hdb

Seguir las instrucciones, con `m` se puede ver el help.
Las cuales deberían necesitar los comandos en el siguiente orden:

* `p` Crear una nueva partición
* `n` nueva partición.
* `p` para que sea primaria.
* `1` el número de la partición.
* `t` definir tipo de partición
* `1` en cual partición
* `83` tipo linux
* `w`guardar los cambios

Ahora podemos crear una sistema de archivos sobre la partición.

    mkfs.ext3 -b 4096 /dev/hdb1

Y montar

    mount -t ext3 /dev/hdb1 /directorio_para_montar

## Referencias

* [Partitioning and Formatting Second Hard Drive in Linux - ext3](http://www.idevelopment.info/data/Unix/Linux/LINUX_PartitioningandFormattingSecondHardDrive_ext3.shtml)  
