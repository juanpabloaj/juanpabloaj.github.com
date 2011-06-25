---
layout: default
title: std Vector
---

{% highlight c++ %}
{% include wiki/swig/stdVector.h %}
{% endhighlight %}

{% highlight python %}
{% include wiki/swig/stdVector.i %}
{% endhighlight %}

{% highlight python %}
{% include wiki/swig/stdVectorSetup.py %}
{% endhighlight %}

Para crear el modulo 
	
	all: stdVector.h stdVector.i setup.py
		swig -c++ -python stdVector.i
		python stdVectorSetup.py build_ext --inplace

Para testear el modulo 

{% highlight python %}
{% include wiki/swig/stdVectorTest.py %}
{% endhighlight %}
