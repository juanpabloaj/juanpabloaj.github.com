---
layout: default
title: systemd
---

### crear un timer como usuario

Cuando se crea un timer como usuario, solo se ejecutará cuando el usuario esté logeado.

Para que el timer se ejecute siempre los archivos `*.{timer,service}` deben ser creados como root en `/etc/systemd/system/`.

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

Recargar el demonio, lanzar timer y verificar su estado

    systemctl --user daemon-reload
    systemctl --user start foo.timer
    systemctl --user status foo.timer

Listar los timers activos

    systemctl --user list-timers --all

Seguir los logs con

    journalctl --user -f

### Referencias

* https://www.redhat.com/sysadmin/introduction-path-units
* https://www.unixsysadmin.com/systemd-user-services/
* http://unix.stackexchange.com/questions/600642/systemd-path-how-to-tell-which-pathchanged/
* https://wiki.archlinux.org/title/Systemd/Timers
* https://blog.dcycle.com/blog/112/systemd-replacement-cron-every-10-seconds/
