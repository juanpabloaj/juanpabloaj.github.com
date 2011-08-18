--- 
layout: default
title : rvm
---
{:enlaces: .enlaceGris } 
[rvm site](https://rvm.beginrescueend.com/)  
{:enlaces} 


Instalar ruby 

	$ rvm install 1.9.2
	$ rvm 1.9.2
	$ ruby -v
		ruby 1.9.2p180
Instalar rails 

	$ rvm use --create 1.9.2@rails3
	$ gem install rails 
	$ rails --version
		Rails 3.0.9

Definir por defecto

	$ rvm 1.9.2rails3 --default

