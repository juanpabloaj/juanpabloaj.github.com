---
layout: default
title : Automata celular con HTML5
categories:
---
{:enlaces: .enlaceGris}

Para probar canvas de HTML5 un automata celular con la [regla 110](http://en.wikipedia.org/wiki/Rule_110)
{:enlaces}

<div class="span-6 last prepend-1 append-17">
	<img src="http://f.cl.ly/items/2p3h363K0C3b2y1B0s1z/ss%202011-12-11_at_13.54.51.png">
	</img>
</div>

Y el [código](https://gist.github.com/1461541) :
{:enlaces}

	<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
		"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
	<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml">
	  <head>
		<meta http-equiv="content-type" content="text/html; charset=utf-8"/>
		<script type="text/javascript" charset="utf-8">
			function bloques () {
				var canvasContext = document.getElementById("canvas").getContext("2d");
				canvasContext.fillStyle = "rgba(200,200,200,0.0)";
				var dx=2;
				var a=new Array();
				var b=new Array();
				for (var i = 0; i < 200; i += 1) a[i]=Math.round(Math.random());
				for (var j = 0; j < a.length; j += 1)
					for (var i = 0; i < a.length; i += 1) {
						canvasContext.fillRect(i*dx,j*dx,dx-1,dx-1);
					};
				canvasContext.fillStyle = "rgba(200,200,200,0.9)";
				var alpha=0.9;
				for (var j = 0; j < a.length*3/2; j += 1){
					for (var i = 0; i < a.length; i += 1) b[i]=a[i];
					for (var i = 0; i < a.length; i += 1) {
						bj=b[(i+1)%a.length];
						bk=b[i];
						bl=b[(i+a.length-1)%a.length];
						a[i]=r110(bj,bk,bl);
						if (a[i]==1) {
							canvasContext.fillRect(i*dx,j*dx,dx-1,dx-1);
						}
					};
					alpha-=0.004;
					canvasContext.globalAlpha=alpha;
				}
			}
			function r110 (j,k,l) {
				// [rule 110](http://en.wikipedia.org/wiki/Rule_110)
				if( j==1 && k == 1 && l==1) return 0;
				if( j==1 && k == 1 && l==0) return 1;
				if( j==1 && k == 0 && l==1) return 1;
				if( j==1 && k == 0 && l==0) return 0;
				if( j==0 && k == 1 && l==1) return 1;
				if( j==0 && k == 1 && l==0) return 1;
				if( j==0 && k == 0 && l==1) return 1;
				if( j==0 && k == 0 && l==0) return 0;
			}
		</script>
	  </head>
	  <body onload="bloques()">
		  <canvas id="canvas" width="400" height="400">
		  </canvas>
	  </body>
	</html>

### Referencias
* [html5rocks](http://www.html5rocks.com/en/)  
{:enlaces}
