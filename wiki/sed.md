---
layout: default
title: sed
---

obtener las 10 primeras lineas 

	cat archivo | sed -n -e '1,10p'

quitar las comillas simples (') de un texto

	sed -e 's/'\''//g' archivo

borrar las lineas que contengan numeros

	sed '/[0-9]/d'

borra las que no contengan numeros

	sed '/[0-9]/!d'

! : entrega el opuesto de la orden 

### Llamar porciones guardadas

en un archivo con numero y letras solo queremos ver los 0's  encerrados en 1's

	4Ds65a4d10014d6a4sd610017845sa4D6a
	4d6Sa4d6101sd4aJd4a644d5as61000001
	sda41000014d6as4d56adsa114d5sa64dA

	sed 's/[0-Z]*\(10*1\)[0-Z]*\(10*1\)[0-Z]*/\1 \2/' sample 

	1001 1001
	101 1000001
	100001 11

las expresiones entre \( \) se guardan en \n, en este caso, la primera aparicion se guardo en \1 y la segunda en \2

	[0-Z]* : letra o numero
	10*1 : ceros entre 1's, puede no haber cero 


### Incrementa un numero binario en 1

{% highlight bash %}

	#!/bin/sed -f
	s/\([0-1]*\)++/\1/; td
	b fin 
	## funcion de incremento
	:d
	s/1\(_*\)$/_\1/
	td
	s/^\(_*\)$/1\1/; tn  
	s/0\(_*\)$/1\1/; tn  
	:n
	y/_/0/
	:fin

{% endhighlight %}

`t` : saltos conficionales, si se realiza con exito el remplazo se salta a una etiqueta   
`:etiqueta` , el ":" anuncia una etiqueta  
`b` : incondicionalmente salta a una etiqueta  

para uitlizarla 

	$ echo "101++" | ./sedc
	110

### Refencias

[Manual gnu de sed](http://www.gnu.org/software/sed/manual/sed.html)
