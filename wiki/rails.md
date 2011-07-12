--- 
layout: default
title : Rails
---
{:enlaces: .enlaceGris }  
## Install 

### Debian

ruby y el gestionador de paquetes gem  

	$ sudo aptitude update 
	$ sudo aptitude install rubygems   

rails 

	$ sudo gem install rails

sqlite3

	$sudo aptitude install libsqlite3-dev libsqlite3-dev libsqlite3-ruby
	$sudo gem install sqlite3 

de no reconocer el comando `rails`, agregar la ubicación al PATH, debería ser algo como `/var/lib/gems/1.8/bin`.  

### update 

Para actualizar rails

	$ gem update rails

## Introducción

Se puede acceder a la consola de rails con 

	$ rails console

### Entornos

Rails tiene tres entornos de trabajo 

* development : desarrollo
* test : para test unitarios, funcionales, etc.  
* producción : 

### Model 

Crear db de development 

	$ rake db:migrate

Crear db de producción

	$ RAILS_ENV=production rake db:create db:migrate

[More](rails/model.html)
{:enlaces}

## Primera app

Comenzar una app

	$ rails new ejemplo

Con esto creo un directorio llamado `ejemplo` con todo lo necesario para comenzar a trabajar.

	$ cd ejemplo

En el archivo `Gemfile` está la lista de las `gems` de las cuales depende la app, es necesario instalarlas 

	$ bundle install

Dependiendo si la instalación es como root o como usuario variaran algunos comando, necesitando agregar antes `sudo` o `bundle exec` según corresponda.   

Creando definir y crear una tabla en el DB  

	$ rails generate scaffold User name:strig
	$ rake db:migrate 

La app básica debería estar funcionando, levantar un servidor local para visualizarla en el navegador 

	$ rails s

Y en el navegador escribir la dirección `localhost:3000/users`. Con lo cual se debería ver una página donde se puede comenzar a agregar usuarios.  

##Gems 

[MongoMapper](/wiki/rails/mongomapper.html)  
[Passenger](/wiki/rails/passenger.html)
{:enlaces}

##Docs

* [getting started](http://guides.rubyonrails.org/getting_started.html)  
{:enlaces}

