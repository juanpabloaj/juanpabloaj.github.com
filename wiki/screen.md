---
layout: default
title: screen
---

split, divide horizontalmente

	ctrl-a S 

se mueve en el split

	ctrl-a TAB 

copiar,hay que moverse con el cursor para seleccionar 

	ctrl-a [

pegar 

	ctrl-a ] 

ocultar screen sin cerrarlo

	ctrl-a d 

### ssh

Para cambiar el titulo de las ventanas de screen cada vez que se haga la conexión ssh agregar en ~/.ssh/config

	host remoteHost
	LocalCommand echo -ne '\ekremoteHost\e\\'

Para que funcione agregar al  archivo /etc/ssh/ssh_config

	PermitLocalCommand yes
