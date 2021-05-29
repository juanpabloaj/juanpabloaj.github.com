---
layout: default
title: systemd
---

### crear un timer como usuario

Crear el directorio de los archivos de configuración del servicio y del timer

    mkdir -p ~/.config/systemd/user/
    touch ~/.config/systemd/user/foo.{timer,service}

El archivo del timer `foo.timer`, para ejecutar cada 10 segundos

    [Unit]
    Description=Run foo weekly

    [Timer]
    OnCalendar=*:*:0/10

    [Install]
    WantedBy=timers.target

El archivo del servicio `foo.service`

    [Unit]
    Description=My demo application

    [Service]
    ExecStart=bash -c "date && pwd"
    WorkingDirectory=/home/pablo/data

Recargar el demonio y lanzar el servicio

    systemctl --user daemon-reload
    systemctl --user start foo

Seguir los logs con

    journalctl --user -f

### Referencias

* https://www.redhat.com/sysadmin/introduction-path-units
* https://www.unixsysadmin.com/systemd-user-services/
* http://unix.stackexchange.com/questions/600642/systemd-path-how-to-tell-which-pathchanged/
* https://wiki.archlinux.org/title/Systemd/Timers
* https://blog.dcycle.com/blog/112/systemd-replacement-cron-every-10-seconds/
