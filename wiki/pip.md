---
layout: default
title: pip
---
## Pre requisitos

    * python2.6 o superior
    * python-setuptools
    * curl

## Instalación

    curl https://raw.github.com/pypa/pip/master/contrib/get-pip.py | python

## Uso
Para usar la versión específica de un paquete se puede crear un archivo requirements.txt detallando

    Django==1.2.3

Y usar pip con el argumento `-r`

    pip install -r requirements.txt

Instalación desde un repositorio local en editable mode

    pip install -e .

Instalación desde la rama en un repositorio remoto

    pip install git+git://github.com/juanpabloaj/repo_name.git@branch_name

## Pypi

Registrarse

    python setup.py register

Crear distribución

    python setup.py sdist

Crear y subir a pypi

    python setup.py sdist upload -r pypi

#### .pypirc
