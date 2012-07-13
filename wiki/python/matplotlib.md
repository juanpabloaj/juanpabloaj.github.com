---
layout: default
title : matplotlib
---
##Install
En ubuntu lo más simple fue

    apt-get install python-matplotlib

##Ejemplos
Agregar puntos en los números del eje Y

	#!/usr/bin/python
	# -*- coding: utf-8 -*-
	import numpy as np
	import locale
	import matplotlib.pyplot as plt
	fig = plt.figure()
	ax1 = fig.add_subplot(111)
	t = np.arange(0.01,10.0,0.01)
	s1 = np.exp(t)
	ax1.plot(t,s1,'b-')
	ax1.set_xlabel('time (s)')
	ax1.set_ylabel('exp',color='b')
	newTicks = []
	locale.setlocale(locale.LC_ALL,'en_US.UTF-8')
	for j,p,l in ax1.yaxis.iter_ticks():
		print locale.format("%d", float(l), grouping=True).replace(',','.')
		newTicks.append(locale.format("%d", float(l), grouping=True).replace(',','.'))
	ax1.set_yticklabels(newTicks)
	plt.show()
