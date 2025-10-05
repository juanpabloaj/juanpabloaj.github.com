---
layout: wiki-note
title: ssmtp
---
Para evitar el uso de sendmail, utilizando un servidor externo de smtp.

Especialmente útil para el envío de logs.

    root=mail_usuario@gmail.com
    mailhub=smtp.gmail.com:587
    hostname=mail_usuario@gmail.com
    AuthUser=mail_usuario
    AuthPass=mail_password
    UseSTARTTLS=YES
    FromLineOverride=YES

Archivo de configuración `/etc/ssmtp/ssmtp.conf`

Definición de email para usuarios del sistema `/etc/ssmtp/revaliases`

    usuario_sistema:mail_usuario@gmail.com:587
