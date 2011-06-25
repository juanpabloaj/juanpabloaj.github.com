--- 
layout: default
title : Wordpress
---
### Instalación

Los pre requisitos del sistema  

	$ aptitude install apache2
	$ aptitude install php5
	$ aptitude install mysql-server php5-mysql

Descargar y descomprimir wordpress  

	$ wget http://wordpress.org/latest.tar.gz
	$ tar -xvfz latest.tar.gz

Copiar el contenido al directorio de apache  
	
	$ cp -r wordpress/* /var/www 

Crear un base de datos y usuario en mysql para wordpress  

	$ mysql -u adminusername -p
	Enter password:
	Welcome to the MySQL monitor.  Commands end with ; or \g.
	Your MySQL connection id is 5340 to server version: 3.23.54
	 
	Type 'help;' or '\h' for help. Type '\c' to clear the buffer.
	 
	mysql> CREATE DATABASE databasename;
	Query OK, 1 row affected (0.00 sec)
	 
	mysql> GRANT ALL PRIVILEGES ON databasename.* TO "wordpressusername"@"hostname"
		-> IDENTIFIED BY "password";
	Query OK, 0 rows affected (0.00 sec)
	  
	mysql> FLUSH PRIVILEGES;
	Query OK, 0 rows affected (0.01 sec)

	mysql> EXIT
	Bye
	$ 

En el archivo wp-config-sample.php definir las variables a lo establecido en mysql. Después cambiar el nombre a  

	$ mv wp-config-sample.php wp-config.php

Para comenzar la instalación ir a la url de la maquina donde se instalar wordpress  

	http://localhost/wp-admin/install.php

Ahora wordpress nos pedira que llenemos una serie de información de usuario  

### Pretty links

Crear el archivo .htaccess en el directorio de worpress con  

	<IfModule mod_rewrite.c>
	RewriteEngine On
	RewriteBase /
	RewriteRule ^index\.php$ - [L]
	RewriteCond %{REQUEST_FILENAME} !-f
	RewriteCond %{REQUEST_FILENAME} !-d
	RewriteRule . /index.php [L]
	</IfModule>

subir modulo rewrite  

	$ a2enmod rewrite 

modificar el archivo de apache /etc/apache2/sites-available/default , cambiar `AllowOverride None` por `AllowOverride All`  

### Referencias  

* [Wordpress Famous 5 minutes install](http://codex.wordpress.org/Installing_WordPress#Famous_5-Minute_Install)  
{.enlaceGris}

