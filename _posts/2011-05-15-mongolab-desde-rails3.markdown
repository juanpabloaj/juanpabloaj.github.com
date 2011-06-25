---
layout: default
title : Tocando Mongolab desde rails3
categories:
- mongodb
- rails
- mongolab
---
{:enlaces: .enlaceGris } 

Si rails no está instalado

	$ gem install rails

Crear una aplicación 
	
	$ rails new touchMongoLab --skip-active-record
	$ cd touchMongoLab

Editar el archivo `Gemfile`

	# Edit this Gemfile to bundle your application's dependencies.
	require 'rubygems'
	require 'mongo'
	source 'http://gemcutter.org'

	gem 'rails', '3.1.0.beta1'
	gem "mongo_mapper"

Instalar las gemas necesarias

	$ bundle install

Crear el archivo `config/initializers/mongo.rb`

	MongoMapper.connection = Mongo::Connection.new('namexyz.mongolab.com', port )
	MongoMapper.database = "dbname"
	MongoMapper.database.authenticate('user','passwd')

	if defined?(PhusionPassenger)
	   PhusionPassenger.on_event(:starting_worker_process) do |forked|
		 MongoMapper.connection.connect_to_master if forked
	   end 
	end

Crear el modelo en el archivo `app/models/user.rb`

	class User
	  include MongoMapper::Document
	  key :name
	end

Crear un usuario desde la consola 

	$ rails console
	ruby-1.9.2-p180 :006 > user= User.new(:name => "hola mundo")
	 => #<User _id: BSON::ObjectId('4dd097464cfad1e8ab000003'), name: "hola mundo"> 
	ruby-1.9.2-p180 :006 > user.save()
	 => true 

Verificar la existencia del usuario en la db 

	> db.users.find()
	{ "_id" : ObjectId("4dd097604cfad1e8ab000004"), "name" : "hola mundo" }

### Referencias 
[mongoDB && Rails 3 - Getting Started](http://www.mongodb.org/display/DOCS/Rails+3+-+Getting+Started)  
[user.rb](https://github.com/banker/mongodb-rails3-sample/blob/master/app/models/user.rb)  
{:enlaces}
