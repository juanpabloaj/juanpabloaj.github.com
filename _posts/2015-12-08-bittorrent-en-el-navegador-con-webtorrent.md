---
layout: post
comments: true
title : Bittorrent en el navegador con webtorrent
categories:
---

En este post pretendo mostrar un ejemplo simple de como utilizar el protocolo Bittorrent en el navegador utilizando [webtorrent][webtorrent]. Prefiero omitir la explicación de conceptos como seed o leechers utilizados en Bittorrent, esos detalles se pueden leer el [wikipedia][bittorrent].


La base de los siguientes ejemplos son del [get started de webtorrent][webtorrent-get-started], solo intento mostrar un poco más de detalle en cada paso.

Para utiliza los ejemplos es necesario disponer de [nodejs][nodejs] y algunas otras utilidades como [browserify][browserify] y [browser-sync][browser-sync].


### Seed

El ejemplo será una página la cual al arrastrar un archivo sobre ella comenzara a hacer de seed.

Además de webtorrent, para poder arrastrar archivos sobre la página se necesita drag-drop

    npm install webtorrent drag-drop

Para que el seed sirva el contenido creamos el archivo javascript

    // browser-seed.js
    var dragDrop = require('drag-drop')
    var WebTorrent = require('webtorrent')

    var client = new WebTorrent()
    console.log('webtorrent created')

    // When user drops files on the browser, create a new torrent and start seeding it!
    dragDrop('body', function (files) {
      client.seed(files, function (torrent) {
        console.log('Client is seeding ' + torrent.infoHash)
        console.log(torrent.magnetURI)
      })
    })

En las últimas lineas se envía a consola en hash del torrent y la `magnetURI`, esta última deberemos usarla en el leecher, es la dirección con la cual el leecher sabe que descargar.

Para utilizar el archivo javascript desde el navegador es necesario instalar [browserify][browserify]

    npm install -g browserify

Y ejecutar

    browserify browser-seed.js -o js/browser-seed.js

Ahora podemos llamar a `js/browser-seed.js` desde `index.html`

    <html>
      <head>
        <meta charset="utf-8">
        <title></title>
        <style media="screen">
          body {
            height: 600px;
          }
        </style>
      </head>
      <body>
        <script src="js/browser-seed.js" charset="utf-8"></script>
      </body>
    </html>

Como servidor del archivo html voy a usar [browser-sync][browser-sync]

    browser-sync start --server --files='*.html,*.js'

Con la página funcionando solo falta arrastrar un archivo sobre ella, para lo cual creé un archivo llamado `fecha.txt`

    date > fecha.txt

Después de arrastrar el archivo, en la consola del navegador se debería ver algo como

    webtorrent created
    Client is seeding 0d12d731c700a28fb80bb9e90e5baa3829ec7db6
    magnet:?xt=urn:btih:0d12d731c700a28fb80bb9e90e5baa3829ec7db6&dn=fecha.txt&tr=wss%3A%2F%2Ftracker.webtorrent.io

Lo cual indica que el seed está arriba. La última linea es la magnetURI a utilizar en el leecher.

### Leecher

Para el leecher, el que se encarga de la descarga, en un directorio diferente al seed creamos el archivo javascript

    // client.js
    var client = new WebTorrent()

    var torrentId = 'magnet:?xt=urn:btih:0d12d731c700a28fb80bb9e90e5baa3829ec7db6&dn=fecha.txt&tr=wss%3A%2F%2Ftracker.webtorrent.io'

    client.add(torrentId, function (torrent) {

      console.log(torrent)
      // Torrents can contain many files. Let's use the first.
      var file = torrent.files[0]

      file.appendTo('body')
    })

Y el respectivo `index.html`, en este caso no usé webtorrent con browserify, sino lo cargué directamente desde un [CDN][cdn].

    <html>
      <head>
        <meta charset="utf-8">
        <title></title>
        <script src="https://cdn.jsdelivr.net/webtorrent/latest/webtorrent.min.js"></script>
      </head>
      <body>

        <script src="client.js" charset="utf-8"></script>
      </body>
    </html>

Al abrir este archivo html en el navegador, debería comenzar a hacer la descarga desde el seed y cuando este completo presentar el contenido obtenido en el body, mostrando algo similar a la imagen siguiente

![leecher](http://f.cl.ly/items/0K3p1a2M3k0k1D1G3R3R/index_html.png)


Con lo descrito en el post es posible, desde el navegador, servir y descargar contenido sobre el protocolo Bittorrent.

### Referencias

* [Webtorrent][webtorrent]
* [Webtorrent - Get started][webtorrent-get-started]


[dont-have-idea]: https://www.google.cl/search?q=i+don%27t+have+idea&espv=2&biw=1225&bih=806&source=lnms&tbm=isch&sa=X&ved=0ahUKEwi80b7Dic3JAhUFFZAKHRXxCOEQ_AUIBigB#tbm=isch&q=i+don%27t+have+idea+what+i%27m+doing
[webtorrent]: https://github.com/feross/webtorrent
[bittorrent]: https://en.wikipedia.org/wiki/BitTorrent
[webtorrent-get-started]: https://webtorrent.io/intro
[browser-sync]: http://www.browsersync.io/
[browserify]: http://browserify.org/
[nodejs]: https://nodejs.org/
[cdn]: https://en.wikipedia.org/wiki/Content_delivery_network
