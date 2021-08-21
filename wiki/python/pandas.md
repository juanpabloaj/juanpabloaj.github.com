---
layout: default
title : pandas
---

Convertir columna de string a datetime

    df['Date'] = pd.to_datetime(df['Date'], format='%Y-%m-%d')

Agrupar datos de por hora y hacer un boxplot de cada grupo

    durations['Time'] = pd.to_datetime(durations.Time)

    filtered = durations[(durations['Time'] > datetime.datetime(2021,4,19,16)) \
                         & (durations['Time'] < datetime.datetime(2021,4,21,16))]

    groups = filtered.groupby(pd.Grouper(key="Time", freq="H"))

    hours = pd.concat([pd.DataFrame(x[1].values) for x in groups], axis=1)
    hours = pd.DataFrame(hours)
    hours.columns = range(len(hours.columns))
    hours.plot.box(figsize=(16, 10))

## Referencias

* https://machinelearningmastery.com/time-series-data-visualization-with-python/
* https://www.geeksforgeeks.org/convert-the-column-type-from-string-to-datetime-format-in-pandas-dataframe/
