---
layout: default
title: awk
---
La suma del tamaño de los archivos

    du /ruta/archivos | awk 'BEGIN { sum=0 }{ sum+= $1 } END{ print sum }'
