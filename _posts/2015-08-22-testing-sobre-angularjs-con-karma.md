---
layout: post
comments: true
title : Testing sobre angularjs con karma
categories:
---
Angularjs es genial para desarrollar aplicaciones web rápidamente, pero antes que un proyecto se escape de nuestro entendimiento es necesario tomar medidas, una buena opción es mantenerlo cubierto con unit tests.

He encontrado varios artículos del tema, pero pocos que comienzan desde cero, orientados al que nunca ha usado karma.

En este articulo voy a mostrar como preparar el entorno de desarrollo para testear una factory de angularjs usando [karma][karma].

### Pre requisitos

* Tener instalados nodejs, npm y bower.
* Algún conocimiento de [Angularjs][angularjs].

### angular y angular-mocks

La instalación de angular la vamos realizar con bower. Primero, inicializar bower

    bower init

E instalar angular

    bower install angular#1.4.4 --save-dev

Para poder utilizar los test es necesario instalar angular-mocks

    bower install angular-mocks#1.4.4 --save-dev

Es importante que el número de versión de angular-mocks sea el mismo que el de angular. Por eso forcé la versión con `#1.4.4`.

### Código angular

Como ejemplo voy a crear un factory de angular

    mkdir js
    touch js/services.js

Con el siguiente contenido

    // js/services.js
    angular.module('factories', [])
      .factory('Users', function(){
        var users = [];
        return {
            add: function(user){
              users.push(user);
            },
            all: function(){
                return users;
            }
        };
      });

### Instalación de karma

Para poder utilizar karma, instalarla globalmente

    npm install -g karma-cli

Después, inicializar el archivo package.json y agregar karma como dependencia

    npm init
    npm install karma --save-dev

### Configuración de karma

Inicializar karma

    karma init

Karma preguntará por algunas preferencias a utilizar, como test framework, navegador, etc. Se puede seleccionar entre las opciones con la tecla `tab`.

Las que yo escogí:

    > jasmine

    > no

    > PhantomJS

    > js/*.js
    > test/*.js

    >

    > yes

Dependiendo de lo anterior será instalado lo necesario, agregado al archivo package.json y creado un archivo llamado `karma.conf.js` con nuestras preferencias.

[Jasmine][jasmine] es el test framework que vamos a utilizar. Prefiero PhantomJS, así todo se ejecuta en consola sin necesidad de lanzar chrome o firefox.

Los expresiones `js/*.js` y `test/*.js` representan los archivos que debe cargar karma, estos son agregados en una lista en el archivo `karma.conf.js`, en dicha lista se debe agregar la ubicación de angularjs y angular-mocks. Similar a

    files: [
      'bower_components/angular/angular.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'js/*.js',
      'test/*.js'
    ],

### Creando los test y lanzando karma

Ahora crear el directorio y archivos donde van a estar los tests.

    mkdir test
    touch test/services.js

El archivo test/services.js debe tener el siguiente contenido

    describe('Users', function(){

      beforeEach(module('factories'));

      var users;

      beforeEach(inject(function(_Users_){
        users = _Users_;
      }));

      it('empty users length 0', function(){
        expect(users.all().length).toBe(0);
      });

      it('One user return length 1', function(){
        users.add({name:'user name'});

        expect(users.all().length).toBe(1);
      });
    });

Donde se carga el modulo `factories`, el factory `Users` y describen los tests.

Finalmente lanzar los tests

    karma start

Con lo cual se deberían ejecutar los tests y ver como los dos pasaron.


Lo presentado es un primer ejemplo muy simple, para revisar más detalles sobre karma, dejo algunos enlaces más abajo.

El código fuente descrito está disponible en el repositorio

[https://github.com/juanpabloaj/simple-karma-test](https://github.com/juanpabloaj/simple-karma-test)


### Referencias

* [simple-karma-test][simple-karma-test]
* [karma][karma]
* [An Introduction To Unit Testing In AngularJS Applications](http://www.smashingmagazine.com/2014/10/introduction-to-unit-testing-in-angularjs/)
* [Testing AngularJS Apps Using Karma](https://www.airpair.com/angularjs/posts/testing-angular-with-karma)

[karma]: http://karma-runner.github.io/
[angularjs]: https://angularjs.org/
[jasmine]: http://jasmine.github.io/2.3/introduction.html
[simple-karma-test]: https://github.com/juanpabloaj/simple-karma-test
