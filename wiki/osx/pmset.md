---
layout: wiki-note
title : pmset
---

`pmset` permite consultar y modificar la configuración de energía de OSX:
sleep, batería, pantalla, hibernación, eventos de encendido y procesos que
impiden que el equipo entre en reposo.

## Consultas

Ver configuración actual

    pmset -g

Ver configuración separada por perfil de energía

    pmset -g custom

Ver estado de la batería

    pmset -g batt

Ver procesos o servicios que impiden el sleep

    pmset -g assertions

Ver eventos de encendido, sleep y wake

    pmset -g log

Ver eventos programados

    pmset -g sched

## Configuración

Aplicar cambios para todos los perfiles de energía

    sudo pmset -a displaysleep 10
    sudo pmset -a sleep 30

Configurar valores distintos cuando se usa batería o cargador

    sudo pmset -b sleep 15
    sudo pmset -c sleep 0

Desactivar temporalmente el sleep del sistema

    sudo pmset -a disablesleep 1

Volver a activar el sleep del sistema

    sudo pmset -a disablesleep 0

Desactivar Power Nap

    sudo pmset -a powernap 0

## Eventos programados

Programar un encendido o wake puntual. El formato de fecha es `MM/DD/YY`.

    sudo pmset schedule wakeorpoweron "05/09/26 07:00:00"

Programar wake de lunes a viernes

    sudo pmset repeat wakeorpoweron MTWRF 07:00:00

Cancelar eventos programados

    sudo pmset schedule cancelall
