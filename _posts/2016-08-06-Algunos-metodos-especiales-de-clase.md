---
layout: post
comments: true
title : Python y algunos métodos especiales de clase
categories:
---
Este post es para las personas que están comenzando a utilizar clases en python, es un poco más que lo básico, voy a mostrar algunos ejemplos de métodos especiales de clase como `__str__` y `__call__`. Los ejemplos están probados con python 3.5.

### __ str __

Primero creemos una clase `Animal`

    class Animal:
        def __init__(self, nombre):
            self.nombre = nombre

Y un objeto de la clase `Animal` llamado `perro`

    >>> perro = Animal('bobby')

Para mostrar el contenido del atributo `nombre`, es necesario llamarlo directamente

    >>> print(perro.nombre)
    bobby

Si usamos print sobre el objeto veríamos algo como

    >>> print(perro)
    <__main__.Animal object at 0x1053fab38>

Cambiemos el mensaje que muestra el objeto al usar print, agregando el método `__str__` a la clase

    class Animal:
        def __init__(self, nombre):
            self.nombre = nombre
        def __str__(self):
            return nombre

Ahora al usar print

    >>> perro = Animal('bobby')
    >>> print(perro)
    bobby

###  __ call __

Para interactuar con un objeto podemos crear métodos, por ejemplo, uno llamado `hablar`

    class Animal:
        def __init__(self, nombre):
            self.nombre = nombre
        def __str__(self):
            return nombre
        def hablar(self, mensaje):
            return 'Hola, mi nombre es {}, {}'.format(self.nombre, mensaje)

Ahora puedo llamar el método `hablar`

    >>> perro = Animal('bobby')

    >>> perro.hablar('mucho gusto!')
    'Hola, mi nombre es bobby, mucho gusto!'

Pero si intento llamar directamente al objeto (notar los "()" después del nombre del objeto)

    >>> print(perro())
    Traceback (most recent call last):
      File "<stdin>", line 1, in <module>
      TypeError: 'Animal' object is not callable
      'Animal' object is not callable

Obtengo ese mensaje, no puedo llamar directamente al objeto de la clase `Animal`, para esto es necesario agregar el método `__call__`

    class Animal:
        def __init__(self, nombre):
            self.nombre = nombre
            self.llamados = 0
        def __str__(self):
            return nombre
        def hablar(self, mensaje):
            return 'Hola, mi nombre es {}, {}'.format(self.nombre, mensaje)
        def __call__(self):
            self.llamados +=1
            return self.hablar('he sido llamado {} veces.'.format(self.llamados))


Con esto cada vez el que objeto sea llamado retornará un mensaje e incrementará un atributo.

    >>> perro = Animal('bobby')

    >>> print(perro())
    Hola, mi nombre es bobby, he sido llamado 1 veces.

    >>> print(perro())
    Hola, mi nombre es bobby, he sido llamado 2 veces.

Espero que estos ejemplos ayuden a crear formas más fáciles de interactuar con los objetos de tus clases.
