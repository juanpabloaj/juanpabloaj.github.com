---
layout: default
title : MySQL
---
Mostrar usuarios

    SELECT user FROM mysql.user;

Borrar registro

    delete from laTabla where laColumna='unValor'

Actualizar registros que cumplan las condiciones

    update af set columna='valor_ nuevo' where columna='valor_registro'

Mostrar un intervalo de fechas

    select * from miTable fecha > now() - interval 4 hour and fecha < now() + interval 4 hour

### my.conf
El `/etc/mysql/my.conf/` se definen las configuraciones.

Para que se pueda realizar una consulta remota es necesario cambiar la linea que contiene `bind-address`

    [mysqld]
    bind-address    = ip_real

Y reiniciar el el servicio `MySQL`.
