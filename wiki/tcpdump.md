---
layout: default
title: tcpdump
---

Registrar todo el tráfico

    tcpdump -i any -w archivo.pcap

Buscar los insert a base de datos

    tcpdump -i any -s0 -A -v port 3306 | grep INSERT

Mostrar consulta respuesta en puerto 5500

    tcpdump  -s 0 -i any -A host 127.0.0.1 and tcp port 5500

##Referencias

* http://sleeplesscoding.blogspot.com/2011/01/using-tcpdump-to-sniff-http-traffic.html
