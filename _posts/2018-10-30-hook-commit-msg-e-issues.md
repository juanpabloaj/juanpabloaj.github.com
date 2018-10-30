---
layout: post
comments: true
title : Usando el git hook commit-msg con las id de issue
categories:
---

Hace algún tiempo escribí un post sobre [los hook de git y su utilidad para automatizar tareas][tareas-con-githook], hoy quiero mostrar un ejemplo que he estado usando los últimos días, el hook `commit-msg` para no olvidar agregar el id de issue en los commits.

Si utilizas github/gitlab y su sistema de issues, es una buena práctica asociar los commits a issues.

Si eres como yo probablemente muchas veces has olvidado agregar el id del issue en el commit, bueno para eso puedes usar el hook `commit-msg`, el cual se activa después que el mensaje de commit es generado y antes que el commit es agregado. (más detalles en [Customizing Git - Git Hooks][git-hooks]), con algo como esto

```
#!/bin/bash

MSG="$1"

if ! egrep -qE "#[0-9]+" "$MSG";then
    cat "$MSG"
    echo "Your commit message must contain some issue reference '#...'"
    exit 1
fi
```

https://gist.github.com/juanpabloaj/fe7b8203ed967488d22c004c13846cfa


Y cuando no quieras que el hook sea activado usa la opción

    git commit --no-verify

Algunas ventajas de agregar los id en cada commit son cosas como: cuando vayas a crear un nuevo tag puedes saber cuantas issues agregaste desde el último tag (donde 1.0.1 representa el último tag creado), y revisar en github/gitlab el detalle de los issues.

    git log --oneline 1.0.1..HEAD | grep \# | sed 's/.*\(\#[0-9]*\).*/\1/' | sort | uniq -c

[git-hooks]: https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks
[tareas-con-githook]: /2013/07/24/Automatizando-tareas-con-githooks/
