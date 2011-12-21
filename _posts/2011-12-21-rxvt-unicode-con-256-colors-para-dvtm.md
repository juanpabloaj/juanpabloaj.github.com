---
layout: post
comments: true
title : rxvt-unicode con 256 colors para dvtm
categories:
---
{:enlaces: .enlaceGris}
El problema comenzó cuando desde `dvtm` iniciaba una conexión ssh a una maquina
ubuntu, obtenía este mensaje

    tput: unknown terminal "rxvt-256color"
    tput: unknown terminal "rxvt-256color"
    tput: unknown terminal "rxvt-256color"
    tput: unknown terminal "rxvt-256color"
    tput: unknown terminal "rxvt-256color"
    tput: unknown terminal "rxvt-256color"
    ...

Entraba con `TERM=rxvt-256color` ya que `dvtm` necesita esta terminal para mostrar
los 256 colores.

Lo que sigue es una traducción rápida de
 [Get rxvt-unicode with 256 color support on Ubuntu](http://scie.nti.st/2008/10/13/get-rxvt-unicode-with-256-color-support-on-ubunut)
{:enlaces}

Descargar el src de `rxvt-unicode` y aplicar el parche para 256 colores

    # descar el fuente
    cd ~/src
    mkdir rxvt-unicode
    cd rxvt-unicode
    apt-get source rxvt-unicode
    cd rxvt-unicode-9.07

    # aplicar parche
    patch -p1 < doc/urxvt-8.2-256color.patch

    # construir los paquetes
    sudo apt-get build-dep rxvt-unicode
    dpkg-builpackage -us -uc -rfakeroot

    # instalar
    cd ..
    sudo dpkg -i rxvt-unicode_9.07-2_amd64.deb

Teniendo `rxvt-unicode` instalado  modificar el terminfo

    cd ~
    infocmp -L rxvt-unicode rxvt-unicode.terminfo

    vim rxvt-unicode.terminfo
    # cambiar la linea
    lines_of_memory#0, max_colors#88, max_pairs#256,
    # a
    lines_of_memory#0, max_colors#256, max_pairs#32767

    # crear el directorio ~/.terminfo
    install -d .terminfo
    # reconstruir terminfo de rxvt-unicode
    tic -o .terminfo/ rxvt-unicode.terminfo
    rm rxvt-unicode.terminfo

Y finalmente para que `dvtm` tenga 256 colores

    cd ~/.terminfo/r
    cp rxvt-unicode rxvt-256color

Con esto `dvtm` no debería mostrar más problemas.

### Referencias
* [Get rxvt-unicode with 256 color support on Ubuntu](http://scie.nti.st/2008/10/13/get-rxvt-unicode-with-256-color-support-on-ubunut)
{:enlaces}
