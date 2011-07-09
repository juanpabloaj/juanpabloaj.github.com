--- 
layout: default
title : Git
---
{:enlaces: .enlaceGris }  
descargar cambios  

	$ git pull 

hacer un commit con mensaje  

	$ git commit -am "este es el mensaje"

subir los cambios  

	$ git push

eliminar cambios 

	$ git reset --all 

volver a cambios del origin/master
	
	$ git reset --all origin/master

forzar el borrardo de archivos y directorios que se han agregado sin añandir 

	$ git clean -fd

## Diff
	
Solo las lineas de diferencia  

	$ git diff -U0 

Diferencias entre commits  

	$ git diff HEAD^ HEAD
	$ git diff HEAD~2 HEAD 

Diferencias en resumen  

	$ git diff --stat

## Branch

ver las branchs locales  

    $ git branch   
    * master

ver las branchs ocultas, incluyendo las remotas  

    $ git branch -a
    * master
      remotes/origin/HEAD
      remotes/origin/master
      remotes/origin/v1.0-stable
      remotes/origin/experimental
	  remotes/otroRepo/experimental

crear una nueva rama llamada `test`  

	$git branch test

cambiarse a una branch 

    $ git checkout origin/experimental

para trabajar en la branch 

    $ git checkout -b experimental origin/experimental

Esto es valido para una branch no propia, puedes cambiarte a una branch de otro remote

	$ git checkout -b experimental otroRepo/experimental 

ahora está entre las branchs 

    $ git branch
      master
    * experimental


[Fuente stackOverflow](http://stackoverflow.com/questions/67699/how-do-i-clone-all-remote-branches-with-git)
{:enlaces} 

borrar una rama

	$ git branch -D nombreRama

## graph 

log más gráfico 

	lg = log --graph --pretty=format:'%Cgreen%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(blue)<%an>%Creset' --abbrev-commit --date=relative

## reset
volver al estado del commit y borrar archivos recien creados
	
	$ git reset --hard
	$ git clean -f -d

ver lo que se ha hecho 

	$ git reflog

muy útil para recuperar hash que se resetearon	

## Forks

Merge con otros repos/forks

	$ git co master
	$ git remote add userRepo git://github.com/userRepo/otroRepo.git
	$ git fetch userRepo 
	$ git merge userRepo/master
	$ git push 

Ver las diferencias con otros forks

	$git fetch userRepo
	$git log --oneline HEAD..userRepo/master

[github pull request](http://help.github.com/send-pull-requests/)  
{:enlaces} 

fetch a todas las remotas

	$ git remote update

## submodules

Agregar un nuevo submodulo

	$ git submodule add http://url_submodule path_a_instalar
	
Iniciar y actualizar 

	$ git submodule init 
	$ git submodule update 
	
o 

	$ git submodule update --init

actualizar todos los submodulos

	$ git submodule update --init --recursive


