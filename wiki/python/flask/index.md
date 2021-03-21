---
layout: default
title: flask
---

Instalar dependencias con pyenv

    pyenv virtualenv 3.8.3 flask-virtualenv
    pyenv activate flask-virtualenv
    pip install flask
    pyenv deactivate

## Ejemplo con template

Archivos del ejemplo

```
├── hello.py
├── static
│   └── style.css
└── templates
    └── post.html
```

`hello.py`

```
from flask import Flask
from flask import render_template

app = Flask(__name__)


@app.route("/")
def hello_world():
    return "hello, world"


@app.route("/posts/<post_id>")
def show_post(post_id):
    return render_template("post.html", post_id=post_id)
```

`template/post.html`

```
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width" />
    <link rel="stylesheet" href="{{ url_for('static', filename='style.css') }}">
    <title>{{ post_id }}</title>
  </head>
  <body>
    <h1>{{ post_id }}</h1>
  </body>
</html>
```

`static/style.css`

```
body {
  background-color: #eee;
}
```

Ejecutar con

```
$ export FLASK_APP=hello.py
$ flask run
```

## Ejecutar como contenedor

`requirements.txt`

    Flask==1.1.2

`Dockerfile`

Notar en el `ENTRYPOINT` el `--host=0.0.0.0` para que el contenedor pueda ser llamado desde fuera.

```
FROM python:3.8-alpine

ENV FLASK_APP app.py

WORKDIR /app

COPY . /app

RUN pip install -r requirements.txt

ENTRYPOINT ["flask", "run", "--host=0.0.0.0"]
```

Construir contenedor

    docker build -t flask-hello .

Ejecutar contenedor

    docker run -d -p 5000:5000 flask-hello

Consultar contenedor

    $ curl 0.0.0.0:5000/posts/hello_world

## Referencias

* https://flask.palletsprojects.com/en/1.1.x/quickstart
