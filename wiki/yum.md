---
layout: wiki-note
title : yum
---
### yum

Los repositorios están especificados en archivos del directorio

    /etc/yum.repos.d

Mostrar repositorios disponibles

    yum repolist

Limpiar cache de yum

    yum clean all

Listar repositorios

    yum -v repolist

Listar versiones previas de un paquete

    yum --showduplicates list <package>

Instalar una versión previa

    yum downgrade package-x.y.z.el7.x86_64

Habilitar y deshabilitar repositorio

    yum --disablerepo=* --enablerepo=epel update

## Referencias

* https://unix.stackexchange.com/questions/6263/how-to-check-available-package-versions-in-rpm-systems
* https://phoenixnap.com/kb/create-local-yum-repository-centos
