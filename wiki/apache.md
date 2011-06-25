--- 
layout: default
title : apache2
---
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
