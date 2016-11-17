---
layout: default
title: valgrind
---

## Install

### Desde código fuente

Descargar, descomprimir y compilar

    wget http://valgrind.org/downloads/valgrind-3.12.0.tar.bz2
    tar xvfj valgrind-3.12.0.tar.bz2
    cd valgrind-3.12.0
    ./configure --prefix=$HOME/opt
    make
    make install

### OSX

    brew install valgrind
