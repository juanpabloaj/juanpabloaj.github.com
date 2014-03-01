--- 
layout: default
title : Cygwin
---
## Recomendable instalar 

	vim ctags python ssh git mercurial screen wget make zsh ncurses

## X

### Instalar 

	xorg-server xinit xorg-docs X-start-menu-icons 

para lanzar las aplicaciones gráficas 

	startxwin

dejar por defecto xterm con fondo negro y letras blancas, agregar al archivo  

	/etc/X11/app-defaults/XTerm
	
las lineas    

{% highlight bash %}

	*background:       black
	*foreground:       white

{% endhighlight %}

### puttycyg 

Una buena alternativa a instalar las X es [puttycyg](http://code.google.com/p/puttycyg/) se utiliza igual a putty.
{:enlaces}

## apt-cyg 

Instalación de paquetes desde la linea de comandos  

{% highlight bash %}

	$ wget http://apt-cyg.googlecode.com/svn/trunk/apt-cyg
	$ chmod +x apt-cyg 
	$ mv apt-cyg /usr/local/bin 
	$ apt-cyg install vim

{% endhighlight %}

## Problemas

### git submodules

cuando trataba de hacer un

	git submodule init
	
Obtenia el error

	/usr/lib/git-core/git.exe: error while loading shared libraries:
	?: cannot open shared object file: No such file or directory

Se soluciono instalando gettext

	apt-cyg install gettext

## Referencias 

[puttycyg](http://code.google.com/p/puttycyg/)  
[Terminales para Cygwin. Notas sobre Terminfo y Termcap](http://www.vicente-navarro.com/blog/2007/07/28/terminales-para-cygwin-notas-sobre-terminfo-y-termcap/)  
[Re: Problem running git submodule init: "error while loading shared libraries: ?](http://permalink.gmane.org/gmane.os.cygwin/144165)
