---
layout: default
title: redimencionar Imágenes
---
Sera necesario tener instalado imagemagic


{% highlight bash %}
for a in *.jpg
do
b=$( echo $a | sed -e 's/.jpg//g')
convert -resize 512 $b.jpg nuevo_dir/$b.png  
done
{% endhighlight %}

las imagenes quedaran de 512px y en png
 
