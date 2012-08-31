---
layout: default
title : Django
---
Crear proyecto

    django-admin.py startproject mysite

Levantar el server

    python manage.py runserver

Usar python como shell

    export DJANGO_SETTINGS_MODULE="settings"
    python

##Models

Crear las tablas en el db

    python manage.py sql places
    python manage.py syncdb

Mostrar tablas existentes

    python manage.py sqlall app_name

Para inicializar datos, crear el archivo `initdata.json` en el directorio fixtures de la app y usar el comando

    python manage.py loaddata initdata.json

##Referencias

* [Django documentation - Getting started](https://docs.djangoproject.com/en/dev/intro/)
