---
layout: post
comments: true
title : Distribuir variables con consul/envconsul
categories:
---

El siguiente ejemplo pretende mostrar como almacenar variables en consul y mediates envconsul utilizarlas como variables de ambiente en un servicio.

El siguiente ejemplo se realizará utilizando contenedores docker y el código fuente se encuentra disponible en el repositorio [envconsul with a service][envconsul-with-a-service].

Levantar consul, usando el docker-compose de [este enlace](https://github.com/juanpabloaj/envconsul_with_a_service/blob/master/docker-compose.yaml) y el comando

    docker-compose up -d

Crear una variable llamada `max_conns` de valor 10 y prefijo `hello-app`

    docker-compose exec consul-server-bootstrap consul kv put hello-app/max_conns 10

Levantar el servicio con el docker-compose [del siguiente enlace](https://github.com/juanpabloaj/envconsul_with_a_service/blob/master/docker-compose-services.yaml)

    docker-compose -f docker-compose-services.yaml build
    docker-compose -f docker-compose-services.yaml up -d

[El servicio](https://github.com/juanpabloaj/envconsul_with_a_service/blob/master/hello.py) está desarrollado con python/flask, cada vez que recibe una consulta retorna el valor de la variable de entorno `max_conns`.

    # -*- coding: utf-8 -*-
    import os
    from flask import Flask
    from flask import jsonify
    app = Flask(__name__)

    @app.route("/")
    def hello():
        return jsonify(value=os.environ['max_conns'])

    if __name__ == '__main__':
       app.run(host='0.0.0.0')

El servicio se ejecuta en un [contener docker](https://github.com/juanpabloaj/envconsul_with_a_service/blob/master/Dockerfile), es iniciado y mantenido en ejecución por envconsul, el cual obtiene las variables desde consul y las disponibiliza como variables de entorno. Si una variable es actualizada, envconsul reinicia el servicio.

    CMD envconsul \
        -consul-addr "consul-server-bootstrap:8500" \
        -prefix hello-app \
        python hello.py

Consultar al servicio

    curl localhost:5000

Para obtener el valor definido anteriormente

    {"value":"10"}

Actualizar el valor de la variable

    docker-compose exec consul-server-bootstrap consul kv put hello-app/max_conns 20

Volvemos a invocar el servicio

    curl localhost:5000

Finalmente obtenemos el último valor asignado a la variable

    {"value":"20"}

### Referencias

* [envconsul with a service][envconsul-with-a-service]
* https://github.com/hashicorp/envconsul

[envconsul-with-a-service]: https://github.com/juanpabloaj/envconsul_with_a_service
