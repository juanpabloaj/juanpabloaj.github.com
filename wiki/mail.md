---
layout: wiki-note
title: mail
---
Usar less como PAGER de mail

    PAGER=less mail

O exportar la variable PAGER en `~/.bashrc`

    export PAGER=less

Enviar un mail desde consola

    date | mail -s "hello date" user@my_mail.com
