--- 
layout: default
title : MongoDB
---
Mostrar todas las colecciones

	> show collections;

Mostrar todos los registros

	> db.mycollection.find()

Borrar el contenido de una collection 

	> db.mycollection.remove()

Borrar una collection 

	> db.mycollection.drop()

Contar todos los registros que tengan `nombre:"test"` y fecha mayor que el `2011-05-10`

	> db.collTest.count({nombre:"test",fecha:{$gt:"2011-05-10"}})

La última fecha 

	> db.collTest.find({},{fecha:1}).sort({fecha:-1}).limit(1)

###mongoimport
Generar un csv desde sql 

	mysql> select columns INTO OUTFILE '/path/to/csv' 
	   FIELDS TERMINATED BY ',' OPTIONALLY ENCLOSED BY '"'
	      LINES TERMINATED BY '\n' from table [where clause]

importar el csv a mongodb, en -f se especifica el nombre de cada campo a importar 

	./mongoimport --host host --port port -u user -p password -d database -c collection -type csv -f campo0,campo1,campo2 --drop csvFuente.csv 

Cuando se importa se sobre escribe la collection 

Reparar db 

	db.repairDatabase()
