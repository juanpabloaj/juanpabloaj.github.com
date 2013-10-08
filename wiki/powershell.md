---
layout: default
title: Powershell
---
Obtener información del procesador

    Get-WmiObject win32_processor

Obtener porcentaje de carga del procesador

    Get-WmiObject win32_processor | select LoadPercentage | fl

### Referencias

* [How to find CPU Usage Percent with Powershell? ](http://powershell-tips.blogspot.com/2011/08/how-to-find-cpu-usage-percent-with.html)  
