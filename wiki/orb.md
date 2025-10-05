---
layout: wiki-note
title: orb
---

Si algún programa, como Firefox, se instala con snap se podrían tener permisos limitados en orbstack, por ejemplo al usar X11 sobre ssh, para evitar esto buscar las instalaciones sin snap y reinstalarlas.

De la misma forma si hay problemas con GUI sobre X11 es preferible tener un servicio ssh corriendo en la máquina virtual y conectarse a ella vía ssh con X11 forwarding, no entrar usando orb.

* https://www.nickgregorich.com/posts/gui-in-orbstack-machines/
