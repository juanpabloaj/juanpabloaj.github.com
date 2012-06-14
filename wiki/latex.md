---
layout: default
title : Latex
---
Para hacer referencia a una ecuación es más como usar `\eqref` que `\ref`, ya que auto agrega los `()`.  

Una frase entre comillas, con dos `´´` al inicio y `"` al final

	´´Esto es una frase entre comillas"

La diferencia entre

    \sum\limits_{b\in \mathcal{B}}

Y

    \sum_{b\in \mathcal{B}}

Es que en el primer caso el indice queda abajo, en el segundo queda al lado de la sumaria.

##Tablas
Cambiar el caption de cuadro a tabla, cambiar la llamada al paquete spanish

    \usepackage[spanish, es-tabla]{babel}


Para que una tabla no se mueva de posición donde se define, usar el paquete

    \usepackage{float}

Y al declarar la tabla usar `H`

    \begin{table}[H]

##Citaciones

Multiples citaciones

    \cite{citation01,citation02,citation03}

##Referencias

* [wikibooks](http://en.wikibooks.org/wiki/LaTeX/Bibliography_Management)  
* [Keeping tables/figures close to where they are mentioned](http://tex.stackexchange.com/questions/2275/keeping-tables-figures-close-to-where-they-are-mentioned)  
