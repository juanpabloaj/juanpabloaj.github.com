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

## Models

Crear las tablas en el db

    python manage.py sql places
    python manage.py syncdb

Mostrar tablas existentes

    python manage.py sqlall app_name

Para inicializar datos, crear el archivo `initdata.json` en el directorio fixtures de la app y usar el comando

    python manage.py loaddata initdata.json

Respaldar datos y resetear

    python manage.py dumpdata <your_app> > temp_data.json
    python manage.py reset <your_app>
    python manage.py loaddata temp_data.json

Los datos que estén en

    app_name/fixtures/initial_data.json

Serán cargados al hacer `syncdb`.

Borrar toda la db

    python manage.py flush

## Admin

Crear nuevo super usuario

    python manage.py createsuperuser

## test

    python manage.py test --verbosity=2

## tools

* [South](/wiki/django/south)  

## Referencias

* [Django documentation - Getting started](https://docs.djangoproject.com/en/dev/intro/)
