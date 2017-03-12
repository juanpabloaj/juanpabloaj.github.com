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

Entrar al contenedor con bash

    docker run -it image_name bash

Automáticamente borrar contenedor al salir de él

    docker run --rm -it image_name bash
