---
layout: default
title: Jupyter
---

Instalar y lanzar

    pip3 install jupyterlab
    jupyter notebook

Para usar desde otra maquina

    jupyter notebook --no-browser --ip 0.0.0.0

Convertir notebook a script python, para ejecutar desde la consola

    jupyter nbconvert --to python notebook_name.ipynb

## Referencias

* https://jupyter.org/install
