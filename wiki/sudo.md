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


En el archivo sudoers el orden importa, si el usuario m5stack pertenece al grupo wheel, y el grupo wheel tiene permisos para usar sudo con password, entonces el usuario m5stack también tendrá que usar password, por eso es importante colocar la línea de m5stack después de la línea del grupo wheel.

    unitv2# cat /etc/sudoers
    root   ALL=(ALL) ALL
    %wheel ALL=(ALL) ALL
    %sudo  ALL=(ALL) ALL
    %wheel ALL=(ALL) ALL
    m5stack ALL=(ALL) NOPASSWD:ALL
