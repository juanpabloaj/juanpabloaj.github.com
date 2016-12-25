---
layout: default
title: C
---

## Macros

Mostrar un mensaje con el nombre de la función que hace la llamada

    #include <stdio.h>

    #define printff(...) do{\
      printf("%s: ", __FUNCTION__);\
      printf(__VA_ARGS__);\
    }while(0)

    void foo()
    {
        char str[] = "world";
        printff("hello %s\n", str);
    }

    int main()
    {
        foo();
        return 0;
    }

Retorna

    foo: hello world


### Referencias

[GNU Statements and declarations in Expressions][gnu-st-expr]

[gnu-st-expr]: https://gcc.gnu.org/onlinedocs/gcc/Statement-Exprs.html
