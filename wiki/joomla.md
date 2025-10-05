--- 
layout: wiki-note
title : Joomla
---

Para mostrar un contenido solo en portada

	<?php if (JRequest::getVar('view')=='frontpage') : ?>
		<div>
		...
		</div>
	<?php endif; ?>

### Frienly Urls

En el panel de joomla de administración del sitio, establecer

    Search Engine Friendly URLs=> yes
    Use Apache mod_rewrite => yes

En la raíz de `joomla` dejar `htaccess.txt` como `.htaccess`, el cual debe tener algo como

    Options +FollowSymLinks
    RewriteEngine On
    RewriteCond %{QUERY_STRING} mosConfig_[a-zA-Z_]{1,21}(=|\%3D) [OR]
    RewriteCond %{QUERY_STRING} base64_encode.*\(.*\) [OR]
    RewriteCond %{QUERY_STRING} (\<|%3C).*script.*(\>|%3E) [NC,OR]
    RewriteCond %{QUERY_STRING} GLOBALS(=|\[|\%[0-9A-Z]{0,2}) [OR]
    RewriteCond %{QUERY_STRING} _REQUEST(=|\[|\%[0-9A-Z]{0,2})
    RewriteRule ^(.*)$ index.php [F,L]
    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteCond %{REQUEST_FILENAME} !-d
    RewriteCond %{REQUEST_URI} !^/index.php
    RewriteCond %{REQUEST_URI} (/|\.php|\.html|\.htm|\.feed|\.pdf|\.raw|/[^.]*)$  [NC]
    RewriteRule (.*) index.php
    RewriteRule .* - [E=HTTP_AUTHORIZATION:%{HTTP:Authorization},L]

En archivo de configuración del sitio para apache, normalmente en

    /etc/apache2/sites-available/

Dejar `AllowOverride None` en `AllowOverride all`.

### Referencias

* [Joomla Pretty links](http://stackoverflow.com/questions/5445493/joomla-pretty-link)  
