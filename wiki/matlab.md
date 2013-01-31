---
layout: default
title: matlab
---

Lanzar sin la ventana gráfica ni figura de matlab al cargar

    matlab -nodesktop -nosplash

Si tenemos en un archivo llamado `sincmd.m`, las lineas

    sin(0:0.1:1)
    exit;

Para ejecutarlas en la linea de comandos

    matlab -r sincmd

### Comentarios
Comentarios de una linea

    % este es un comentarios

De varias lineas

    %{
        varios
        comentarios
    %}

