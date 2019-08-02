---
layout: default
title: Brew
---

Limpiar y recuperar espacio

    brew cleanup

## Recomendados para instalar

<script src="https://gist.github.com/juanpabloaj/1177435.js"></script>

### bash-completion
Agrega autocompletación para bash, es necesario agregar a `~/.bash_profile`

    if [ -f $(brew --prefix)/etc/bash_completion ]; then
        . $(brew --prefix)/etc/bash_completion
    fi

### coreutils
Instalar herramientas gnu, todas con la letra g como prefijo, ejemplo : `gls`.

## Referencias

[homebrew](http://mxcl.github.com/homebrew/)  
