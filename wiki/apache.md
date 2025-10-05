---
layout: wiki-note
title : apache2
---
## public_html

Para habilitar los directorios `public_html`, crear el directorio en la home de usuario

    mkdir public_html

Como root habilitar el modulo

    cd /etc/apache2/mods-enabled
    sudo ln -s ../mods-available/userdir.conf userdir.conf
    sudo ln -s ../mods-available/userdir.load userdir.load
    sudo /etc/init.d/apache2 restart

## mod_rewrite enable

en varios CMS es posible activar pretty links ( joomla: frienly urls, wordpress: pretty links), para lo cual es necesario activar el modulo de rewrite  

	$ a2enmod rewrite

en el archivo de configuración del sitio, normalmente ubicado en  
	
	/etc/apache2/sites-enabled 

buscar el archivo de sitio y cambiar AllowOverride none a AllowOverride All  

y reiniciar el apache

	$ /etc/init.d/apache2 restart

ahora se debería poder activar los pretty links 

en `/etc/apache2/sites-available` habilitar un sitio

	$  a2ensite sitio.com

desabilidar un sitio 

	$ a2dissite sitio.com

## Virtualhost

    Alias /blog /var/www/wordpress
    ScriptAlias /wiki /srv/www/localwiki/public_html
