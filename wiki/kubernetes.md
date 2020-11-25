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

Obtener yaml de un pod

    kubectl get pod pod-name-9d85d7c9-2dljw -o yaml

## Proxy

Acceder desde otra máquina

    kubectl proxy --address='0.0.0.0' --accept-hosts='.*'

## Ingress

Instalar ingress-nginx en GKE

    kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/master/deploy/static/provider/cloud-generic.yaml

## Service accounts

Obtener las service accounts

    kubectl get serviceaccounts

Obtener las services accounts de un namespace

    kubectl get -n namespace_name serviceaccounts

Obtener la service account de un namespace

    kubectl get -n namespace serviceaccounts/service-account-name -o yaml

## Referencias


* https://meteatamel.wordpress.com/2018/04/24/istio-101-with-minikube/
* https://kubernetes.io/docs/concepts/services-networking/connect-applications-service/
* https://matthewpalmer.net/kubernetes-app-developer/articles/kubernetes-ingress-guide-nginx-example.html
* https://kubernetes.github.io/ingress-nginx/deploy
* https://kubernetes.io/docs/tasks/configure-pod-container/configure-service-account/
