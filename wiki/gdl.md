---
layout: default
title: gdl
---
# Gnu Data Language

## Ubuntu

Para instalar

    apt-get install gnudatalanguage

Para plotear en algunas distribuciones en necesario

    sudo apt-get install plplot11-driver-xwin

## Ejemplo

    orig = sin((findgen(200)/35)^2.5)
    plot,orig
    exit
