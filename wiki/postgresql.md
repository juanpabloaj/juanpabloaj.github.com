---
layout: wiki-note
title: PostgreSQL
---

## Comandos básicos

Entrar a posgres, con el usuario postgres

    psql -U postgres

Ejecutar comando sin paginación

    psql -P pager -Upostgres myDatabase -c "select * from myTable"

No tener paginación en las consultas

    \pset pager 0

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

Listar schemas

    \dn

Listar tablas en un schema

    \dt schema_name.*

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

Obtener todos los indices de las tablas de la base de datos

    SELECT schemaname, tablename, indexname, indexdef
    FROM pg_indexes
    WHERE schemaname NOT IN ('pg_catalog', 'information_schema')
    ORDER BY tablename;

### Backup

Backup de base de datos en contenedor.

    -F para formato de salida (p, plain)
    -E para encoding (UTF-8)
    -c clean agregar drop table if exists

    docker exec -t container_name pg_dump -c -F p -E UTF-8 -U postgres db_name > dump_`date +%Y%m%d_%H%M%S`.sql

Adicionalmente para no crear roles se pueden agregar las opciones

    --no-owner --no-privileges

Restaurar base de datos a contenedor

    cat dump_20221213_131716.sql | docker exec -i container_name psql -U postgres db_name

En algunas ocasiones el dump no era cargado porque no encontraba la extensión `pgcrypto`, la solución fue comentar la linea, incluida en el dump, relacionada con `search_path`.

    -- SELECT pg_catalog.set_config('search_path', '', false);

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

Obtener secuencias en base de datos

    SELECT * from pg_catalog.pg_sequences;

Verificar si la secuencia existe

    SELECT * FROM   public.goose_db_version_id_seq;

## Referencias

-   [How To Install and Use PostgreSQL on Ubuntu 14.04](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-postgresql-on-ubuntu-14-04)
-   https://stackoverflow.com/questions/2596670/how-do-you-find-the-row-count-for-all-your-tables-in-postgres
-   https://stackoverflow.com/questions/24718706/backup-restore-a-dockerized-postgresql-database
