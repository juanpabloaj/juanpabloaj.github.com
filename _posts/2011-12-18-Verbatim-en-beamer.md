---
layout: post
comments: true
title : Verbatim en beamer
categories:
---
{:enlaces: .enlaceGris}
Cuando se intenta usar `Verbatim` en `Beamer` para hacer una presentación con latex,
se pueden presentar problemas al momento de la compilación. La solución está en usar

    [fragile]

en el frame.

    \documentclass{beamer}
    \usepackage[spanish]{babel}
    \usepackage[utf8]{inputenc}
    \usetheme{Antibes}
    \begin{document}
    \title{Simple Beamer}
    \frame{\titlepage}
    \begin{frame}[fragile]
        \frametitle{Hello world}
            \begin{verbatim}
                #!/usr/bin/python
                print "Hello World!"
            \end{verbatim}
    \end{frame}
    \end{document}

Pasa lo mismo con el paquete `listings`

    \documentclass{beamer}
    \usepackage[spanish]{babel}
    \usepackage[utf8]{inputenc}
    \usetheme{Antibes}
    \usepackage{listings}
    \begin{document}
    \title{Simple Beamer}
    \frame{\titlepage}
    \begin{frame}[fragile]
        \frametitle{Hello world}
            \begin{lstlisting}
                #!/usr/bin/python
                print "Hello World!"
            \end{lstlisting}
    \end{frame}
    \end{document}

### Referencias
* [LaTex, Problem with Beamer and Listings](http://stackoverflow.com/questions/2981008/latex-problem-with-beamer-and-listings)
{:enlaces}
