---
layout: wiki-note
title: nmap
---
Escanear puerto 22 en rango de ips

    nmap -p 22 192.168.1.0/24

Solo mostrar los con puerto abierto en un formato más fácil de procesar por grep

    nmap -p 22 192.168.1.0/24 --open -oG -
