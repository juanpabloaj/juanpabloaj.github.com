---
layout: default
title: Powershell
---

### Profile

Archivo de configuración de powershell, cargado al comienzo.
Para conocer la ubicación, escribir

    $profile
    
Verificar existencia

    Test-Path $profile
    
Retornara `True`, si el archivo existe.

### Get-WmiObject

Obtener información del procesador

    Get-WmiObject win32_processor

Obtener porcentaje de carga del procesador

    Get-WmiObject win32_processor | select LoadPercentage | fl

### Referencias

* [How to find CPU Usage Percent with Powershell? ](http://powershell-tips.blogspot.com/2011/08/how-to-find-cpu-usage-percent-with.html)  
* [The Windows PowerShell Profile ](http://technet.microsoft.com/en-us/library/ee692764.aspx)  
