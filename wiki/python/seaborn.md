---
layout: default
title: seaborn
---

Ejemplo simple

    import matplotlib.pyplot as plt
    import seaborn as sns

    sns.set_theme()

    tips = sns.load_dataset("tips")

    sns.boxplot(x=tips["total_bill"])

    sns.despine(offset=10, trim=True)

    sns.displot(tips)

    plt.show()


## Referencias

* https://seaborn.pydata.org/
