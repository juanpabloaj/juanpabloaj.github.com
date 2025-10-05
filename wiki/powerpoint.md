---
layout: wiki-note
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

Obtener posición de una imagen seleccionada

	Sub getPosition()
	    ' obtener la posicion de 1 imagen seleccionada
	    Set img1 = ActiveWindow.Selection.ShapeRange(1)
	    str1 = img1.Left & " " & img1.Top
	    str0 = str1 & " "
	    MsgBox (str0)
	End Sub
