---
layout: post
comments: true
title : Compilando gcc/g++ sin permiso root
categories:
---

En un servidor necesitaba una versión de g++ más actual y no tenía permisos de root, por lo que tuve que compilar el compilador manualmente. En este post voy a describir los pasos que realicé.

Si bien lo que me interesa es instalar g++, en lo que sigue voy a hablar de gcc ya que ese es el nombre del paquete que voy a instalar.

Primero instalar [zlib][zlib], una de las dependencias de gcc.

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
    export LD_LIBRARY_PATH

Recargar `~/.bashrc`

    source ~/.bashrc

Ahora gcc, descargar [gsrc][gsrc], código fuente de varios paquetes gnu

    wget http://ftp.gnu.org/gnu/gsrc/gsrc-2014.10.11.tar.gz

Seguir las instrucciones del sitio de [gsrc][gsrc]

    cd gsrc
    ./bootstrap
    ./configure --prefix=$HOME/gnu

Compilar lo gcc/g++

    make -C gnu/gcc
    make -C gnu/gcc install

Agregar la ubicación de gcc al `PATH` y de librerías a `LD_LIBRARY_PATH`

    PATH=$HOME/gnu/bin:$PATH
    LD_LIBRARY_PATH=$HOME/gnu/lib:$HOME/gnu/lib64:$HOME/opt/lib:$LD_LIBRARY_PATH

    export PATH
    export LD_LIBRARY_PATH

Recargar `~/.bashrc`

    source ~/.bashrc

Con los pasos anteriores debería estar disponible para utilizar g++.

### Referencias

* [gsrc][gsrc]
* [zlib][zlib]

[zlib]: http://zlib.net/
[gsrc]: https://www.gnu.org/software/gsrc/
