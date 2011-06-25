---
layout: default
title : Rails en Debian Lenny
categories:
- rails 
- debian
- rvm
---
{:enlaces: .enlaceGris}

##Instalar
Instalar rvm como root

	$ bash < <(curl -s https://rvm.beginrescueend.com/install/rvm)

agregarlo a `~/.bash_profile ` y recargar 

	$ echo '[[ -s "$HOME/.rvm/scripts/rvm" ]] && . "$HOME/.rvm/scripts/rvm" # Load RVM function' >> ~/.bash_profile
	$ source ~/.bash_profile
	
instalar ruby 
	
	$ rvm install 1.9.2 

este comando me mostraba el siguiente error 

	rvm install 1.9.2
	-su: /usr/local/rvm/scripts/manage: Permission denied

por lo que le di permisos de ejecución al archivo 

	$ chmod u+x /usr/local/rvm/scripts/manage

ruby 1.9.2 por defecto

	$ rvm user 1.9.2 --default

Instalar gem 

	$ rvm rubygems current 

Instalar rails y bundle

	$ gem install rails
	$ gem install bundle

	
##Rails 

Probar rails 

	$ rails new blog 
	$ cd blog
	$ bundle install
	$ rake db:migrate
	$ rails s

debería estar visible en `localhost:3000`

##Problemas frecuentes

### sqlite3

Si hay problemas para instalar sqlite-ruby y sus extensiones, hay que actualizar sqlite3 desde el código fuente

	$ wget http://www.sqlite.org/sqlite-amalgamation-3.7.2.tar.gz
	$ tar xzf sqlite-amalgamation-3.7.2.tar.gz
	$ cd sqlite-3.7.2/
	$ ./configure
	$ make
	$ make install
	$ gem install rails sqlite3-ruby
	
###rake

si al hacer 
	
	$ rake db:migrate 

se presentan problemas con `rake 0.9.0` es recomendable [modificar el archivo Rakefile](https://gist.github.com/984326)
{:enlaces}


##Referencias 
* [rvm install](https://rvm.beginrescueend.com/rvm/install/)
* [sqlite3 en lenny](http://cuasan.wordpress.com/2010/10/13/rails-3-on-debian-with-sqlite-3/)
* [Rakefile modificado](https://gist.github.com/984326)
* [Undefined method 'task' using rake 0.9.0](http://stackoverflow.com/questions/5287121/undefined-method-task-using-rake-0-9-0-beta-4)
{:enlaces}
