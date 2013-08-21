---
layout: default
title : scipy
---
### Ajuste de curva y ploteo

    import numpy as np
    from scipy.optimize import curve_fit

    import matplotlib.pyplot as plt

    def func(x, a, b, c):
        return a * np.exp(-b*x) + c

    x = np.linspace(0, 4, 50)
    y = func(x, 2.5, 1.3, 0.5)
    yn = y + 0.2 * np.random.normal(size=len(x))

    popt, pcov = curve_fit(func, x, yn)

    #print popt

    plt.plot(x, yn, 'o', x, func(x, *popt))
    plt.show()

![curve_fit](http://f.cl.ly/items/321g2433160U2i451E2r/Captura_de_pantalla_082113_103655_AM.jpg)

Código disponible en [gist](https://gist.github.com/juanpabloaj/6295191) .


### Referencias

* [scipy.optimize.curve_fit](http://docs.scipy.org/doc/scipy/reference/generated/scipy.optimize.curve_fit.html)  
