---
layout: default
title: tshark
---

Del archivo .wcap mostrar las conexiones del puerto 80

    tshark -r archivo.wcap  -R "tcp.port==80"

Mostrar las conexiones del ip

    tshark -r archivo.wcap  -R "ip.addr==192.168.0.2"
