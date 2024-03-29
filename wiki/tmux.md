---
layout: default
title : tmux
---
En tmux hay al menos tres conceptos claves:

* Sesiones
* Ventanas
* Paneles

Donde se pueden tener varias sesiones, una sesión puede contener varias ventanas y una ventana puede tener varios paneles.

Acceder a modo comando

    C-a :

Llamar a otro panel de una ventana diferente y agregarlo como split, en modo comando

    join-pane -s 1:2.0

El panel 0 de la ventana 2 de la sesión 1.
Si la sesión de nombre `se`, tiene la ventana 2 con un único panel

    join-pane -s se:2

Mandar el panel actual a una ventana nueva en la misma sesión

    break-pane

## ~/.tmux.conf

El archivo de configuración se llama `.tmux.conf` y normalmente está ubicado en el home del usuario.

Dejar `C-a` como screen

    # command prefix (like screen)
    unbind C-b
    set -g prefix C-a
    bind C-a send-prefix

## Paneles

Rotar paneles

    C-a M-o

Donde `M` es OSX se interpreta como `Esc`

Intercambiar paneles

    swap-pane -U

O

    swap-pane -D

## Ventanas

Crear nueva ventana en fondo desde comando

    new-window -n 'nueva_ventana' -d 'vim'

Mover ventana a posición 0

    move-window -t 0

Intercambiar la ventana actual con la ventana 0

    swap-window -t 0

## Sesiones

Crear una nueva sesión, la cual debe crearse fuera de tmux

    tmux new -s nueva_session

Crear desde la linea de comandos de tmux

    new-session -s nueva_session

O

    new

Escoger entre sesiones

    C-a s

Cambiar entre previa y siguiente sesión

    C-a )
    C-a (

Escoger sessión

    C-a s

Listar sesiones existentes

    tmux ls

Recuperar sesión

    tmux attach -t session_name

Cambiar de nombre a la sesión

    C-a $

## Referencias

* [tmux.conf](https://github.com/juanpabloaj/dotfiles/blob/master/.tmux.conf)  
* [Tmux: How can I link a window as split-window?](http://superuser.com/questions/266567/tmux-how-can-i-link-a-window-as-split-window)  
* [tmux: Terminal MUltipleXer](http://www.sromero.org/wiki/linux/aplicaciones/tmux)  
* [andreyvit/tmux cheat sheet](https://gist.github.com/andreyvit/2921703)
