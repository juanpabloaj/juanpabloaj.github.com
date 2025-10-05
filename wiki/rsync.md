---
layout: wiki-note
title: rsync
---
Copiar solo los nuevos, incluyendo directorios sobre, ssh

    rsync -az -e ssh remoteuser@remotehost:remote_dir local_dir

Excluir directorios a enviar

    rsync -vr --exclude=*node_modules* --exclude=.git src user@ip:dst
