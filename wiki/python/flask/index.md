---
layout: wiki-note
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

{% raw %}
    <html>
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width" />
        <link rel="stylesheet" href\="{{ url_for('static', filename='style.css') }}">
        <title>{{ post_id }}</title>
      </head>
      <body>
        <h1>{{ post_id }}</h1>
      </body>
    </html>
{% endraw %}

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

## Accediendo a base de datos con Flask-SQLAlchemy

Instalar `Flask-SQLAlchemy`

    $ pip install -U Flask-SQLAlchemy

Al código anterior agregar un modelo para usar la base de datos y una ruta para acceder a todos los post

```
from flask import Flask
from flask import request
from flask import render_template
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)

app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:////tmp/test.db"
db = SQLAlchemy(app)


class Post(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, unique=True, nullable=False)

    def __repr__(self):
        return "<Post %r>" % self.name


@app.route("/posts")
def posts():
    posts = Post.query.all()
    return render_template("posts.html", posts=posts)
```

Y un template `templates/posts.html`

{% raw %}
    <html>
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width" />
        <link rel="stylesheet" href="{{ url_for('static', filename='style.css') }}">
        <title>Posts</title>
      </head>
      <body>
        <ul>
        {% for post in posts %}
          <li>{{ post }}</li>
        {% endfor %}
        </ul>
      </body>
    </html>
{% endraw %}

Agregar algunos registros a la base de datos

```
>>> from app import db
>>> from app import Post
>>> db.create_all()
>>> p1 = Post(name="hello-world-01")
>>> p2 = Post(name="hello-world-02")
>>> db.session.add(p1)
>>> db.session.add(p2)
>>> db.session.commit()
>>> Post.query.all()
[<Post 'hello-world-01'>, <Post 'hello-world-02'>]
```

Para obtener el template con los posts

    curl 0.0.0.0:5000/posts

## Referencias

* https://flask.palletsprojects.com/en/1.1.x/quickstart
* https://flask-sqlalchemy.palletsprojects.com/en/2.x/quickstart/
