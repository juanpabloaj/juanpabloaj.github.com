---
layout: default
title : PostgreSQL
---

## Comandos básicos

Entrar a posgres, con el usuario postgres

    psql -U postgres

Listar las bases de datos

    \l

Listar con detalles, como espacio utilizado por base de datos

    \l+

Cambiar a una base de datos

    \c database_name

Listar tablas

    \dt

Describir tabla

    \d table_name

Contar filas de una db

    SELECT schemaname,relname,n_live_tup
    FROM pg_stat_user_tables
    ORDER BY n_live_tup DESC;

## Referencias

* [How To Install and Use PostgreSQL on Ubuntu 14.04](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-postgresql-on-ubuntu-14-04)
* https://stackoverflow.com/questions/2596670/how-do-you-find-the-row-count-for-all-your-tables-in-postgres
