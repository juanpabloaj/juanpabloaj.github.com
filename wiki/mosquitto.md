---
layout: wiki-note
title: mosquitto
---

Suscribirse a un tópico y mostrar fecha del mensaje

    mosquitto_sub -h host_example -F "%I %t %p" -t 'example/topic'
