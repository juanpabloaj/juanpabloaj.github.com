---
layout: wiki-note
title: go
---

Después de una primera instalación de Go, es recomendable agregar algunas herramientas.
    go install golang.org/x/tools/gopls@latest
    go install golang.org/x/tools/cmd/goimports@latest

Si se está usando `vim-go`, en neovim usar el comando

    :GoInstallBinaries

Agregar GOPATH al `~/.bash_profile`

    export GOPATH=$(go env GOPATH)
    export PATH="$GOPATH/bin:$PATH"

Instalar paquetes binarios, ejemplo con mockgen

Go version < 1.16

    GO111MODULE=on go get github.com/golang/mock/mockgen@v1.6.0

Go 1.16+

    go install github.com/golang/mock/mockgen@v1.6.0

### pprof

Recolectar profile del heap y visualizar

    curl -sK -v http://localhost:6060/debug/pprof/heap > /tmp/heap.out
    go tool pprof -http 0.0.0.0:8080 heap.out

### mod

Borrar modulos del cache local

    go clean --modcache

Reemplazar dependencies con un fork o similar.
Repo `someone` version `1.2.3` con repo `you` en commit `aabbcc` (este hash puede ser una rama).

    go mod edit -replace="github.com/someone/repo@v1.2.3=github.com/you/repo@aabbcc"

Después de haber hecho `go mod init` y haber agregado dependencies, crear un directorio vendor con una copia local de las dependencies.

    go mod vendor

Utilizar el directorio vendor al hacer el build

    go mod build -mod=vendor

Al tener el directorio vendor las dependencies ser agregadas al repo para disminuir los tiempos de pipelines al no tener que descargar las dependencies cada vez.

Algo en contra de esta método es que el tamaño del repositorio incrementa, solo depender de logrus agrega 7.8MB al repo.

### Referencias

-   https://jvns.ca/blog/2017/09/24/profiling-go-with-pprof/
-   https://gowalker.org/net/http/pprof
-   https://godoc.org/golang.org/x/tools/cmd/goimports
-   https://stackoverflow.com/questions/14323872/using-forked-package-import-in-go
