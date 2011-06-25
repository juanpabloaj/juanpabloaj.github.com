--- 
layout: default
title : vim
---
{:enlaces: .enlaceGris }  

Permite editar archivos comprimidos con bzip2, gzip, zip.  

	$ vim -O archivo1.txt archivo2.txt   # División vertical
	$ vim -o archivo1.txt archivo2.txt   # División horizontal
	$ vim -p archivo1.txt archivo2.txt   # División por tab

solo lectura del archivo 

	$ vim -R archivo

### Modo Comando 

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

### Autocompletación 

	Ctrl-p
	Ctrl-n

### Modo insert


para insertar un comando como si fuera modo normal y volver a modo insertar

	Ctrl-o: 

###Modo linea

Ir a la linea n 

    :n 

Ir a la lina 0 

    :0

Ir al final del archivo

    :$

Insertar la salida de comandos en el texto, agregamos la salida del comando date

	:r!date

Para dividir la pantalla para mostrar diferentes archivos, escriba en la línea de comandos de vi:

    :split otro-archivo
    :vsplit otro-archivo

mostrar/ocultar numero de linea 

	:set number
	:set nonumber

Mover el cursor simultaneamente en dos ventanas

	:set scrollbind

### scp

Para editar un archivo remoto 

	vim scp://user@host/path_al_archivo
	:e scp://user@host/path_al_archivo


### Registros 

ver los registros  
`:registers`

### Copiar y pegar

copiar la linea 10 y pegar después linea 5  
`:10y | 15pu`

copiar la linea 10 y pegar antes de la linea 5  
`:10y | 15pu!`

copiar el registro 0 después linea 10  
`10pu 0`


agregar opciones especificas a un archivo  
`# vim: st=8`  
la sintaxis del comentario depende de cada lenguaje, en C sería  
`// vim: st=8`

### Buffers 

mostrar lista de buffers existentes 

	:buffers

borrar buffer, donde `[N]` es el número del buffer

	:bd[N]

agregar archivo a un buffer

	:badd ~/ruta/archivo

abrir un buffer en split

	:[N]sp

### folding 

abrir el fold cuando se este con el cursor  
`set fdo=all`

cerrar el cursor cuando no este el cursor  
`set fcl=all`

### :make 

llamar al comando make con el respectivo archivo Makefile  
`:make`  

abre en una ventana la salida de la compitación   
`:copen`  

solo abre la ventana si hubo errores  
`:cw`  

### Moverse entre los errores
al siguiente error  
`:cn`

al error previo   
`:cp`

al primer error  
`:cfirst`

al último error  
`:clast`

### Status line 

	:h statusline 

Ejemplo

	":set statusline=%F%m%r%h%w\ [B=%n]\ [FORMAT=%{&ff}]\ [TYPE=%Y]\ [ASCII=\%03.3b]\ [HEX=\%02.2B]\ [POS=%04l,%04v][%p%%]\ [LEN=%L]

Cuando mostrar la barra de estatus 
	
	:set laststatus=0 " nunca mostrar barra de status
	:set laststatus=1 " mostrar barra de status cuando haya mas de una ventana
	:set laststatus=2 " siempre mostrar barra de status

	:h status-line

[Strings](/wiki/vim/vimStrings.vim)  
[Vim script](/wiki/vim/vimScript.html)  
[Vim plugins](/wiki/vim/vim_plugins.html)  
{:enlaces}

