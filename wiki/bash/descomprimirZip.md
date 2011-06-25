---
layout: default
title: Descomprir varios Zip
---

tenemos los siguientes archivos numerados :

	archivo01.zip
	archivo02.zip
	archivo03.zip
	archivo04.zip
	archivo05.zip
	archivo06.zip
	archivo07.zip
	archivo08.zip
	archivo09.zip

el script dejara el contenido de cada zip en distintos directorios

{% highlight bash %}
#!/bin/bash
for a in $(ls *.zip)
do
b=$(echo $a |  sed -e 's/[a-z,A-Z,.]*//g');
unzip $a -d archivo$b
done
{% endhighlight %}
