---
layout: default
title: docker
---
Mostrar imágenes existentes

    docker images

Lanzar docker container

    docker run image_name

Usar puerto del host

    docker run -p 80:80 image_name

Entrar a un contenedor nuevo con bash

    docker run -it image_name bash

Automáticamente borrar contenedor al salir de él

    docker run --rm -it image_name bash

Entrar a un contenedor existente con bash

    docker exec -it image_name bash

Mostrar containers

    docker ps -a

Borrar containers

    docker container rm container_id

Construir imagen desde Dockerfile

    docker build -t image_name .

Agregar usuario a grupo docker

    sudo usermod -a -G docker $USER

Mostrar logs del contenedor

    docker logs container_id

Borrar imágenes no utilizadas

    docker image prune

Copiar archivos desde host a contenedor

    docker cp /tmp/file.txt container_name:/tmp/file.txt

## Registry

Obtener imágenes en registro

    curl http://registry:5000/v2/_catalog

Obtener tags de la imagen

    curl -X GET http://registry:5000/v2/ubuntu/tags/list

Para usar un registro sin https agregar al archivo `/etc/docker/daemon.json`.

    {
      "insecure-registries" : ["191.168.0.10:5000"]
    }

https://docs.docker.com/registry/deploying/

Para agregar DNS a docker, con esto nombre de dominio locales serán visibles en los contenedores.
Agregar a `/etc/docker/daemon.json`. (192.168.0.10 es el IP de un DNS local)

    {
        "dns": ["192.168.1.10", "8.8.8.8"],
    }

Definir máximo tamaño de logs, en archivo `/etc/docker/daemon.json`

    {
      "log-opts": {
        "max-size": "10m",
        "max-file": "3",
      }
    }

### overlay2

Usar `overlay2` como storage driver. Agregar al archivo `/etc/docker/daemon.json`.

    {
        "storage-driver": "overlay2"
    }

Y reiniciar docker. En la info de docker debe mostrar

    $ docker info | grep Storage
    Storage Driver: overlay2


Para desactivar iptables por defecto y evitar problemas de no acceso a los contenedores desde fuera de la maquina, agregar al archivo

    /etc/default/docker

    DOCKER_OPTS="--iptables=false"

### Errores frecuentes

	ERROR: Couldn't connect to Docker daemon at http+docker://localunixsocket - is it running?
	If it's at a non-standard location, specify the URL with the DOCKER_HOST environment variable.

Solución, buscar archivos con permisos de root

	find . -user root -perm -u+rwx

Intentar que git borre todos los archivos mencionados en el gitignore

	git clean -xf

## OSX

Docker puede llegar a utilizar mucho espacio en OSX.

Este almacena los datos en el directorio

    ~/Library/Containers/com.docker.docker/Data

Para recuperar espacio

    docker system prune -a --volumes

## inspect

Obtener variables del contenedor

    docker inspect --format='{{json .Config.Env}}' container_name

## Referencias

* https://docs.docker.com/engine/userguide/storagedriver/overlayfs-driver/#configure-docker-with-the-overlay-or-overlay2-storage-driver
* https://blog.viktorpetersson.com/2014/11/03/the-dangers-of-ufw-docker.html
* https://docs.docker.com/docker-for-mac/space/
* https://stackoverflow.com/questions/39878939/docker-filling-up-storage-on-macos
* https://docs.docker.com/config/containers/logging/configure/
