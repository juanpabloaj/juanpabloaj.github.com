---
layout: wiki-note
title: grep
---
buscar dos expresiones diferentes en un archivo

    grep 'expresion1\|expresion2' archivo

Encontrar caracteres no uft8

    grep -P "[\x80-\xFF]" file

Solo mostrar texto que siga expresión regular

    grep -Po '(temp_input=[0-9]+)'

En la búsqueda recursiva, solo buscar en los archivos .go

    grep -r --color --include=\*.go expression_to_search .

Ignorar o descartar resultados

    grep pattern file | grep -v ignored_pattern

## Referencias

* https://stackoverflow.com/questions/29465612/how-to-detect-invalid-utf8-unicode-binary-in-a-text-file
* https://stackoverflow.com/questions/2777579/how-to-output-only-captured-groups-with-sed
