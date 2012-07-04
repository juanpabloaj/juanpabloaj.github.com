---
layout: default
title : fortran
---
Las primeras 6 columnas de cada linea están reservadas, por lo que se puede usar desde la 7 a la 80.

Ejemplo básico, mostrar pares multiplicados por 10

           program test
              integer :: i
              do i=0,10-1
              if ( mod(i,2) == 0 ) print *,"hello ",i*10
              end do
           end program test


## Referencias

* [Un breve curso de FORTRAN por E. Velasco](http://www.uam.es/departamentos/ciencias/fisicateoricamateria/especifica/hojas/kike/FORTRAN/FORTRAN.html)  
