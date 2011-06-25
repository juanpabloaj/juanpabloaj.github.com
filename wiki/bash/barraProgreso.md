---
layout: default
title: redimencionar Imágenes
---
primero un ejemplo de un contador en una linea 


{% highlight bash %}
#!/bin/bash 
n=1000
for ((i=0; i< $n;i+=1)); do
    sleep 1
    echo -n -e "$i / $n\r"
done
{% endhighlight %}

-n: elimina el salto de linea de echo 

sabiendo esto podemos crear una barra de progreso 
