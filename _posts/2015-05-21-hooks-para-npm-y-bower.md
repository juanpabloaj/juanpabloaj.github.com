---
layout: post
comments: true
title : Hooks para npm y bower
categories:
---
Hace algún tiempo escribí un post sobre algunos hooks que tiene git y [como es posible automatizar tareas con ellos][post-git-hooks].

npm también dispone de [algunos hooks][npm-hooks], como `preinstall` y `postinstall`.

Estos deben ser configurados en la sección `scripts` del archivo `package.json`

    ...
    "scripts": {
        "postinstall": "ejecutar un comando después de install"
    }
    ...


Por ejemplo, si queremos que después de instalar las dependencia de node se instalen las de bower, podemos usar el hook `postinstall`

    "postinstal": "bower install"

Con lo cual, después de ejecutar el comando

    npm install

Automáticamente se ejecutara

    bower install

Del mismo modo, tenemos los [hook de bower][bower-hooks], Estos deben ser configurados en el archivo `.bowerrc`. Si queremos que después de la instalación de bower se copien algunos archivos desde `bower_componets` a otro directorio, podemos user el hook `postinstall` de bower

    ...
        "scripts": {
            "postinstall": "cp bower_components/some-package/build/some-package.min.js public"
        }
    ...


Mucho de lo anteriormente descrito se puede hacer con [grunt][grunt]/[gulp][gulp], pero en algunos casos, cuando queremos automatizar tareas simples es posible prescindir de grunt.

Un post interesante sobre como crear scripts para npm es [How to Use npm as a Build Tool de Keith Cirkel][npm-build-tool], donde describe como crear scripts para ejecutar con npm y como crear `post-` y `pre-` hook para ellos.

[post-git-hooks]: http://juanpabloaj.com/2013/07/24/Automatizando-tareas-con-githooks/
[npm-hooks]: https://docs.npmjs.com/misc/scripts#examples
[bower-hooks]: https://github.com/bower/bower/blob/master/HOOKS.md
[grunt]: http://gruntjs.com/
[gulp]: http://gulpjs.com/
[npm-build-tool]: http://blog.keithcirkel.co.uk/how-to-use-npm-as-a-build-tool/
