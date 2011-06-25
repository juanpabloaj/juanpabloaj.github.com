#!/usr/bin/python
# -*- coding: utf-8 -*-
import stdVector
vec = stdVector.IntVector(4)
for i in range(0,len(vec)):
	vec[i]= i*10
stdVector.mostrar(vec)
print
stdVector.mostrar(stdVector.IntVector([10,20,40]))
print
stdVector.mostrar([5,10,15])
