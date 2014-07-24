---
layout: post
comments: true
title : Deployment a openshift con codeship
categories:
---

En este post se explica como usar el deployment de codeship para enviar el código fuente disponible en un repositorio git a una app de openshift.

Para los pasos siguientes se necesita disponer de :

* Una app en openshift y la dirección del repositorio git respectivo.
* Un proyecto creado en codeship.
* Un repositorio git alojado en bitbucket o github.

Para que codeship pueda subir los cambios a la app en openshift, guardar la llave publica del proyecto de codeship en un archivo de texto, la cual se encuentra disponible en

    Project settings > General > SSH public key

Y agregar la llave publica de codeship a la app de openshift

    rhc sshkey add codeship llave_ssh_publica.pub

Agregar al deployment script de codeship, ubicado en

    Project settings > deployment

Las lineas para clonar nuestro repositorio y hacer push a openshift con los cambios actuales

    git remote add openshift repositorio_de_openshift_app
    git push openshift master

Con esto, los cambios en la rama master serán enviados a la app de openshift.

Podría pensarse que es más simple enviar directamente desde nuestro repositorio local al de openshift, pero al pasar por codeship nos aseguramos que antes se pasar a producción siempre sean lanzados los test, y si alguno falla, no sean subidos los nuevos cambios. Además de quedar registrados todos lo mensajes generados por openshift.

