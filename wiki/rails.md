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

###mondel 

crear db de producción

	$ RAILS_ENV=production rake db:create db:migrate

##Gems 

[MongoMapper](/wiki/rails/mongomapper.html)  
[Passenger](/wiki/rails/passenger.html)
{:enlaces}

##Docs

* [getting started](http://guides.rubyonrails.org/getting_started.html)  
{:enlaces}

