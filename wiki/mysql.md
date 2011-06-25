--- 
layout: default
title : MySQL
---
Borrar registro  
`delete from laTabla where laColumna='unValor'`
  
Actualizar registros que cumplan las condiciones  
`update af set columna='valor_ nuevo' where columna='valor_registro'`

Mostrar un intervalo de fechas  
`select * from miTable fecha > now() - interval 4 hour and fecha < now() + interval 4 hour`
