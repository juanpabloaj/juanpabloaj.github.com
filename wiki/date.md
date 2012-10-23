---
layout: default
title: date
---
Crear un directorio llamado la fecha actual

	mkdir $(date +%F)

Definir hora

    date --set="20 JUL 2012 9:20:00"

Pedir una fecha

    date --date="2012-10-22 2 day ago"
