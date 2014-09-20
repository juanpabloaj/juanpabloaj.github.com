---
layout: post
comments: true
title : Empaquetando y distribuyendo código python con pex
categories:
---

Un archivo `.pex` es un comprimido (zip) que nos permite ejecutar código python contenido en él, ofreciendo una alternativa para la distribución aplicaciones y dependencias. Más detalles en [What are pex files].

En realidad, almacenar y ejecutar código python en un archivo comprimido no es algo nuevo, pero el paquete `pex` nos puede simplificar la tarea.

### Instalar pex

Lo primero, instalar pex

    pip install pex

### El primer .pex para distribuir librerías

Supongamos que necesito utilizar en varias maquinas un script llamado `hello.py`

    #!/usr/bin/python
    # -*- coding: utf-8 -*-
    import requests

    def main():
        print "hello with {}".format(requests.__name__)

    if __name__ == '__main__':
        main()

El cual depende de la librería `requests`.

Si intento la ejecución y no tengo la librería instalada

    $ python hello.py
    Traceback (most recent call last):
      File "hello.py", line 3, in <module>
        import requests
    ImportError: No module named requests

Obtengo `ImportError`.

Construiremos un `.pex` que contenga lo necesario para ejecutar el `hello.py`

    pex -v -r request -o request.pex

El cual podemos utilizar con

    $ ./requests.pex hello.py
    hello with requests

Lo anterior se realizo sin la necesidad de instalar la librería, solo quedó almacenada en el archivo `requests.pex`, el cual puede ser enviado y reutilizado en otras máquinas.

### Todo lo necesario en un .pex

En el ejemplo anterior se almaceno la librería a utilizar en el archivo `.pex`, ahora me interesa incluir el script en el archivo de distribución.

Para lo cual es necesario organizar nuestro código como un paquete de python, similar a uno de pip.

    simple/
    ├── setup.py
    └── simple
        └── __init__.py


Con un archivo `simple/setup.py`

    #!/usr/bin/python
    # -*- coding: utf-8 -*-
    from setuptools import setup

    setup(
        name='simple',
        version='0.0.1',
        packages=['simple']
    )

Y el script `simple/simple/__init__.py`

    #!/usr/bin/python
    # -*- coding: utf-8 -*-
    import requests

    def main():
        print "hello with {}".format(requests.__name__)

Para construir el pex que contiene la librería requests y el script

    pex -v -r requests --no-wheel -s simple -e simple:main -o hello_requests.pex

El cual se puede usar con

    $ ./hello_requests.pex
    hello with requests

El pex construido se puede distribuir y utilizar en otras maquinas sin necesidad de instalar las dependencias, ya que están auto contenidas en el archivo.

## Referencias

* [Documentación de Pex](https://pex.readthedocs.org/)
* [What are pex files]

[What are pex files]: https://pex.readthedocs.org/en/latest/whatispex.html#what-are-pex-files
