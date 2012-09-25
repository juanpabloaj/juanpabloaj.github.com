---
layout: default
title : Ubuntu
---
Bloquear y desbloquear la pantalla desde la terminal

    DISPLAY=:0 gnome-screensaver-command -l
    DISPLAY=:0 gnome-screensaver-command -d

##java

Listar alternativas disponibles de java

    update-java-alternatives -l

Escoger

    update-java-alternatives -s java-6-sun

##Discos de arranque

Para crear un Ubuntu que bootee desde USB se puede utilizar el creador de discos de arranque (Startup Disk Creator) que trae la distribución.
