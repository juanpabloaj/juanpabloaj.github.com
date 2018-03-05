---
layout: default
title: docker-compose
---

Bajar todo y borrar volúmenes con nombre

    docker-compose down -v

### Compartir llave ssh desde host a contenedor

Agregar a la descripción del contenedor

	service_name:
		volumes:
			- $SSH_AUTH_SOCK:/ssh-agent # Forward local machine SSH key to docker
		environment:
			SSH_AUTH_SOCK: /ssh-agent

Generar en host variable `SSH_AUTH_SOCK` que contiene ubicación de socket unix que usa el agente para comunicarse

	eval $(ssh-agent) > /dev/null

Agregar agente ssh

	ssh-add

Levantar contenedor

	docker-compose up -d service_name


### Referencias

* https://stackoverflow.com/questions/18136389/using-ssh-keys-inside-docker-container
* http://blog.joncairns.com/2013/12/understanding-ssh-agent-and-ssh-add/
