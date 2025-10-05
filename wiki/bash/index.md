---
layout: wiki-note
title: bash
---

Para saber si el último comando fue exitoso

    echo $?

0 cuando no hubieron problemas

Editar el bashrc de cada nuevo usuario.

	/etc/skel/.bashrc

Mostrar cajas de dialogo para shell scripts

	dialog --msgbox "hola mundo" 6 25

## Modo de edición vi
A modo vi

    set -o vi

Borrar toda la linea

    <esc>dd

## Redirection
Agregar el `stderr` en el archivo de log, y dejar corriendo de fondo.

    ./script > script.log 2>&1 &

## bashrc
Si cuando se entra a bash el prompt se ve similar a

    -bash-3.2

Una de las posibles causas es la falta del archivo `.bash_profile`

## Ejemplos

* [Contando ips](/wiki/bash/contandoIp)  
* [Descomprimir varios Zip](/wiki/bash/descomprimirZip)  
* [Redimencionar varias imágenes](/wiki/bash/redimencionarImagenes)  
* [Barra de progreso](/wiki/bash/barraProgreso)  
* [Batería baja](/wiki/bash/bateriaBaja)  
* [Manipulación de texto](/wiki/bash/manipulacion-de-texto)  

## Referencias

* [String manipulation](http://tldp.org/LDP/abs/html/string-manipulation.html)  
* [Working Productively in Bash's Vi Command Line Editing Mode](http://www.catonmat.net/blog/bash-vi-editing-mode-cheat-sheet/)  
