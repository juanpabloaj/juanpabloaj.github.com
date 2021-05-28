---
layout: default
title : sqlite
---
Mostrar tablas

    .tables

Salir

    .quit

Convertir timestamp en milisegundos a datetime

    select datetime(timestamp/1000, 'unixepoch');

## Referencias

* https://stackoverflow.com/questions/3439624/sqlite-timestamp-formatting
