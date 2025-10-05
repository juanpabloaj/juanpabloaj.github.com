---
layout: wiki-note
title : Suse
---
Para definir en proxy http, en el archivo `/etc/sysconfig/proxy` crear la variable

    http_proxy="http://miproxy.com:3128"

Se puede verificar la existencia con un

    echo $http_proxy
