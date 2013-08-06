---
layout: default
title : R
---
### loops

    for ( i in 1:10){
        print(i)
    }

### Secuencias

    seq(-1,1,by=0.2)
    -1.0 -0.8 -0.6 -0.4 -0.2  0.0  0.2  0.4  0.6  0.8  1.0
    
### Strings

Concatenar

    > paste("hello", "world")
    [1] "hello world"
    > paste("hello", "world", sep="")
    [1] "helloworld"
    > paste("hello", "world", sep="-")
    [1] "hello-world"
