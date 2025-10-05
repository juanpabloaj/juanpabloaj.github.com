---
layout: wiki-note
title: matlab
---

Lanzar sin la ventana gráfica ni figura de matlab al cargar

    matlab -nodesktop -nosplash

Si tenemos en un archivo llamado `sincmd.m`, las lineas

    sin(0:0.1:1)
    exit;

Para ejecutarlas en la linea de comandos

    matlab -r sincmd

### Comentarios
Comentarios de una linea

    % este es un comentarios

De varias lineas

    %{
        varios
        comentarios
    %}

Funciones definidas en una linea

    fu = @(x) x^2;
    fu(2)

### Interactuar con programas C/C++

Teniendo el código de ejemplo llamado cuadrado.cpp

    #include "mex.h"
    #include<math.h>

    void mexFunction( int nlhs, mxArray *plhs[],
              int nrhs, const mxArray*prhs[] ){
        double *a, *b;

        a = mxGetPr(prhs[0]);
        plhs[0] = mxCreateDoubleMatrix(1 ,1, mxREAL);
        b = mxGetPr(plhs[0]);
        *(b) = pow(*a, 2);
    }

Desde matlab compilar con

    mex cuadrado.cpp

Y llamar a la función creada

    cuadrado(2)

## Referencias

* [C/C++ Source MEX-Files](http://www.mathworks.com/help/matlab/matlab_external/c-c-source-mex-files.html)  
