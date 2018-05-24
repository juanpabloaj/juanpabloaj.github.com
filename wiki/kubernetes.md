---
layout: default
title: kubernetes
---
Configuraciones de contexto se agregan en

    ~/.kube/config

Obtener contexto actual

    kubectl config current-context

Cambiar de contexto

    kubectl config use-context nuevo-contexto

Mostrar todo

    kubectl get all

Mostrar pods y su estado

    kubectl get pods

Mostrar log de un pod

    kubectl logs pod-name

Mostrar info del DNS de kubernetes

    kubectl get services kube-dns --namespace=kube-system

## Referencias

* https://meteatamel.wordpress.com/2018/04/24/istio-101-with-minikube/
* https://kubernetes.io/docs/concepts/services-networking/connect-applications-service/
