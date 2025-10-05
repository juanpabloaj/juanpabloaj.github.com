---
layout: wiki-note
title: Manipulación de texto
---

Renombrar varios archivos

    for f in $(ls)
    do
        mv $f ${f/patron/nuevopatron}
    done
