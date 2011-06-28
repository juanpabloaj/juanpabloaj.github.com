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
      origin/HEAD
      origin/master
      origin/v1.0-stable
      origin/experimental

crear una nueva rama llamada `test`  

	$git branch test

cambiarse a una branch 

    $ git checkout origin/experimental

para trabajar en la branch 

    $ git checkout -b experimental origin/experimental

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

	git log --pretty=oneline --graph

## reset
volver al estado del commit y borrar archivos recien creados
	
	$ git reset --hard
	$ git clean -f -d

ver lo que se ha hecho 

	$ git reflog

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
