--- 
layout: default
title : Git
---
{:enlaces: .enlaceGris }  

## Básicos 

descargar cambios  

	$ git pull 

Hacer un commit con mensaje  

	$ git commit -am "este es el mensaje"

Subir los cambios  

	$ git push

Eliminar cambios 

	$ git reset --all 

Volver a cambios del origin/master
	
	$ git reset --all origin/master

Forzar el borrardo de archivos y directorios que se han agregado sin añandir 

	$ git clean -fd

Ver log de los últimos commits 

    $ git log -n5

Regresar un archivo al estado anterior 

    $ git checkout HEAD~4 file

## ~/.gitconfig

Definir las configuraciones de git. Ejemplo 

	[user]
		name = userName
		email = userName@gmail.com

	[diff]
		color = auto

	[pager]
		color = true

	[status]
		color = auto
	[push]
		default = current
	[alias]
		st = status

Excluir en todos los repos

	$ git config --global core.excludesfile '~/.gitexcludes'
	$ echo tags > ~/.gitexcludes

[Tracking generated files with Pathogen](https://github.com/tpope/vim-pathogen/issues/18)
{:enlaces} 

## Diff
	
Solo las lineas de diferencia  

	$ git diff -U0 

Diferencias entre commits  

	$ git diff HEAD^ HEAD
	$ git diff HEAD~2 HEAD 

Diferencias en resumen  

	$ git diff --stat

## rebase 

Eliminar un commit 

	$ git rebase -i HEAD~5

De la lista mostrada borrar la linea del commit  
[removing selected commits from repository](http://stackoverflow.com/questions/495345/git-removing-selected-commits-from-repository)
{:enlaces} 

## Branch

Ver las branchs locales  

    $ git branch   
    * master

Ver las branchs ocultas, incluyendo las remotas  

    $ git branch -a
    * master
      remotes/origin/HEAD
      remotes/origin/master
      remotes/origin/v1.0-stable
      remotes/origin/experimental
	  remotes/otroRepo/experimental

Crear una nueva rama llamada `test`  

	$git branch test

Cambiarse a una branch 

    $ git checkout origin/experimental

Para trabajar en la branch 

    $ git checkout -b experimental origin/experimental

Esto es valido para una branch no propia, puedes cambiarte a una branch de otro remote

	$ git checkout -b experimental otroRepo/experimental 

Ahora está entre las branchs 

    $ git branch
      master
    * experimental


[Fuente stackOverflow](http://stackoverflow.com/questions/67699/how-do-i-clone-all-remote-branches-with-git)
{:enlaces} 

Borrar una rama

	$ git branch -D nombreRama

### Remote branches

Track una branch remota

	$ git checkout -b test origin/test

Push los cambios de a la rama en el origen 

	$ git push origin test

Borrar una rama remota

	$ git push origin :test

[ Pro git - remote branches](http://progit.org/book/ch3-5.html)
{:enlaces} 

### Remotes

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

Fetch a todas las remotas

	$ git remote update


## graph 

log más gráfico 

	lg = log --graph --pretty=format:'%Cgreen%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(blue)<%an>%Creset' --abbrev-commit --date=relative

## reset
volver al estado del commit y borrar archivos recien creados
	
	$ git reset --hard
	$ git clean -f -d

Ver lo que se ha hecho 

	$ git reflog

Muy útil para recuperar hash que se resetearon	

## submodules
###add
Agregar un nuevo submodulo

	$ git submodule add http://url_submodule path_a_instalar

Iniciar y actualizar

	$ git submodule init
	$ git submodule update

O

	$ git submodule update --init

Actualizar todos los submodulos

	$ git submodule update --init --recursive

###rm
No es tan simple como al agregar, es necesario eliminar las lineas que mencionen al submodulo en los archivos

	$ vim .gitsubmodules # eliminar referencias al submodulo
	$ vim .git/config #  eliminar referencias al submodulo
	$ git rm --cached path_to_subModule
	$ git commit

Pueden quedar archivos del submodulo

	$ rm -rf path_to_subModule

###Tags
Crear una en el actual commit

	git tag v0.0.1
Mostrarla

	git show v0.0.1

Subir las tags

	git push --tags
