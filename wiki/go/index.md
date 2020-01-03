---
layout: default
title : go
---

Instalar goimports

    go get golang.org/x/tools/cmd/goimports

### pprof

Recolectar profile del heap y visualizar

    curl -sK -v http://localhost:6060/debug/pprof/heap > /tmp/heap.out
    go tool pprof -http 0.0.0.0:8080 heap.out


### Referencias

* https://jvns.ca/blog/2017/09/24/profiling-go-with-pprof/
* https://gowalker.org/net/http/pprof
* https://godoc.org/golang.org/x/tools/cmd/goimports
