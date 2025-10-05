---
layout: wiki-note
title : flake8
---
Ignorar error W191, producido por usar `\t`

    flake8 --ignore=W191 code.py

Mostrar errores y estadísticas de errores cometidos

    flake8 --statistics code.py

Solo mostrar estadísticas, ordenadas por frecuencia

    flake8 --statistics code.py -qq | sort -nk1
