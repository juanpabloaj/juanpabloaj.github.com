---
layout: default
title: zsh
---
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

### for
repetir hasta que haya un problema, útil para detener con `ctrl-c`

	for i in {1..10}
	do
		python code.py
		if [[ "$?" != "0" ]]; then
			break
		fi
	done

