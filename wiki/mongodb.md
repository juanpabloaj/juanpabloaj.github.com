---
layout: default
title : MongoDB
---
Mostrar las bases de datos

    show dbs

Usar db

    use dbName

Borrar db

    use dbName;
    db.dropDatabase();

### Colecciones

Mostrar todas las colecciones (tablas);

	show collections;

Borrar el contenido de una collection

	db.myCollection.remove()

Borrar una collection

	db.myCollection.drop()


### Documentos

Insertar documento (registro)

    db.myCollection.insert( <documento> );

Mostrar todos los documentos

	db.myCollection.find()

Actualizar documento

    db.myCollection.update({_id:"..."}, { $set: {'xyz':'123'}, })

Renombrar campo de un document

    db.myCollection.update({<query>}, { $rename : {'oldName': 'newName'}} )

Por defecto `update` son singulares, para hacer la actualización sobre todos los campos es necesario agregar `{multi:true}`

    db.myCollection.update({<query>}, { $rename : {'oldName': 'newName'}} , {multi:true})

Borrar campo de un documento

    db.myCollection.update({<query>}, { $unset: {'fieldName': 1}} , {multi:true})

Borrar documento

    db.myCollection.remove( <query> );

Mostrar los documentos sin un campo

    db.myCollection.find({'field':null})

Mostrar los que incluyen un campo

    db.myCollection.find({'field':{$exists:true}})

Mostrar un campo de varios documentos

    db.myCollection.find(<query>).forEach( function(x) { print (x.params) } );

Copiar documento, cambiando algunos campos

    db.myCollection.find( <query> ).forEach( function(x){ delete x._id; delete x.params; db.myCollection.insert(x) });

Mostrar los documentos distintos de un campo

    db.myCollection.distinct('field');

Contar todos los documentos que tengan `nombre:"test"` y fecha mayor que el `2011-05-10`

	db.collTest.count({nombre:"test",fecha:{$gt:"2011-05-10"}})

La última fecha

	db.collTest.find({},{fecha:1}).sort({fecha:-1}).limit(1)

Unir lat, lng en un registro

    db.orders.find().forEach(function(item) {
        loc = [item.lng, item.lat]
        item.loc = loc
        db.orders.save(item)
    })

### mongoimport
Generar un csv desde sql

	mysql> select columns INTO OUTFILE '/path/to/csv'
	   FIELDS TERMINATED BY ',' OPTIONALLY ENCLOSED BY '"'
	      LINES TERMINATED BY '\n' from table [where clause]

Importar el csv a mongodb, en -f se especifica el nombre de cada campo a importar

	./mongoimport --host host --port port -u user -p password -d database -c collection -type csv -f campo0,campo1,campo2 --drop csvFuente.csv

Cuando se importa se sobre escribe la collection

Reparar db

	db.repairDatabase()

## Referencias

* https://medium.com/@roberto.b/geolocation-csv-mongodb-and-compass-3918889c1474
