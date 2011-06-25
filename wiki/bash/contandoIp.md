---
layout: default
title: Contando Ips
---

Uno de los objetivos  de este ejemplo es aprender a manipular tuberías (pipes)
Primero conozcamos awk
si tipeamos

	$ date
	sáb nov 10 13:33:36 CLST 2007

si solo quisiéramos la hora

	$ date | awk '{print $4}'

awk solo nos entrega la columna 4 de la salida

en ubuntu el log de sshd queda en `/var/log/auth.log`

	$ cat auth.log | grep Accepted | awk '{print $11}' |awk 'BEGIN {FS="|"} {print $1}'|sort|uniq -c|sort -r

obtenemos una salida como

    6 192.168.2.112
    8 192.168.2.136

donde el primer numero indica la frecuencia de aparición

para que la salida esta ordenada por cantidad de apariciones al ultimo sort se le agrega la opción -n, asi ordena numéricamente 


Mezclándolo con un cron podríamos recibir alertas en caso que algún ip sea muy insistente.
