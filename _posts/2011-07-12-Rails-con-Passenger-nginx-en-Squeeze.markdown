---
layout: default
title : Rails con Passenger nginx en Squeeze
categories:
---
{:enlaces: .enlaceGris}


### Pre requisitos 


	$ aptitude install build-essential zlib1g-dev libssl-dev libpq-dev libcurl4-openssl-dev curl libreadline-dev

Dependiendo de la base de datos a usar van a ser necesarios algunos paquetes, si se va a ocupar sqlite3

	$ wget http://www.sqlite.org/sqlite-amalgamation-3.7.2.tar.gz
	$ tar xzf sqlite-amalgamation-3.7.2.tar.gz
	$ cd sqlite-3.7.2/
	$ ./configure
	$ make
	$ make install


### RVM  

Instalar rvm como root

	
	$ bash < <(curl -s https://rvm.beginrescueend.com/install/rvm)
	$ echo '[[ -s "$HOME/.rvm/scripts/rvm" ]] && . "$HOME/.rvm/scripts/rvm" # Load RVM function' >> ~/.bash_profile
	$ source ~/.bash_profile

### Rails 

	$ rvm install 1.9.2
	$ rvm use 1.9.2 --default 

Otros necesarios 

	$ rvm rubygems current
	$ gem install rails
	$ gem install bundle

Si falto algún paquete se puede instalar con rvm 

	rvm package install zlib
	rvm remove 1.9.1
	rvm install 1.9.1


### Passenger 

Gem instala passenger 

	$ gem install passenger

Passenger se debería encargar del resto

	$ passenger-install-nginx-module

Dirá si falta algo, incluso se encargar de instalar nginx de ser necesario. 
La instalación debería terminar con algo como 

	This installer has already modified the configuration file for you! The
	following configuration snippet was inserted:

	  http {
		  ...
		  passenger_root /usr/local/rvm/gems/ruby-1.9.2-p180/gems/passenger-3.0.7;
		  passenger_ruby /usr/local/rvm/wrappers/ruby-1.9.2-p180/ruby;
		  ...
	  }


	server {
	  listen 80;
	  server_name www.yourhost.com;
	  root /somewhere/public;   # <--- be sure to point to 'public'!
	  passenger_enabled on;
	}


El archivo para administrar nginx en `/etc/init.d/nginx`


	#! /bin/sh

	### BEGIN INIT INFO
	# Provides:          nginx
	# Required-Start:    $all
	# Required-Stop:     $all
	# Default-Start:     2 3 4 5
	# Default-Stop:      0 1 6
	# Short-Description: starts the nginx web server
	# Description:       starts nginx using start-stop-daemon
	### END INIT INFO

	PATH=/opt/nginx/sbin:/sbin:/bin:/usr/sbin:/usr/bin
	DAEMON=/opt/nginx/sbin/nginx
	NAME=nginx
	DESC=nginx
	test -x $DAEMON || exit 0

	# Include nginx defaults if available
	if [ -f /etc/default/nginx ] ; then
			. /etc/default/nginx
	fi

	set -e

	case "$1" in
	  start)
			echo -n "Starting $DESC: "
			start-stop-daemon --start --quiet --pidfile /opt/nginx/logs/$NAME.pid \
					--exec $DAEMON -- $DAEMON_OPTS
			echo "$NAME."
			;;
	  stop)
			echo -n "Stopping $DESC: "
			start-stop-daemon --stop --quiet --pidfile /opt/nginx/logs/$NAME.pid \
					--exec $DAEMON
			echo "$NAME."
			;;
	  restart|force-reload)
			echo -n "Restarting $DESC: "
			start-stop-daemon --stop --quiet --pidfile \
					/opt/nginx/logs/$NAME.pid --exec $DAEMON
			sleep 1
			start-stop-daemon --start --quiet --pidfile \
					/opt/nginx/logs/$NAME.pid --exec $DAEMON -- $DAEMON_OPTS
			echo "$NAME."
			;;
	  reload)
			  echo -n "Reloading $DESC configuration: "
			  start-stop-daemon --stop --signal HUP --quiet --pidfile     /opt/nginx/logs/$NAME.pid \
				  --exec $DAEMON
			  echo "$NAME."
			  ;;
		  *)
				N=/etc/init.d/$NAME
				echo "Usage: $N {start|stop|restart|reload|force-reload}" >&2
				exit 1
				;;
		esac

		exit 0


Darle los permisos de ejecución

	chmod +x /etc/init.d/nginx

Subirlo

	/etc/init.d/nginx start 

###Rails 

Para testar 

	$ rails new blog 
	$ cd blog
	$ bundle install
	$ rake db:migrate
	$ rails s

Pueden presentarse problema en el archivo `/opt/nginx/conf/nginx.conf` con las variables

        server_name  1.2.3.4;
		...
		passenger_enabled on;
		rails_env development; 

### Referencias 

[Instalar passenger](http://www.modrails.com/install.html)  
[Debian squeeze redmine nginx phusion passenger](http://sourcode.net/debian-squeeze-redmine-nginx-phusion-passenger/)  
[Rails en debian](http://juanpabloaj.github.com/rails/debian/rvm/2011/05/22/rails-en-debian.html) 
{:enlaces}
