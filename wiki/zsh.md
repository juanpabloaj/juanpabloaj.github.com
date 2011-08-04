---
layout: default
title: zsh
---

{:enlaces: .enlaceGris }  

# Instalar

Clonar 

	git clone git://zsh.git.sf.net/gitroot/zsh/zsh

Construir archivo `configure` 

	$ cd zsh
	$ Util/preconfig 

Construir 

	$ ./configure --prefix=dirDestino
	$ make 
	$ make install

En la instalación necesita `yodl` para generar la documentación
