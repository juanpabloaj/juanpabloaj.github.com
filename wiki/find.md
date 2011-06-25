---
layout: default
title: find
---

mostrar los encontrados en forma ls  
`find . -ls`

mostrar solo los directorios  
`find . -type d`

mostrar solo los archivos  
`find . -type f`

Buscar por nombre  
`find . -name "archivo*.tx*"`

por fecha

buscar archivos creados después de la  fecha exacta  

	$ touch -d "13 may 2001 17:54:19" marker  
	$ find . -newer marker 

mostrar su fecha de creación y nombre  
`find . -newer marker -printf %Cc"\t"%P"\n"`

mostrar permisos y ultima fecha de ultima modificación  
`find . -newer marker -printf %M"\t"%Ac"\t"%P"\n"`

antes de la fecha exacta  
`$ find . \! -cnewer marker`
