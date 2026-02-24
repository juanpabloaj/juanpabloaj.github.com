---
layout: wiki-note
title: sudo
---
Usuarios sin password en `sudo`.
Agregar al archivo `/etc/sudoers`

    user1 ALL=(ALL)      NOPASSWD: ALL

O

    echo "pablo ALL=(root) NOPASSWD:ALL" > /etc/sudoers.d/pablo
    chmod 0440 /etc/sudoers.d/pablo


En el archivo sudoers el orden importa, si el usuario myuser pertenece al grupo wheel, y el grupo wheel tiene permisos para usar sudo con password, entonces el usuario myuser también tendrá que usar password, por eso es importante colocar la línea de myuser después de la línea del grupo wheel.

    $ cat /etc/sudoers
    root   ALL=(ALL) ALL
    %wheel ALL=(ALL) ALL
    %sudo  ALL=(ALL) ALL
    %wheel ALL=(ALL) ALL
    myuser ALL=(ALL) NOPASSWD:ALL
