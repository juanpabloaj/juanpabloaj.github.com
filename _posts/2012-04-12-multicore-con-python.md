---
layout: post
comments: true
title : Multicore con python
categories:
---
Si nos dicen programación paralela seguro que lo primero en que pensamos es MPI o openMP, incluso en CUDA.

Pero en algunos casos lo único que necesitamos es aplicar, de manera simple, una operación sobre muchos elementos, y aprovechar el procesador multicore del que disponemos.  

El python, al usar `map` aplicamos una misma función a cada elemento de una lista. Lo que ofrece el paquete `multiprocessing`, entre otras cosas, es poder dividir esta tarea entre el número de procesadores que se especifique.

    #!/usr/bin/python
    # -*- coding: utf-8 -*-
    import multiprocessing
    from datetime import datetime
    def f(x):
        n = int(1e2)
        for i in range(n):
            for i in range(n):
                # computo
                i
        return i*i

    def main():
        n = int(1e5)
        np =  multiprocessing.cpu_count()
        pool = multiprocessing.Pool(processes=np)
        l = range(n)
        t0 = datetime.now()
        map(f,l)
        print datetime.now() - t0

        t0 = datetime.now()
        pool.map(f,l)
        print datetime.now() - t0

    if __name__ == "__main__":
        main()

En un core demoró 50 segundos, versus los 12 al usar cuatro cores.

    0:00:50.793201
    0:00:12.689651

Los tiempos fueron medidos en un Intel(R) Xeon(R) E5504 2.00GHz.

### Enlaces

* [Multiprocessing python package](http://docs.python.org/library/multiprocessing.html)
* [Código en github](https://gist.github.com/2371946)
