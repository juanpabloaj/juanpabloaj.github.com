---
layout: wiki-note
title: tar
---

Comprimir como .tar.gz

    $ tar cvfz comprimido.tar.gz archivo1 archivo2

Descomprimir

    $ tar xvfz comprimido.tar.gz

    $ tar Jxvf comprimido.tar.xz

Descomprimir a un directorio

    tar -C /usr/local/ -xvf file.tar.gz
