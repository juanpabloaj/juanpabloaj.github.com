---
layout: default
title: Heroku
---
Instalar gem

    gem install heroku

Agregar llave ssh local

    heroku keys:add

Agregar remote de Heroku app en repo local

    git remote add heroku git@heroku.com:repo-heroku-app.git

Mostrar logs de una app

    heroku logs --app my_app
