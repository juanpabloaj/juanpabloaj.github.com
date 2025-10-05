---
layout: wiki-note
title : vim install
---

### Pre requisitos

Para compilar vim con python soporte es necesitar tener las headers de python

    apt-get install python2 python2-dev
    apt-get install python3 python3-dev

### Compilación

Descargar el código fuente de github releases https://github.com/vim/vim/releases y descomprimir

    wget https://github.com/vim/vim/archive/v8.0.0513.tar.gz
    tar xvfz v8.0*

En el directorio descomprimido configurar la compilación, compilar e instalar

    cd vim-8.*
    ./configure \
        --prefix=$HOME/opt \
        --with-features=huge \
        --enable-pythoninterp \
        --enable-python3interp \
        --enable-cscope
    make
    make install
