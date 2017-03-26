---
layout: default
title : vim
---

* [Compilación](/wiki/vim/install)

### General
Permite editar archivos planos en ascii como comprimidos con bzip2, gzip, zip.

	$ vim -O archivo1.txt archivo2.txt   # División vertical
	$ vim -o archivo1.txt archivo2.txt   # División horizontal
	$ vim -p archivo1.txt archivo2.txt   # División por tab

Varios archivos con el mismo nombre, pero diferente extensión

    vim hello.{html,js,css}

Abrir archivo en modo lectura

	$ vim -R archivo

Abrir archivo en la linea 10

	$ vim +10 archivo

Capturar la salida de una tubería

	$ date | vim -

### Modo Normal

	 ZQ		Salir sin guardar
	 ZZ		Guardar y salir
     v             Seleccionar en modo visual
     y             copiar
     p             pegar
     *             moverse entre resultados de búsqueda
     Ctrl-W +      incrementar el tamaño de una ventana
     Ctrl-W -      disminuir el tamaño de una ventana
     Ctrl-W h      ir a la ventana izquierda
     Ctrl-W j      ir a la ventana inferior
     Ctrl-W k      ir a la ventana superior
     Ctrl-W l      ir a la ventana derecha
     Ctrl-W W      Cambia el foco entre ventanas
     Ctrl-W K      Dejar ventanas en split horizontal
     Ctrl-W H      Dejar ventanas en split vertical
	 Ctrl-p		Autocompletar
	 Ctrl-n		Autocompletar
     zz         Centrar ventana en cursor
     q:         historia de comandos

### Modo insert


Para insertar un comando como si fuera modo comando y volver a modo insertar

	Ctrl-o:

### Modo comandos

Ir a la linea n

    :n

Ir a la linea 0

    :0

Ir al final del archivo

    :$

Insertar la salida de comandos en el texto, agregamos la salida del comando date

	:r!date

Para dividir la pantalla para mostrar diferentes archivos, escriba en la línea de comandos de vi:

    :split otro-archivo
    :vsplit otro-archivo

Mostrar/ocultar numero de linea

	:set number
	:set nonumber

Mover el cursor simultáneamente en dos ventanas

	:set scrollbind

### Copiar y pegar

Copiar la linea 10 y pegar después linea 5

    :10y | 15pu

Copiar la linea 10 y pegar antes de la linea 5

    :10y | 15pu!

Copiar el registro 0 después linea 10

    10pu 0

Agregar opciones especificas a un archivo

    # vim: st=8

La sintaxis del comentario depende de cada lenguaje, en C sería

    // vim: st=8

### Motions y operators

En modo normal hay una serie de operadores y motions, por ejemplo `d` para borrar que se puede usar con `w`

    dw

Va a borrar la palabra donde este cursos, con

    d2w

Se borraran las dos palabras desde el cursor.

Más info con

    :h cursor-motions

### Buffers

Mostrar lista de buffers existentes

	:buffers

Borrar buffer, donde `[N]` es el número del buffer

	:bd[N]

Agregar archivo a un buffer

	:badd ~/ruta/archivo

Abrir un buffer en split

	:[N]sp

### Registros

Ver los registros

    :registers

### Folding

Fold se puede traducir como pliegue, es un trozo de código o texto que se "pliega" en una linea. Con lo cual es posible trabajar de una forma más fácil sobre ficheros con muchas lineas.

Abrir el fold donde se encuentra el cursor

    zo

Cerrar el fold

    zc

Abrir recursivamente todos los sub folds

    zO

Cerrar todos los folds del archivo

    zM

Abrir el fold cuando se este con el cursor

    set fdo=all

Cerrar el cursor cuando no este el cursor

    set fcl=all

Más info en

    :h folding

### scp

Para editar un archivo remoto

	vim scp://user@host/path_al_archivo
	:e scp://user@host/path_al_archivo

Si se tiene creado el archivo `~/.ssh/config` se pueden usar los host definidos

    scp://host_definido/desde_home/ruta/fichero

Cuando el primer `/` representa el `$HOME`

### :make

Llamar al comando make con el respectivo archivo Makefile

    :make

Abre en una ventana la salida de la compilación

    :copen

Solo abre la ventana si hubo errores

    :cw

### Moverse entre los errores
al siguiente error

    :cn

Al error previo

    :cp

Al primer error

    :cfirst

Al último error

    :clast

### Vimdiff

    [c : Saltar a la diferencia previa
    ]c : Saltar a la diferencia siguiente

    diffget
    diffput
    dp : lo mismo que diffput pero sin argumento

### Status line

	:h statusline

Ejemplo

	":set statusline=%F%m%r%h%w\ [B=%n]\ [FORMAT=%{&ff}]\ [TYPE=%Y]\ [ASCII=\%03.3b]\ [HEX=\%02.2B]\ [POS=%04l,%04v][%p%%]\ [LEN=%L]

Cuando mostrar la barra de estatus

	:set laststatus=0 " nunca mostrar barra de status
	:set laststatus=1 " mostrar barra de status cuando haya mas de una ventana
	:set laststatus=2 " siempre mostrar barra de status

	:h status-line

### Enlaces internos

* [Strings](/wiki/vim/vimStrings)  
* [Vim script](/wiki/vim/vimScript)  
* [Vim plugins](/wiki/vim/vimPlugins)  

### Enlaces externos

* [Best of Vim Tips](http://rayninfo.co.uk/vimtips.html)  
* [Plugins de vim que utilizo - github](https://github.com/juanpabloaj/dotfiles/tree/master/.vim/bundle)  
