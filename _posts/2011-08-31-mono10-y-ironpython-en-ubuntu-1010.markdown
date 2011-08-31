---
layout: default
title : Mono 10 y ironpython en Ubuntu 10.10
categories:
---
### Mono 10
Si necesitas .NET v4 en Linux la opción es mono 10.  
Para facilitar la instalación es recomendable el script [mono_build.sh](https://github.com/firegrass/mono-installer-script/blob/master/mono_build.sh).  
{:enlaces}
Basta descargar, dar permisos y ejecutar

	$ wget -c https://raw.github.com/firegrass/mono-installer-script/master/mono_build.sh
	$ chmod u+x mono_build.sh
	$ ./mono_build.sh -c -v 2.10 -p ~/mono -m mono

Donde `-m` especifica lo que se quiere instalar, estando disponible incluso monodevelop.  
Cuando se complete la instalación debería verse un mensaje de tipo 

	...
	--  Your parallel environment is installed in /home/juanpablo/mono/mono-2.10
	--  To start a mono-2.10 environment, run: source mono-2.10-environment
	--  To use mono-2.10 to run a cli app, run: mono-2.10 (eg mono-2.10 mono -V)

Por lo que hay que agregar algunas variables al entorno desde `mono-2.10-environment`

	$ source mono-2.10-environment

Y para verificar 

	$ mono-2.10 mono -V
	Mono JIT compiler version 2.10.5  ....

Es recomendable agregar esto a `~/.bashrc`  
Para utilizar mono 10 es necesario anteponer siempre mono-2.10.  
### Ironpython 

Ahora a clonar ironpython y construir 

	$ git clone https://github.com/IronLanguages/main.git IronLanguages
	$ cd IronLanguages
	$ xbuild Solutions/IronPython.Mono.sln

Con lo cual `ipy`, el interprete, debería estar en `IronLanguages/bin/Release/ipy.exe`, como depende de mono 10 para utilizarlo es necesario 

	mono-2.10 $HOME/IronLanguages/bin/Release/ipy.exe

Para simplificar agregué estos alias a `~/.bashrc`

	alias mono="mono-2.10 mono"
	alias ipy="mono $HOME/IronLanguages/bin/Release/ipy.exe"

### Referencias

* http://patrick.qmtech.net/blog/?p=41  
* http://www.mentby.com/doug-blank/building-ironpythonironruby-for-mono-yes.html
* http://ironpython.codeplex.com/wikipage?title=IronPython%20on%20Mono
{:enlaces}
