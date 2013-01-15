---
layout: post
comments: true
title : Manipulación de columnas con numpy
categories:
---
Cuando se manipulan datos es habitual tener que trabajar con columnas, sobre uno o varios archivos.

Dada una serie de archivos alojados en un directorio. Utilizaremos la función `loadtxt` de la librería de python numpy para capturar el contenido almacenado en columnas, lo cual nos permitirá manipularlo por medio de índices.
Con `savetxt`, guardaremos la información en archivos de texto.

Para finalizar, con la librería matplotlib, se generarán varias imágenes en png con gráficos de los datos.

Teniendo archivos de la forma:

       0.0        0.9
       1.0        1.2
       2.0        1.8
       3.0        1.3
       4.0        1
       5.0        0.9
       6.0        0.8
       7.0        0.7
       8.0        0.7
       9.0        0.6

El siguiente script suma la segunda columna de un par de archivos, repitiendo el proceso para todas las combinaciones de dos archivos en el directorio.

    #!/usr/bin/python
    # -*- coding: utf-8 -*-
    import os
    import numpy as np
    import matplotlib.pyplot as plt

    files = {}

    # almacenar nombres de archivo y contenido
    dname = 'input/'
    for f in os.listdir(dname):
        fname = dname + f
        files[f] = np.loadtxt(fname)

    # recorrer todos los archivos
    for fi in files.keys():
        for fj in files.keys():
            if fi != fj:
                namei = fi.replace('.txt','')
                namej = fj.replace('.txt','')
                outfile = 'sum_' + namei + '_' + namej

                # primera columna del archivo
                c1 = files[fi][:,0]
                # segunda columna del archivo
                fi_c2 = files[fi][:,1]
                fj_c2 = files[fj][:,1]

                # suma de columnas
                sum_c2 = fi_c2 + fj_c2

                # guardar suma en texto
                np.savetxt(outfile + '.txt',
                        np.column_stack([c1,sum_c2]),
                        fmt = '%10.2f')

                plt.clf()
                # curva archivo i
                plt.plot(c1,fi_c2)
                # curva archivo j
                plt.plot(c1,fj_c2)
                # curva archivo suma
                plt.plot(c1,sum_c2)
                # guarda curvas en png
                plt.savefig(outfile)

Una de las imágenes de salida, donde la linea azul y verde representan los datos en las columnas leídas y la roja la suma de ambas.

![png](http://f.cl.ly/items/0m0N0M271r1r253H3N1g/sum_file_0_file_1.png)

### Enlaces

* [matplotlib](http://matplotlib.org/)  
* [numpy](http://www.numpy.org/)  
* [Código del ejemplo](https://gist.github.com/4535991)  
