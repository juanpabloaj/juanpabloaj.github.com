---
layout: default
title : unittest
---
Lanzar test con verbosity

    python -m unittest -v test_module

Descubrir test en el directorio, los archivos que comiencen con `test_` y que tengan referencias al modulo `unittest`

    python -m unittest

## Ejemplo


operations.py

    def add(a, b):
        return a + b

test_operations.py

    import unittest
    import operations


    class TestAdd(unittest.TestCase):
        def test_is_not_none(self):
            self.assertNotEqual(operations.add(1, 2), None)

        def test_1_and_2(self):
            self.assertEqual(operations.add(1, 2), 3)

Ejecutar los tests con

    python -m unittest

## Referencias

* https://docs.python.org/3/library/unittest.html
