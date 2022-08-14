---
layout: default
title: task spooler
---
Lanzar trabajos con etiquetas

    for i in $(seq -w 1 100)
    do
        tsp -L $i date
    done

Borrar trabajos por ID

    for i in $(seq -w 1 100)
    do
        tsp -r $i
    done

Cambiar concurrencia a 2

    tsp -S 2
