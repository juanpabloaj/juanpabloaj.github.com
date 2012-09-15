---
layout: default
title: make
---
Compilar todos los `*.cpp`

    files = $(basename $(shell ls *cpp))

    all: $(files)

    %: %.cpp
        g++ -o $@ $<

    clean:
        rm $(files)
