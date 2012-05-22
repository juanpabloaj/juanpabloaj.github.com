---
layout: default
title: rsync
---
Copiar solo los nuevos, incluyendo directorios sobre, ssh

    rsync -az -e ssh remoteuser@remotehost:remote_dir local_dir
