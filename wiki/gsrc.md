---
layout: wiki-note
title: gsrc
---
Si no se tiene permisos de administrado se pueden instalar herramientas gnu (gcc, etc).

Descargar [gsrc][gsrc]

    wget http://ftp.gnu.org/gnu/gsrc/gsrc-2014.10.11.tar.gz

Seguir las instrucciones del sitio de [gsrc][gsrc]

    cd gsrc
    ./bootstrap
    ./configure --prefix=$HOME/gnu

Compilar lo que se necesita

    make -C gnu/gcc
    make -C gnu/gcc install

Algunos paquetes pueden necesitar dependecias externas, por ejemplo gcc necesita zlib (supongo que no las incluyen por inconpatibilidad de licencia).

### Instalar zlib

Descargar, compilar e instalar zlib

    wget https://github.com/madler/zlib/archive/v1.2.7.tar.gz
    mv v1.2.7 zlib-1.2.7.tar.gz
    tar xvfz zlib-1.2.7.tar.gz
    cd zlib-1.2.7
    ./configure --prefix=$HOME/opt
    make
    make install

Agregar la ubicación de zlib a `LD_LIBRARY_PATH` in `~/.bashrc`.

    LD_LIBRARY_PATH=$LD_LIBRARY_PATH:$HOME/opt/lib

Recargar `~/.bashrc`

    source ~/.bashrc

### Referencias

* [gsrc][gsrc]

[gsrc]: https://www.gnu.org/software/gsrc/
