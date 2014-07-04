---
layout: post
comments: true
title : CSS con stylus
categories:
---
Como ahorrar tiempo al momento de trabajar con CSS?  

He probado un poco con [less](http://lesscss.org/), y es una gran ayuda, especialmente con el uso de variables. Pero después de probar estas soluciones, te preguntas ¿es necesario usar las llaves ({})?.  

Supongo que lo mismo se pregunto [stylus](http://learnboost.github.com/stylus/), bueno en la página dice lo mismo.  

"Que tal si pudiéramos omitir las llaves, los punto y como y los dos puntos ?"  

Lo primero es tener instalado [nodejs](http://nodejs.org/) y su gestionador de paquetes [npm](http://nodejs.org/).  

E instalar stylus

    npm install stylus -g

Y ahora teniendo un archivo `font.styl` como este

    font-size = 14px

    body
        font font-size Arial, sans-serif

Usamos stylus

    stylus font.styl

Genera

    body {
        font: 14px Arial, sans-serif;
    }

No puedo dejar de mencionar el argumento

    style --watch style.styl

Con esto cada vez que modifique el archivo `style.styl` se generara automáticamente el archivo `style.css`.

Más detalles en el sitio de [stylus](http://learnboost.github.com/stylus/)
