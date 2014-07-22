---
layout: default
title: openshift
---

Ver logs de la app

    rhc tail app_name

### shh

Conectar a la app por ssh

    rhc app ssh -a app_name

Ver lista de llaves ssh agregadas en la app

    rhc sshkey list

Agregar llave publica ssh

    rhc sshkey add key_name /path/to/key.pub
