---
layout: default
title : Rails en Apache con Passenger
categories:
---
{:enlaces: .enlaceGris}

Teniendo instalado rails3 y apache2 vamos a instalar passenger 

	$ gem install passenger
	$ gem passenger-install-apache2-module

passenger irá guiando la instalación, si necesita dependencias y mostrara las lineas que hay que agregar a los archivos de configuración de apache

	Please edit your Apache configuration file, and add these lines:
	LoadModule passenger_module /usr/local/rvm/gems/ruby-1.9.2-p180/gems/passenger-3.0.7/ext/apache2/mod_passenger.so
   	PassengerRoot /usr/local/rvm/gems/ruby-1.9.2-p180/gems/passenger-3.0.7
   	PassengerRuby /usr/local/rvm/wrappers/ruby-1.9.2-p180/ruby


terminará con un mensaje similar a este 

	Suppose you have a Rails application in /somewhere. Add a virtual host to your
	Apache configuration file and set its DocumentRoot to /somewhere/public:
	
	   <VirtualHost *:80>
	      ServerName www.yourhost.com
	      DocumentRoot /somewhere/public    # <-- be sure to point to 'public'!
	      <Directory /somewhere/public>
	         AllowOverride all              # <-- relax Apache security settings
	         Options -MultiViews            # <-- MultiViews must be turned off
	      </Directory>
	   </VirtualHost>
	
	And that's it! You may also want to check the Users Guide for security and
	optimization tips, troubleshooting and other useful information:

moverse al archivo de los mods de apache 

	$ cd /etc/apache2/mods-available

crear el archivo `passenger.conf` y agregar las lineas antes mostradas

   	PassengerRoot /usr/local/rvm/gems/ruby-1.9.2-p180/gems/passenger-3.0.7
   	PassengerRuby /usr/local/rvm/wrappers/ruby-1.9.2-p180/ruby

y `passenger.load`

	LoadModule passenger_module /usr/local/rvm/gems/ruby-1.9.2-p180/gems/passenger-3.0.7/ext/apache2/mod_passenger.so

subir el modulo y reiniciar apache 

	$ sudo a2enmod passenger
	$ sudo /etc/init.d/apache2 restart

crear el archivo de `virtualhost` 

	   <VirtualHost *:80>
	      ServerName www.yourhost.com
	      DocumentRoot /somewhere/public    # <-- be sure to point to 'public'!
	      <Directory /somewhere/public>
	         AllowOverride all              # <-- relax Apache security settings
	         Options -MultiViews            # <-- MultiViews must be turned off
	      </Directory>
	   </VirtualHost>

Este es un punto importante, `public` debe ser el directorio `public` de la aplicación creada por rails.  

###Referencias 
* [Rails on debian lenny](http://bootpolish.net/home_howto_installrubyonrails3ondebianlenny)
{:enlaces}
