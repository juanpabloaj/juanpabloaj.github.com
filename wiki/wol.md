---
layout: default
title: Wake on LAN
---
Levantar un equipo con ethernet.

Averiguar mac

    ping -c 4 ip_remota && arp -n

Verificar que wol este activado

    ethtool eth0

Habilitar wol

    ethtool -s eth0 wol g

Levantar

    wakeonlan MAC-Address-Here

### Referencias

[WOL Wakeonlan Guide: Turn On Servers Remotely Without Physical Access](http://www.thegeekstuff.com/2008/11/wol-wakeonlan-guide-remotely-turn-on-servers-without-physical-access/)
