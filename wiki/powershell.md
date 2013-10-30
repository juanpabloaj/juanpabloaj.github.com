---
layout: default
title: Powershell
---

## General

Definir alias

    set-alias app_name C:\...\app_name.exe

Los comentarios deben comenzar la linea con `#`.

## Variables

Path

    $env:path

## Profile

Archivo de configuración de powershell, cargado al comienzo.
Para conocer la ubicación, escribir

    $profile

Verificar existencia

    Test-Path $profile

Retornara `True`, si el archivo existe.

Si no existe, se puede crear y editar con

    New-Item -path $profile -type file -force
    notepad $profile

Para que el archivo profile pueda ser cargado debe ser posible ejecutar scripts. Lo cual se habilita (teniendo los permisos necesarios) con

    set-executionpolicy remotesigned

Para agregar directorios al `PATH`

    $env:Path += ";C:\Program Files\dir_name\bin"

## Get-WmiObject

Obtener información del procesador

    Get-WmiObject win32_processor

Obtener porcentaje de carga del procesador

    Get-WmiObject win32_processor | select LoadPercentage | fl

## Referencias

* [How to find CPU Usage Percent with Powershell? ](http://powershell-tips.blogspot.com/2011/08/how-to-find-cpu-usage-percent-with.html)  
* [The Windows PowerShell Profile ](http://technet.microsoft.com/en-us/library/ee692764.aspx)  
* [Running Windows PowerShell Scripts](http://technet.microsoft.com/en-us/library/ee176949.aspx)  
