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
