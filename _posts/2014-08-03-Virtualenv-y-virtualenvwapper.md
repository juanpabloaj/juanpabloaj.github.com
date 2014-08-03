---
layout: post
comments: true
title : Virtualenv y virtualenvwapper
categories:
---
Para gestionar varios entornos creados por virtualenv, virtualenvwapper.

Instalar virtualenv y virtualenvwapper (usar sudo de ser necesario).

    pip install virtualenv
    pip install virtualenvwapper

Crear directorio para almacenar la información de cada entorno virtual.

    mkdir ~/Envs

Agregar al archivo de configuración de bash, `.bashrc`, la variable que almacena la ubicación de los entornos virtuales y la carga del script de virtualenvwapper

    export WORKON_HOME=~/Envs
    source /usr/local/bin/virtualenvwrapper.sh

El directorio de `virtualenvwrapper.sh` puede variar en algunos casos.

Con lo anterior, al abrir una nueva terminal, se podrán crear entornos virtuales más fácilmente, con el comando

    mkvirtualenv env1

Y activar con

    workon env1

## hooks

Una característica interesante de virtualenvwapper son sus hooks, ganchos, son script que se ejecutan después de una acción.

Por ejemplo, el hook `postactivate` será ejecutado después que un entorno sea activado, después de hacer `workon env1`.

Los hooks están almacenados en el directorio `$WORKON_HOME`.

## Referencias

* [virtualenvwapper](http://virtualenvwrapper.readthedocs.org/)
