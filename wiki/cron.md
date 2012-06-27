---
layout: default
title: cron
---
Es recomendable definir algunas variables en crontab, como

    PATH= :  igual al PATH del usuario
    MAILTO= : a donde deberian llegar los mensajes de cron

Ejemplo


    MAILTO=user@mail
    PATH=/usr/local/bin:/bin:/usr/bin:/star/bin:/home/user/bin
    SHELL=/bin/bash
    HOME=/home/user
