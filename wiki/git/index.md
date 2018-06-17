---
layout: default
title : Git
---

## Básicos

Descargar cambios

    git pull

Agregar cambios del archivo

    git add file

Hacer commit con mensaje

    git commit -m "este es el mensaje"

Agregar todos los cambios y hacer commit con mensaje

    git commit -am "este es el mensaje"

Agregar selectiva e interactivamente los cambios

    git add --patch file

Subir los cambios

    git push

Eliminar cambios

    git reset --hard

Volver a cambios del origin/master

    git reset --hard origin/master

Forzar el borrado de archivos y directorios que se han agregado sin añadir

    git clean -fd

Ver log de los últimos commits

    git log -n5

Regresar un archivo al estado anterior

    git checkout HEAD~4 file

Restaurar cambios interactivamente, git va preguntando que cambios restaurar y cuales no

    git checkout --patch file

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

Excluir en todos los repos ([Tracking generated files with Pathogen][tracking-pathogen])

    git config --global core.excludesfile '~/.gitexcludes'
    echo tags > ~/.gitexcludes


## Commit

Modificar último commit, realizar cambios en los archivos, agregarlos y

    git commit --amend

Crear un commit con una fecha específica

    tempDate=$(date -R --date='12 hours ago')
    GIT_COMMITTER_DATE="$tempDate" git ci --date "$tempDate"

## Diff

Solo las lineas de diferencia

    git diff -U0

Diferencias entre commits

    git diff HEAD^ HEAD
    git diff HEAD~2 HEAD

Diferencias en resumen

    git diff --stat

Ver solamente los cambios ya agregados

    git diff --cached

Listar solo los nombres de los archivos modificados

    git ls-files -m

Listar nombres de archivos que han cambiado respecto a otra rama (rama develop)

    git diff develop --name-only
    
### rev-list

Obtener hash del último commit antes de la fecha

    git rev-list -n 1 --before="2017-03-01" HEAD

Obtener archivos modificados desde el último commit antes de la fecha

    git diff --name-only $(git rev-list -n 1 --before="2017-03-01" HEAD)

Ver el log del último commit antes de la fecha

    git log -1 $(git rev-list -n 1 --before="2017-03-01" HEAD)

### stash

Almacenar temporalmente cambios sin un commit

    git stash

Solo almacenar los archivos que no están `staged`

    git stash --keep-index

Listar cambios almacenados con stash

    git stash list

Aplicar un cambio de stash

    git stash apply

Sacar el último cambio del stash y aplicar

    git stash pop

Diferencias del stash

    git stash show -p stash@{0}

Diferencias contra del stash

    git diff stash@{0}

## rebase

En lugar de merge, para un historial más ordenado

    git checkout new-feature
    git rebase master
    git checkout master
    git merge new-feature

Eliminar un commit

    git rebase -i HEAD~5

De la lista mostrada borrar la linea del commit ([removing selected commits from repository][removing-selected-commits])

## Branch

Ver las branchs locales

    git branch
    * master

Ver las branchs ocultas, incluyendo las remotas

    git branch -a
    * master
      remotes/origin/HEAD
      remotes/origin/master
      remotes/origin/v1.0-stable
      remotes/origin/experimental
      remotes/otroRepo/experimental

Crear una nueva rama llamada `test`

    git branch test

Cambiarse a una branch

    git checkout origin/experimental

Para trabajar en la branch

    git checkout -b experimental origin/experimental

Esto es valido para una branch no propia, puedes cambiarte a una branch de otro remote

    git checkout -b experimental otroRepo/experimental

Ahora está entre las branchs

    git branch
      master
    * experimental

Mezclar dos ramas, estando en la rama `test`, me cambio `master` y traigo los cambios ([How to clone all remote branches in Git?][clone-remote-branches])

    git co master
    git merge test



Borrar una rama

    git branch -D nombreRama

### Remote branches

Track una branch remota

    git checkout -b test origin/test

Forzar a que una rama ya creada quede con "track" a la remota

    git branch -u upstream/foo

Push los cambios de a la rama en el origen

    git push origin test

Borrar una rama remota ([Pro git - remote branches][pro-git-remote-branches])

    git push origin :test


### Archivos en otras ramas

Los archivos que tienen cambios en otra rama

    git diff --stat otraRama/master

Las diferencias de un archivo en otra rama

    git diff otraRama/master archivo

Remplazar el archivo con el contenido del existente en la otra rama

    git checkout otraRama/master archivo

### Remotes

Merge con otros repos/forks

    git co master
    git remote add userRepo git://github.com/userRepo/otroRepo.git
    git fetch userRepo
    git merge userRepo/master
    git push

Ver las diferencias con otros forks ([Github pull request][github-pull-request])

    git fetch userRepo
    git log --oneline HEAD..userRepo/master


Fetch a todas las remotas

    git remote update

## graph

Log más gráfico

    lg = log --graph --pretty=format:'%Cgreen%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(blue)<%an>%Creset' --abbrev-commit --date=relative

## reset
volver al estado del commit y borrar archivos recién creados

    git reset --hard
    git clean -f -d

Ver lo que se ha hecho

    git reflog

Muy útil para recuperar hash que se resetearon

## submodules

### add

Agregar un nuevo submodulo

    git submodule add http://url_submodule path_a_instalar

Iniciar y actualizar

    git submodule init
    git submodule update

O

    git submodule update --init

Actualizar todos los submodulos

    git submodule update --init --recursive

### rm
No es tan simple como al agregar, es necesario eliminar las lineas que mencionen al submodulo en los archivos

    vim .gitmodules # eliminar referencias al submodulo
    vim .git/config #  eliminar referencias al submodulo
    git rm --cached path_to_subModule
    git commit

Pueden quedar archivos del submodulo

    rm -rf path_to_subModule

## show

Mostrar commit, author, fecha y solo mensaje de commit (sin diff)

    git show -s HEAD~3..HEAD

## Tags
Crear una en el actual commit

    git tag v0.0.1
Mostrarla

    git show v0.0.1

Subir las tags

    git push --tags

## archive

Archivar solo los últimos archivos modificados

    git archive HEAD $(git diff --name-only HEAD^) | tar -x -C ..

### Referencias

* [When do you use git rebase instead of git merge?](http://stackoverflow.com/questions/804115/when-do-you-use-git-rebase-instead-of-git-merge)
* [Resolving a merge](http://www.kernel.org/pub/software/scm/git/docs/v1.7.3/user-manual.html#resolving-a-merge)
* [Using Git to create an archive of changed files](http://tosbourn.com/2011/05/git/using-git-to-create-an-archive-of-changed-files/)
* [Tracking generated files with Pathogen](tracking-pathogen)
* [How to remove selected commit log entries from a Git repository while keeping their changes?][removing-selected-commits]
* [How to clone all remote branches in Git?][remove-remote-branches]
* [Pro git: remote branches][pro-git-remote-branches]
* [Github pull request][github-pull-request]


[github-pull-request]: http://help.github.com/send-pull-requests/
[pro-git-remote-branches]: http://progit.org/book/ch3-5.html
[remove-remote-branches]: http://stackoverflow.com/questions/67699/how-do-i-clone-all-remote-branches-with-git
[removing-selected-commits]: http://stackoverflow.com/questions/495345/git-removing-selected-commits-from-repository
[tracking-pathogen]: https://github.com/tpope/vim-pathogen/issues/18
