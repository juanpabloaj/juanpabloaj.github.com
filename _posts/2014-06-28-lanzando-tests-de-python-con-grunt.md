---
layout: post
comments: true
title : Lanzando tests de python con grunt
categories:
---
En el ciclo de desarrollo: escribir un test que falla, modificar el código para que el test pase e iterar, hay tareas que se repiten, como lanzar los test después de hacer modificaciones.

Llamar a los tests implica usar un comando como

    python -m unittest tests

O desde un `setup.py`

    python setup.py test

En cualquiera de los dos casos anteriores es necesario pasar del editor a otra consola y ejecutar un comando cada vez que se realiza una modificación.

Para facilitar el proceso descrito es preferible usar alguna herramienta que vigile los archivos modificados, y cuando corresponda, lance tareas establecidas.

A continuación se presenta [grunt](http://gruntjs.com/), una solución para el problema propuesto.

### Instalando Grunt

Para instalar grunt globalmente (en todo el sistema) es necesario tener [nodejs](http://nodejs.org/) y su package manager [npm](https://www.npmjs.org/). En mi caso fue fácil instalar nodejs, ya que estaba trabajado en una box de [nitrous.io](https://www.nitrous.io/), bastó con `parts install nodejs`.

Con npm, instalar `grunt-cli`

    npm install -g grunt-cli

Crear un archivo `package.json` con nombre de proyecto y versión, en el cual se registraran las dependencias

    // package.json
    {
      "name": "pythontest",
      "version": "0.0.1"
    }

E instalar lo necesario para grunt en el proyecto

    npm install grunt grunt-contrib-watch --save-dev

La opción `--save-dev` se encargará de registrar las dependencias en el archivo `package.json`.

Después de las instalaciones el archivo `package.json` debería tener un contenido similar a

    // package.json
    {
      "name": "pythontest",
      "version": "0.0.1",
      "devDependencies": {
        "grunt": "^0.4.5",
        "grunt-contrib-watch": "^0.6.1"
      }
    }

Y se ha creado un directorio llamado `node_modules` que contiene las dependencias.

### Definición de tareas

Para la configuración de grunt y definición de tareas es necesario crear el archivo `Gruntfile.js`

    module.exports = function(grunt){
        grunt.initConfig({
            watch: {
                grunt: {
                    files: ['Gruntfile.js']
                },
                python: {
                    files : ['./tests/*.py','./libs/*/*.py'],
                    tasks: ['pythontest'],
                },
            }
        });

        grunt.registerTask('pythontest', function(){
            grunt.util.spawn({
                cmd: 'python',
                args: ['setup.py','test'],
                opts: {stdio: 'inherit'},
            });
        });

        grunt.registerTask('default', ['watch']);

    };

Y lanzar grunt

    grunt

Con lo cual, cada vez que un archivo definido en `files` sea modificado será ejecutada la tarea `pythontest` que lanza los test.


La opción `opts: {stdio: 'inherit'}` permite que la salida del comando ejecutado sea mostrada, sin esto, `python setup.py test` sería lanzado pero no visualizado el resultado.

### Archivos modificados en git

Otra cosa que verifico son los archivos agregados a git.

    git status

Por lo que también me es útil agregar una tarea que se ejecute cada vez que se modifica el index de git `.git/index` .

    gitindex: {
        files : ['.git/index'],
        tasks: ['gitst'],
    },

Y registrar la tarea

    grunt.registerTask('gitst', function(){
        grunt.util.spawn({
            cmd: 'git',
            args: ['status'],
            opts: {stdio: 'inherit'},
        });
    });

### Conclusión

Con lo descrito anteriormente es posible dejar a grunt en una terminal independiente vigilando que archivos son modificados y lanzando tareas previamente definidas.

Herramientas como grunt permiten reducir el tiempo utilizado en tareas repetitivas y enfocarse en el ciclo de desarrollo.

El código final de `Gruntfile.js` y `package.json` está alojando en un [gist de github](https://gist.github.com/juanpabloaj/4dbb58be44ac18b681b1).
