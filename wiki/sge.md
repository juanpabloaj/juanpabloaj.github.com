---
layout: default
title: SGE
---
un host de ejecución no se carga, no se ven sus características al hacer
`qhost`

Causa: execd no esta corriendo
solución

    /opt/gridengine/default/common/sgeexecd start

### qsub


### qstat

Mostrar detalle de trabajo

    qstat -j jobId
