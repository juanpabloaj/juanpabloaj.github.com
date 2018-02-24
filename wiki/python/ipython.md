---
layout: default
title : ipython
---

## Instalar

Para python 2.7 ipython solo tiene soporte hasta la version 5.x. Por lo que es necesario forzar la version de instalación en python 2.7

    pip install -U ipython==5.5

## matplotlib

Ejecutar un script

    run script_file.py

Para mostrar gráficos matplotlib sin necesidad de hacer `plt.show()`, escribir la linea

    %matplotlib

## Errores

### import matplotlib: Python is not installed as a framework

Cuando importaba matplotlib obtenía este error

    RuntimeError: Python is not installed as a framework. The Mac OS X backend will not be able to function correctly if Python is not installed as a framework. See the Python documentation for more information on installing Python as a framework on Mac OS X. Please either reinstall Python as a framework, or try one of the other backends. If you are Working with Matplotlib in a virtual enviroment see 'Working with Matplotlib in Virtual environments' in the Matplotlib FAQ

Solución, agregar a `~/.matplotlib/matplotlibrc`

    backend: TkAgg

## Referencias

* [ipython](http://ipython.org/)
* [Installation Issue with matplotlib Python](http://stackoverflow.com/questions/21784641/installation-issue-with-matplotlib-python)
