---
layout: default
title: kubernetes
---

## Google cloud

Cambiar proyecto

    gcloud config set project project_name

Obtener credenciales del cluster

    gcloud container clusters get-credentials cluster_name --zone zone_name

## Configuraciones


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

Utilizar un curl en el cluster

    kubectl run curl-tmp --image=radial/busyboxplus:curl -i --tty --rm

## Proxy

Acceder desde otra máquina

    kubectl proxy --address='0.0.0.0' --accept-hosts='.*'

## Port-forward

Activar port forward en local

    kubectl -n namespace_name port-forward service/service_name 8080:80

Con se puede llamar al servicio con

    curl 0.0.0.0:8080/metrics

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

## configmap

Crear configmap desde directorio

    kubectl -n namespaceName create configmap configNameZZ --from-file=zzDirectoryName

## Referencias


* https://meteatamel.wordpress.com/2018/04/24/istio-101-with-minikube/
* https://kubernetes.io/docs/concepts/services-networking/connect-applications-service/
* https://matthewpalmer.net/kubernetes-app-developer/articles/kubernetes-ingress-guide-nginx-example.html
* https://kubernetes.github.io/ingress-nginx/deploy
* https://kubernetes.io/docs/tasks/configure-pod-container/configure-service-account/
* https://kubernetes.io/docs/tasks/configure-pod-container/configure-pod-configmap
