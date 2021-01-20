---
layout: default
title : MySQL
---

### Tablas

Crear tabla

    CREATE TABLE `table_name`(
    	ID INT(6) NOT NULL,
	names VARCHAR(20) NOT NULL,
    	PRIMARY KEY (ID)
    );

Borrar tabla si existe

    DROP TABLE IF EXISTS `table_name`;

Alter table para dejar campos fechas con valor por defecto o cambiar valor cada vez que se actualiza

    ALTER TABLE `users`
        CHANGE COLUMN `createdAt` `createdAt` TIMESTAMP
        NOT NULL DEFAULT CURRENT_TIMESTAMP;
    ALTER TABLE `users`
        CHANGE COLUMN `updatedAt` `updatedAt` TIMESTAMP
        NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP;

### Usuarios

Crear usuario

    grant all on table_name. * to 'username'@'localhost';

Crear usuario con acceso externo

    grant select on table_name. * to 'username'@'localhost';

Mostrar usuarios

    SELECT user FROM mysql.user;

Borrar registro

    delete from laTabla where laColumna='unValor'

Actualizar registros que cumplan las condiciones

    update af set columna='valor_ nuevo' where columna='valor_registro'

Mostrar un intervalo de fechas

    select * from miTable fecha > now() - interval 4 hour and fecha < now() + interval 4 hour

Levantar como usuario

    sudo chown -R user_name /var/lib/mysql
    /usr/sbin/mysqld --user=user_name

## Fechas

Restar 10 segundos a una fecha

    select now(), TIMESTAMPADD(SECOND, -10, now());
    +---------------------+----------------------------------+
    | now()               | TIMESTAMPADD(SECOND, -10, now()) |
    +---------------------+----------------------------------+
    | 2017-07-05 22:16:21 | 2017-07-05 22:16:11              |
    +---------------------+----------------------------------+

### my.conf
El `/etc/mysql/my.conf/` se definen las configuraciones.

Para que se pueda realizar una consulta remota es necesario cambiar la linea que contiene `bind-address`

    [mysqld]
    bind-address    = ip_real

## character set

Revisar configuración de los character set

    show variables like 'char%'; show variables like 'collation%';

Y reiniciar el el servicio `MySQL`.

## mysqldump

`mysqldump` con `where`

    mysqldump -u user dababase_name table_name --where="id=10"

Solo datos, sin creación de tablas y con multiples insert por registro

    mysqldump --no-create-info --extended-insert=FALSE -u user_name db_name


## Referencias

* https://stackoverflow.com/questions/935556/mysql-dump-by-query
