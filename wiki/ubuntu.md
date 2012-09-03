---
layout: default
title : Ubuntu
---
Bloquear y desbloquear la pantalla desde la terminal

    DISPLAY=:0 gnome-screensaver-command -l
    DISPLAY=:0 gnome-screensaver-command -d

###java

Listar alternativas disponibles de java

    update-java-alternatives -l

Escoger

    update-java-alternatives -s java-6-sun
