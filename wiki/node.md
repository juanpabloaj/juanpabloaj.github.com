---
layout: wiki-note
title: Node.js
---

Para ejecutar un script interactivamente desde el `REPL`

    .load ./script.js

### Dependencias

Para el manejo de dependencias, agregar en el archivo `package.json`

    {
        ...
        "dependencies": {
            "express": "3.x"
        }
    }

O cuando se instala una dependencia agregar `--save`

    npm install express --save

Con lo que la dependencia se agrega automáticamente a `package.json`.

Para instalar en base al archivo

    npm install

### Referencias

* [nvm](https://github.com/creationix/nvm)  
* [How do I completely uninstall Node.js, and reinstall from beginning (Mac OS X)](http://stackoverflow.com/questions/11177954/how-do-i-completely-uninstall-node-js-and-reinstall-from-beginning-mac-os-x)  
* [Uninstall Node.JS using Linux command line?](http://stackoverflow.com/questions/5650169/uninstall-node-js-using-linux-command-line)  
* [package.json An interactive guide](http://package.json.nodejitsu.com/)  
* [Package.json dependencies done right](http://blog.nodejitsu.com/package-dependencies-done-right)  
