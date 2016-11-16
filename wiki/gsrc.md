---
layout: default
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

### Referencias

* [gsrc][gsrc]

[gsrc]: https://www.gnu.org/software/gsrc/
