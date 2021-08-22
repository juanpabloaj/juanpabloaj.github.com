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

Redireccionar salida del commando a syslog, para no depender de buzón, para no tener que instalar postfix.

    0 3 * * * (cmd1;  cmd2) 2>&1 | logger -t mycmd


## Referencias

* https://askubuntu.com/questions/222512/cron-info-no-mta-installed-discarding-output-error-in-the-syslog/967798
