---
layout: wiki-note
title: awk
---
La suma del tamaño de los archivos

    du /ruta/archivos | awk 'BEGIN { sum=0 }{ sum+= $1 } END{ print sum }'

Agregar columna con número de columna (desde 0)

    awk 'BEGIN {i=0}{print i,$0; i=i+1}' archivo.txt

