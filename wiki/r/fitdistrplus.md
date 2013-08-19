---
layout: default
title : fitdistrplus
---

### gofstat

Calcular la bondad de ajuste

    gofstat(list(fitln, fitn), fitnames=c("lognormal", "normal"))

Si sólo se quiere el valor del estadístico Kolmogorov-Smirnov

    > gofstat(list(fitln, fitn), fitnames=c("lognormal", "normal"))$ks
    gnormal     normal
    0.04499100 0.03795375

Lo anterior son sólo los valores del estadístico, para obtener la decisión del test de hipótesis Kolmogorov-Smirnov

    > gofstat(list(fitln, fitn), fitnames=c("lognormal", "normal"))$kstest
    lognormal     normal
    "rejected" "rejected"

### Ajustar a beta

Si tenemos un conjunto de datos y queremos ajustarlos a una distribución beta, primero es necesario pasarlos al intervalo `[0,1]`


    library(fitdistrplus)
    # data to [0,1]
    datos_u <- ( datos - min(datos) ) / ( max(datos) - min(datos) )
    # ajuste a beta
    fitb <- fitdist(datos_u, 'beta', method='mme')
    summary(fitb)
    # grafico de densidad
    denscomp(fitb, legendtext=c("beta"))
    gofstat(fitb, fitnames=c("beta"))
    # estadistico Kolmogorov-Smirnov
    gofstat(fitb, fitnames=c("beta"))$ks
    # test Kolmogorov-Smirnov
    gofstat(fitb, fitnames=c("beta"))$kstest
    # parametros obtenidos del ajuste
    fitb$estimate
    # calculo de la probabilidad 1, llevando al intevalo [0,1]
    pbeta( ( 1 - min(datos) )/ ( max(datos) - min(datos) ) , shape1=fitb$estimate[[1]], shape2=fitb$estimate[[2]])


## Enlaces

* [fitdistrplus: Help to fit of a parametric distribution](http://cran.r-project.org/web/packages/fitdistrplus/)  
