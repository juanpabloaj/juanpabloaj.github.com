---
layout: default
title : tmux
---

Acceder a modo comando

    C-a :

Llamar a otra panel de una ventana diferente y agregarlo como split, en modo comando

    join-pane -s 1:2.0
    
El panel 0 de la ventana 2 de la sesión 1.

## ~/.tmux.conf

Dejar `C-a` como screen

    # command prefix (like screen)
    unbind C-b
    set -g prefix C-a
    bind C-a send-prefix

##Referencias

* [tmux.conf](https://github.com/juanpabloaj/dotfiles/blob/master/.tmux.conf)  
* [Tmux: How can I link a window as split-window?](http://superuser.com/questions/266567/tmux-how-can-i-link-a-window-as-split-window)  
