---
layout: post
comments: true
title : dvtm sobre screen
categories:
---
Hace algunos años usé [awesome window manager](http://awesome.naquadah.org/),
probando el tiling en todo su potencial.

El recuerdo perduro en la memoria y se hacia presente cada vez que tenía que
trabajar con varias terminales, o más
aun, a pantalla completa. Surgía la necesidad de moverse entre
ellas aprovechando lo mejor posible la pantalla.

Una solución clásica es usar [screen](http://www.gnu.org/software/screen/)
que soportan varias terminales a la vez y cosas como split. Sin olvidar
que puedes dejar corriendo tareas en background y recuperarlas.

Pero la gestión de los espacios sigue siendo tarea del usuario.

Ahí es donde entra dvtm. Como awesome, se encarga de gestionar las ventanas con
tiling, cada vez que lanzas una shell se acomoda al estilo de layout
que tengas seleccionado.

En screen como en dvtm la tecla por defecto  es `a`, por ejemplo con

    crtl-a c

Lanza una nueva terminal. Por lo cual, con un `alias`, cambie dvtm

    alias dvtm='TERM=rxvt-256color ; dvtm -m ^q'

Hubiera sido mejor especificar estas opciones al momento de la compilación, pero en Lion
he tenido algunos problemas, compila bien, aunque al intentar
lanzara más de tres windows, se cae. Por suerte [Steve Losh](stevelosh.com) dejó
unos [binarios compilados en Snow leopard](https://gist.github.com/1240857), que
funcionan bien en Lion.

### Enlaces
* [awesome](http://awesome.naquadah.org/)
* [dvtm](http://www.brain-dump.org/projects/dvtm/)
* [screen](http://www.gnu.org/software/screen/)
* [Snow Leopard-compiled DVTM binaries (for Lion users)](https://gist.github.com/1240857)
