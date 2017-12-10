---
layout: default
title: sudo
---
Usuarios sin password en `sudo`.
Agregar al archivo `/etc/sudoers`

    user1 ALL=(ALL)      NOPASSWD: ALL

O

    echo "user1 ALL=(root) NOPASSWD:ALL" > /etc/sudoers.d/user1
    chmod 0440 /etc/sudoers.d/user1
