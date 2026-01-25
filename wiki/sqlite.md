---
layout: wiki-note
title : sqlite
---
Mostrar tablas

    .tables

Describir tabla

    .schema table_name

Salir

    .quit

Convertir timestamp en milisegundos a datetime

    select datetime(timestamp/1000, 'unixepoch');

Para mostrar cabeceras de columna, iniciar con

    sqlite -header -column database_location

## Referencias

* https://stackoverflow.com/questions/3439624/sqlite-timestamp-formatting
