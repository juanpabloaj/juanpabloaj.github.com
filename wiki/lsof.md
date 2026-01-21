---
layout: wiki-note
title: lsof
---

Identificar qué proceso está utilizando un puerto específico (por ejemplo, el puerto 8080)

    lsof -i :8080

Con sudo para ver todos los procesos, incluidos los de otros usuarios

    sudo lsof -i :8080
