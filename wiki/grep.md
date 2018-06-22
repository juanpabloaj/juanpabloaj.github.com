---
layout: default
title: grep
---
buscar dos expresiones diferentes en un archivo

    grep 'expresion1\|expresion2' archivo

Encontrar caracteres no uft8

    grep -P "[\x80-\xFF]" file

## Referencias

* https://stackoverflow.com/questions/29465612/how-to-detect-invalid-utf8-unicode-binary-in-a-text-file
