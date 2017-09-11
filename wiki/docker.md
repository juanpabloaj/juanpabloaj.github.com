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
