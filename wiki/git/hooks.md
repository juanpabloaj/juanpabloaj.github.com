---
layout: default
title: Hooks
---

## Ejemplos

### Archive para rama master y develop

Un hook `post-commit`, dependiendo de la rama actual, se copian los archivos a los directorios de desarrollo o de producción.

    #!/bin/sh
    # rama actual de git
    branch_name=$(git rev-parse --abbrev-ref HEAD)
    # si es la rama master copiar a directorio general de produccion
    if [ "$branch_name" = "master" ] ; then
        echo "Copiando archivos a production"
        git archive HEAD $(git diff --name-only HEAD^) | tar -x -C $DEVELOP_DIR
        exit 0
    fi
    # si es la rama develop copiar a directorio de desarrollo
    if [ "$branch_name" = "develop" ] ; then
        echo "Copiando archivos a desarrollo" 
        git archive HEAD $(git diff --name-only HEAD^) | tar -x -C $PRODUCTION_DIR
        exit 0
    fi

## Referencias

* [Customizing Git - Git Hooks](http://git-scm.com/book/en/Customizing-Git-Git-Hooks)  
* [Automatizando tareas con git hooks](http://juanpabloaj.com/2013/07/24/Automatizando-tareas-con-githooks/)  
