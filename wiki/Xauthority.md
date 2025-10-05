---
layout: wiki-note
title: Xauthority
---
Usar el .Xauthority de otro usuario

    export XAUTHORITY=/home/user/.Xauthority

De esta un usuario que no tiene X puede lanzar aplicaciones gráficas.

Si al conectar por interfaz gráfica

    ssh -Y -C user@198.19.249.12

obtiene el error

    X11 connection rejected because of wrong authentication.

Probar exportando

    export XAUTHORITY=$HOME/.Xauthority
    chromium
