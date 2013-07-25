---
layout: post
comments: true
title : Automatizando tareas con git hooks
categories:
---

En un repositorio de git con el que trabajo, cada vez que hago un cambio necesito copiar algunos archivos a un directorio específico.

Lo primero que hice fue crea un archivo `Makefile` con la regla `copy` para copiar todo donde correspondía. El cual dejé en la raíz del repositorio.

Hasta ahí, todo bien. Pero cada vez que había un nuevo cambio, era necesario tener presente la tediosa tarea de hacer

    make copy

Una forma de automatizar esta tarea es con un hook de git, los cuales son scripts que son ejecutados cuando cierto tipo de acciones relacionadas con git ocurren.

Cualquier repositorio de git contiene el directorio `./git/githooks`, con una serie de ejemplos.

En mi caso, me interesaba que `make copy` se ejecutara después de realizar un commit, por lo cual bastaba con crear, en el directorio `.git/githooks`, el archivo `post-commit`, o modificar el ya existente como ejemplo, y muy importante, darle permisos de ejecución.

Un hook se ejecuta en el directorio raíz de git, por lo cual, y como mi `Makefile` estaba en esa ubicación , al archivo `post-commit` sólo fue necesario agregar

    make copy

Todas las ordenes de copiado podría haberlas escrito directamente en el hook, pero para algunas cosas prefiero usar make y el archivo `Makefile` ya estaba creado.

En `man githooks` está la lista de git hooks disponibles:

    applypatch-msg
    pre-applypatch
    post-applypatch
    pre-commit
    prepare-commit-msg
    commit-msg
    post-commit
    pre-rebase
    post-checkout
    post-merge
    pre-receive
    post-receive
    post-update
    pre-auto-gc
    post-rewrite

Utilizando algo similar, pensaba crear un archivo changelog que se modificar automáticamente, ya que para algunos menos amigos de git, es más fácil contar con este tipo de registro de cambios.

También he leído que el hook `pre-commit` es utilizado para lanzar tests, lo cual suena a una muy buena practica.

###Referencias
* [Customizing Git - Git Hooks](http://git-scm.com/book/en/Customizing-Git-Git-Hooks)  
