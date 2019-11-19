---
layout: default
title : tar
---

Comprimir como .tar.gz

	$ tar cvfz comprimido.tar.gz archivo1 archivo2

Descomprimir

	$ tar xvfz comprimido.tar.gz

Descomprimir a un directorio

    tar -C /usr/local/ -xvf file.tar.gz
