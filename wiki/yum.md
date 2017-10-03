---
layout: default
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

Habilitar y deshabilitar repositorio

    yum --disablerepo=* --enablerepo=epel update
