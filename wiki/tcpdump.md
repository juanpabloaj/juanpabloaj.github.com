---
layout: default
title: tcpdump
---

Registrar todo el tráfico

    tcpdump -i any -w archivo.pcap

Buscar los insert a base de datos

    tcpdump -i any -s0 -A -v port 3306 | grep INSERT
