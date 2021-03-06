---
layout: default
title : R
---
## loops

    for ( i in 1:10){
        print(i)
    }

## Secuencias

    seq(-1,1,by=0.2)
    -1.0 -0.8 -0.6 -0.4 -0.2  0.0  0.2  0.4  0.6  0.8  1.0

## listas

Pedir la columna dos y tres de una lista

    lista[,2:3]


Pedir rango de una lista

    > l <- 1:10
    > l[ l > 3 & l < 8]
    [1] 4 5 6 7

## Strings

Concatenar

    > paste("hello", "world")
    [1] "hello world"
    > paste("hello", "world", sep="")
    [1] "helloworld"
    > paste("hello", "world", sep="-")
    [1] "hello-world"

## data.frame

Sub rango de un data.frame

    > numeros_letras <- data.frame(
        numeros=c(1,2,3,4,5),
        letras=c('a', 'b', 'c', 'd', 'e')
    )
    > numeros_letras[numeros_letras$numeros > 3, c('numeros', 'letras')]
      numeros letras
    4       4      d
    5       5      e

Recibir todas las columnas del data.frame

    > numeros_letras[numeros_letras$numeros > 3, names(numeros_letras)]

## read

Cargar un archivo `csv` separado por `;`

    archivo_csv <- read.csv('archiv.csv', sep=';')

Cargar todos los archivos `csv` de un directorio y calcular los quantiles de una columna

    csv_names <- dir(pattern='*.csv')

    for (name in csv_names) {
        print(name)
        csv_content <- read.csv(name)
        valores <- csv_content$nombre_columna
        print(quantile(valores, c(0.1, 0.5, 0.9)))
    }

## Plot

Guardar plot de histograma como `png`

    png_name <- paste(var_name,'_hist.png',sep='')
    png(filename=png_name)
    hist(var)
    dev.off()

Histograma por frecuencia

    d <- rexp(1000, 0.5)
    hist(d)

Histograma por densidad

    d <- rexp(1000, 0.5)
    hist(d, prob=T)

## Test

Test de Kolmogorov-Smirnov

    ks.test(datos, "pnormal", mu, s)

## Scripts

Llamar archivos scripts `.r`.

    source("archivo.r")

Mostrar comandos ejecutados en el script y salidas

    source("archivo.r", echo=TRUE)

Cuando el scripts tiene texto `utf-8`, como títulos de gráficos

    source('r_script.r', encoding='utf-8')

## Packages

Instalar paquetes

    install.packages('package-name')

* [fitdistrplus](/wiki/r/fitdistrplus)

## Referencias

* [Histograms and Density Plots](http://www.statmethods.net/graphs/density.html)  
