---
layout: default
title: Wake on LAN
---
Levantar un equipo con ethernet.

Averiguar mac

    ping -c 4 ip_remota && arp -n

Verificar que wol este activado

    ethtool eth0

Levantar

    wakeonlan MAC-Address-Here
