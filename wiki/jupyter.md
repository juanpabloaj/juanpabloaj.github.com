---
layout: wiki-note
title: Jupyter
---

Instalar y lanzar

    pip3 install jupyterlab
    jupyter notebook

Para usar desde otra maquina

    jupyter notebook --no-browser --ip 0.0.0.0

Convertir notebook a script python, para ejecutar desde la consola

    jupyter nbconvert --to python notebook_name.ipynb

Ejemplo

    %matplotlib inline
    import matplotlib.pyplot as plt

    plt.plot([[0,1], [1,1]], linewidth=4, label='two lines')
    plt.show()

## Referencias

* https://jupyter.org/install
