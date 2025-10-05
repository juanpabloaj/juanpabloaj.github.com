---
layout: wiki-note
title : mpich2
---
## Compilar

Para generar las librerías compartidas

    ./configure --enable-shared --enable-sharedlibs=gcc
    --enable-fast
    --prefix=/usr/local/dir_para_instalar

Make

    make
    make install

Variables asociadas

    export PATH=$MPICH2_DIR/bin:$PATH
    export LD_LIBRARY_PATH=$MPICH2_DIR/lib:$LD_LIBRARY_PATH

### Referencias

* [MPICH Download and Installation](http://www.underworldproject.org/documentation/MpichDownload.html)
