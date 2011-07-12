--- 
layout: default
title : Rails Model
---
{:enlaces: .enlaceGris }  

### Modificar atributo de una tabla

Eliminar el atributo 

	$ rails g migration RemoveContentFromPosts content:text
	$ rake db:migrate

Agregar el atributo 

	$ rails g migration addContentFromPosts content:text
	$ rake db:migrate

Se pueden observar los cambios en el archivo `db/schema.rb`
