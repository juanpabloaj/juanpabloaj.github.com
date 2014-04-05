---
layout: post
comments: true
title : Virtualenv y requirements
categories:
---

En un post anterior, [Una vista rápida a virtualenv](http://juanpabloaj.com/2011/11/19/Una-vista-rapida-a-virtualenv/), vimos como usar `virtualenv` desde cero.

Ahora veremos un ejemplo de como instalar las librerías necesarias para comenzar a trabajas.

Con el comando

    pip freeze

Obtenemos la lista de librerías instaladas, que no están en la librería estándar.

Si hacemos lo mismo en un entorno creado con `virtualenv`

    pip freeze >> requirements.txt

Podemos almacenar las lista de librerías utilizadas en el actual proyecto.

Con el archivo `requirements.txt` podemos instalar las librerías necesarias para comenzar a trabajar en un nuevo entorno creado por `virtualenv`, usando el comando:

    pip install -r requirements.txt

