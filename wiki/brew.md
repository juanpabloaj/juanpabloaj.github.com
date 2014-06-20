---
layout: default
title: brew
---

## Recomendados para instalar

### bash-completion
Agrega autocompletación para bash, es necesario agregar a `~/.bash_profile`

    if [ -f $(brew --prefix)/etc/bash_completion ]; then
        . $(brew --prefix)/etc/bash_completion
    fi

### coreutils
Instalar herramientas gnu, todas con la letra g como prefijo, ejemplo : `gls`.

## Referencias

[homebrew](http://mxcl.github.com/homebrew/)  
