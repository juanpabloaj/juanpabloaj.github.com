---
layout: post
comments: true
title : Instalando PySide
categories:python PySide
---

### Prerequisitos

* python
* Qt4.8

PySide es compatible con la versión 4.8 de Qt.

Qt 4.8 es descargable desde el sitio de [Qt](http://qt-project.org/downloads). Yo instale la versión [4.8.5](http://download.qt-project.org/official_releases/qt/4.8/4.8.5/qt-win-opensource-4.8.5-vs2008.exe) .


### Instalación

Desde el sitio de descarga de [PySide](http://qt-project.org/wiki/PySideDownloads) descargar e instalar la binario para windows, compatible con versión de python instalado. En mi caso [PySide-1.2.1.win32-py2.7.exe](http://download.qt-project.org/official_releases/pyside/PySide-1.2.1.win32-py2.7.exe) .

### Test

Para probar, usar las lineas

    import PySide
    from PySide.QtCore import *

    print PySide.__version__
    print PySide.QtCore.__version__

Para obtener la salida

    1.2.1
    4.8.5

### Referencias

* [Install PySide on Windows XP](http://buildawebsitecontent.blogspot.com/2013/04/install-pyside-on-windows-xp.html)  
* [Sitio de PySide](http://qt-project.org/wiki/PySide)  
* [Setting_up_PySide](http://qt-project.org/wiki/Setting_up_PySide)  
