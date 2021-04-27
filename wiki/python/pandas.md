---
layout: default
title : pandas
---

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
