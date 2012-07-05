---
layout: default
title : fortran
---
Las primeras 6 columnas de cada linea están reservadas, por lo que se puede usar desde la 7 a la 80.

##Ejemplos
Mostrar pares multiplicados por 10

           program test
              integer :: i
              do i=0,10-1
              if ( mod(i,2) == 0 ) print *,"hello ",i*10
              end do
           end program test

Lectura y escritura de archivo

           program indat

           integer i,j
           open(1,FILE='in.txt')
           read(1,*) i,j
           print *,i*10,j*10
           close(1)

           open(2,FILE='out.txt')
           write(2,*) i*100,j*100
           close(2)

           end program indat

Donde el archivo `in.txt` contiene

    2 4

Y `out.txt` debería tener

    200 400

## Referencias

* [Un breve curso de FORTRAN por E. Velasco](http://www.uam.es/departamentos/ciencias/fisicateoricamateria/especifica/hojas/kike/FORTRAN/FORTRAN.html)  
* [Fortran, File IO](http://folk.uio.no/steikr/doc/f77/tutorial/files.html)  
