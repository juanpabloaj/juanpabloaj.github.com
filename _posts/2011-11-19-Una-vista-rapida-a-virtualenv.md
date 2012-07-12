---
layout: post
comments: true
title : Una vista rápida a virtualenv
categories:
---
Más de alguna vez he querido instalar alguna lib de python para probarla sin tener que modificar mucho el sistema.

La solución `virtualenv`.

Se puede instalar desde `easy_install`

	sudo easy_install virtualenv

O teniendo `pip`, para instalar `pip`

	sudo su -
	curl https://raw.github.com/pypa/pip/master/contrib/get-pip.py | python

Ahora `virtualenv`

	pip install virtualenv

Crear un directorio para probar

	mkdir 001 ; cd 001

Crear un virtual environment, sin ningún paquete previo

	virtualenv venv --no-site-packages

Activar el entorno

	source venv/bin/activate

El prompt debería haber cambiado mostrando la activación del entorno.

Ahora se pueden instalar paquetes que solo tendrán efectos sobre sobre el entorno.

	pip install django

Para verificar que tenemos instalado podemos usar `yolk`

	sudo pip install yolk

Este nos permite ver que tenemos, con

	yolk -l

Y para salir de entorno

	deactivate

Debería haber un cambio en el prompt mostrando la salida.

### Edit 2012-07-12

Para instalar `pip` es necesario tener instalado `python-setuptools`.

En ubuntu/debian basta con

    apt-get install python-setuptools

###Referencias
[virtualenv tutorial](http://simononsoftware.com/virtualenv-tutorial/)  
{:enlaces}
