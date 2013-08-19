---
layout: default
title : fitdistrplus
---

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

### Enlaces

* [fitdistrplus: Help to fit of a parametric distribution](http://cran.r-project.org/web/packages/fitdistrplus/)  
