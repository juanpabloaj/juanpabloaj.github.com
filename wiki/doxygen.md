---
layout: default
title: doxygen
---
Generar un archivo de configuración base

    doxygen -g config_file_name

Llamar doxygen con archivo de configuración

    doxygen config_file_name

Para generar los gráficos es necesario tener instalado `graphviz`

## Opciones del archivo de configuración

Algunas opciones útiles del archivo de configuración

Ubicación de documentación generada, con esto la documentación quedará en `doc/html`

    OUTPUT_DIRECTORY = doc

Generar documentación de todos los archivos, no solo de los `.h`

    EXTRACT_ALL = YES

Directorios de los cuales se va a generar documentación

    INPUT = src include

No generar documentación en latex

    GENERATE_LATEX = NO

Gráficos de llamadas

    CALL_GRAPH = YES

Para la opción anterior y otras opciones de generación de gráficos es necesario tener

    HAVE_DOT = YES

