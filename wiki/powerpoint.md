---
layout: default
title: powerpoint
---

## Macros

Definir posición y tamaño de una imagen

	Sub Resize()
	    With ActiveWindow.Selection.ShapeRange
		' 28.35 para convertirde cm a pts
		.Width = 10 * 28.35
		.Left = 2.5 * 28.35
		.Top = 3.5 * 28.35
	    End With
	End Sub	
