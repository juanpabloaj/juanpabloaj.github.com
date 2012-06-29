---
layout: post
comments: true
title : Google script filtro de tiempo para Gmail
categories:
---

Hace algunos días que buscaba algún filtro para Gmail que se activara a cierta
hora.

Me explico, todos los días me llegan algunas notificaciones por mail, las
cuales me gusta tener presente durante el día, pero al final del mismo ya no
tienen importancia, por lo que buscaba alguna forma para que se archivaran
automáticamente todos los días a cierta hora. Un filtro común no era adecuado,
ya que al llegar la notificación se archivaría inmediatamente.

Cuando estaba creando un documento en google docs, vi que estaba la opción de
crear scripts, revise un poco la documentación, y realizar lo que necesitaba no
fue muy complejo.

Desde google docs se crea un script

    function archiveNotification() {
      var threads = GmailApp.getInboxThreads();

      for ( var i = 0 ; i < threads.length; i++){
        var subject = threads[i].getFirstMessageSubject();

        if ( subject == "Notification Subject" ){
          //Logger.log(subject);
          GmailApp.moveThreadToArchive(threads[i])
        }

      }
    }

Básicamente, consiste en revisar la bandeja de entrada y buscar el thread que
tenga el subject de las notificaciones.

Al ejecutarlo la primera vez es necesario conceder algunas autorizaciones para
que el script pueda tener acceso a Gmail.

El la zona superior del editor, en Resources, se puede agregar el trigger de
tiempo, entre otros.

De la misma forma se puede interactuar con varios de los servicios de Google.

## Referencias

* [Script source - gist ](https://gist.github.com/3015108)  
* [Google script - Building Your First Script](https://developers.google.com/apps-script/your_first_script)  
* [Google script - Class GmailApp](https://developers.google.com/apps-script/class_gmailapp)  
* [Google script - Understanding Triggers](https://developers.google.com/apps-script/understanding_triggers)  
