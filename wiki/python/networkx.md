---
layout: default
title : Networkx
---

Crear y mostrar un grafo dirigido

    import networkx as nx
    import matplotlib.pyplot as plt

    g = nx.DiGraph()
    g.add_edges_from([(1,2)])
    nx.draw(g, with_labels=True)

    plt.show()
