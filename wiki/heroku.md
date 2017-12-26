---
layout: default
title: Heroku
---
Instalar gem

    gem install heroku

Instalar en OSX con brew

    brew install heroku/brew/heroku

Agregar llave ssh local

    heroku keys:add

Agregar remote de Heroku app en repo local

    git remote add heroku git@heroku.com:repo-heroku-app.git

Mostrar logs de una app

    heroku logs --app my_app


### Referencias

* https://devcenter.heroku.com/articles/heroku-cli
