---
layout: default
title: Mostrar el estado de la Batería
---

{% highlight bash %}
#!/bin/bash
#medicion estado bateria
#si la bateria esta muy baja despliega un mensaje de alerta
directorio=/proc/acpi/battery/BAT1
carga=$( head -n 5 $directorio/state | tail -n 1 | awk '{print $3}')
lineas=$( wc -l  $directorio/state | awk '{print $1}' )
if [  $lineas -gt  4 ]; then
        if [  $carga -lt 500  ]; then
                xterm -geometry 35x10 -e dialog --msgbox "Low Battery" 6 25
        fi
fi
{% endhighlight %}
