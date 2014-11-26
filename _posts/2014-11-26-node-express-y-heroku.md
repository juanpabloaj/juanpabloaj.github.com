---
layout: post
comments: true
title : Nodejs, express y Heroku
categories:
---
Este post va dedicado a todos los que aun no han probado servicios para alojar aplicaciones, como Heroku, y a los que quieren comenzar con nodejs en producción.

Cuando quieres levantar una aplicación tienes que considerar varios factores: programación, diseño, configuración del servidor, entre otras cosas.

Puedes asumir toda esa carga o buscar apoyo en servicios ya existentes y enfocarte en lo central: desarrollar tu aplicación.

En este post mostraré como crear una aplicación sencilla con nodejs que retorne un mensaje y como dejarla alojada en Heroku.

## pre requisitos

* [nodejs][nodejs] y su gestionador de paquetes [npm][npm].
* Crear una cuenta en [Heroku][heroku]
* Instalar la gema heroku: `gem install heroku`
* Tener algún conocimiento de git.

Si no quieres dedicar mucho tiempo a instalaciones o modificar tu sistema para este ejemplo, puedes usar un entorno de desarrollo en la nube, como [nitrous][nitrous].

## Comenzando con nodejs

Primero crearemos un archivo llamado `package.json`, el cual almacenara información de tu aplicación, para facilitar la creación del mismo podemos usar el comando

    npm init

`npm` preguntara algunas cosas como nombre de la aplicación, descripción, licencia, etc.

Sobre nodejs utilizaremos [express][express]

    npm install express --save

El argumento `--save` dejará registrado el paquete instalado como una dependencia, de esta forma, si compartes la aplicación, para instalar las dependencias bastará con usar el comando `npm install`.

Al ser una aplicación simple que retorna un mensaje, basta con un pequeño script

    // index.js
    var express = require('express');
    var app = express();

    app.set('port', (process.env.PORT || 8080))

    app.get('/', function(req, res){
      res.json({ mensaje: 'Un ejemplo de nodejs, express y Heroku'});
    });

    app.listen(app.get('port'));

Como un detalle preferí que el mensaje fuera retornado en `JSON`.

Verificamos que todo funcione como esperamos lanzando nuestra app

    node index.js

Deberíamos poder ver el resultado en

    http://localhost:8080


Si todo funciona bien hacemos un commit con nuestros archivos

    git add index.js package.json
    git commit -m "primer commit"

## Subiendo todo a Heroku

Teniendo instalada la gema de Heroku, es necesario logearnos con nuestras credenciales

    heroku login


Al subir la aplicación, Heroku debe poder determinar como iniciarla, esto se específica creando el archivo `Procfile` con la siguiente linea

    web: node index.js

Y lo agregamos al repositorio

    git add Procfile
    git commit -m "Procfile agregado"

Sólo nos queda crear la app en heroku

    heroku create

Lo cual mostrará la url donde estará alojada nuestra app y agregará el remoto `heroku` al repositorio local.

Ahora podemos subir los cambios a Heroku

    git push heroku master

Cada vez que hagamos push a la rama master de Heroku, nuestros cambios serán publicados.

Más detalles se pueden encontrar en el sitio de [Getting started de Heroku][heroku-nodejs].

Un buen tutorial para continuar es [Build a RESTful API Using Node and Express 4][scotch-Express].

## Referencias

* [Build a RESTful API Using Node and Express 4][scotch-Express]
* [Getting Started with Node.js on Heroku][heroku-nodejs]


[scotch-express]: http://scotch.io/tutorials/javascript/build-a-restful-api-using-node-and-express-4
[heroku-nodejs]: https://devcenter.heroku.com/articles/getting-started-with-nodejs
[nodejs]: http://nodejs.org/
[npm]: https://www.npmjs.org/
[heroku]: https://www.heroku.com/
[nitrous]: https://www.nitrous.io/
[express]: http://expressjs.com/
