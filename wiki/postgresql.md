---
layout: default
title: PostgreSQL
---

## Comandos básicos

Entrar a posgres, con el usuario postgres

    psql -U postgres

Ejecutar comando sin paginación

    psql -P pager -Upostgres myDatabase -c "select * from myTable"

Listar las bases de datos

    \l

Borrar base de datos

    drop database myDatabase;

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

`LAG` para utilizar el dato anterior, calcular la diferencia y mostrar las distintas de 0.

    SELECT inserted_at,
           asset,
           free,
           inc
    FROM   (
                    SELECT   inserted_at,
                             asset,
                             free,
                             Cast(free AS FLOAT) - Cast( Lag(free) OVER ( ORDER BY inserted_at ) AS FLOAT ) AS inc
                    FROM     balances
                    WHERE    asset IN ('BTC')
                    ORDER BY inserted_at DESC limit 120 ) AS t
    WHERE  inc != 0;

Es necesario tener un select anidado para poder utilizar `inc` como filtro, sin esto no se puede usar en el `where`.

### Backup

Backup de base de datos en contenedor

    docker exec -t container_name pg_dump -c -U postgres db_name > dump_`date +%Y%m%d_%H%M%S`.sql

Restaurar base de datos a contenedor

    cat dump_20221213_131716.sql | docker exec -i container_name psql -U postgres db_name

docker-compose de postgres

    version: '3.8'
    services:
      db:
        image: postgres:14.1-alpine
        restart: always
        environment:
          - POSTGRES_USER=postgres
          - POSTGRES_PASSWORD=postgres
        ports:
          - '5432:5432'
        volumes:
          - db:/var/lib/postgresql/data
    volumes:
      db:

## Referencias

-   [How To Install and Use PostgreSQL on Ubuntu 14.04](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-postgresql-on-ubuntu-14-04)
-   https://stackoverflow.com/questions/2596670/how-do-you-find-the-row-count-for-all-your-tables-in-postgres
-   https://stackoverflow.com/questions/24718706/backup-restore-a-dockerized-postgresql-database
