---
layout: default
title: rsyslog
---

Instalar y dejar corriendo en Centos 6

    yum install -y rsyslog
    service start rsyslog

Archivo de configuración

    /etc/rsyslog.conf

Por defecto los logs quedan en

    /var/log/boot.log

o sino revisar el archivo de configuración.
