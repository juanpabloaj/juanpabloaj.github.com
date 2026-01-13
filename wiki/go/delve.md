---
layout: wiki-note
title: go
---
# Guía de Debug con Delve en Go

## ¿Qué es Delve?

Delve es el debugger oficial de Go que permite ejecutar código paso a paso, inspeccionar variables y entender el flujo de ejecución de tus programas.

## Instalación

```bash
go install github.com/go-delve/delve/cmd/dlv@latest
```

Verifica la instalación:

```bash
dlv version
```

## Estructura de Archivos de Ejemplo

### main.go

```go
package main

import "fmt"

func main() {
    numbers := []int{1, 2, 3, 4, 5}
    sum := calculateSum(numbers)
    fmt.Printf("The sum of the array is: %d\n", sum)
}

func calculateSum(arr []int) int {
    sum := 0
    for _, num := range arr {
        sum += num
    }
    return sum
}
```

### main_test.go

```go
package main

import "testing"

func TestCalculateSum(t *testing.T) {
    numbers := []int{1, 2, 3, 4, 5}
    expected := 15
    result := calculateSum(numbers)

    if result != expected {
        t.Errorf("Expected %d but got %d", expected, result)
    }
}

func TestCalculateSumEmpty(t *testing.T) {
    numbers := []int{}
    expected := 0
    result := calculateSum(numbers)

    if result != expected {
        t.Errorf("Expected %d but got %d", expected, result)
    }
}

func TestCalculateSumNegative(t *testing.T) {
    numbers := []int{-1, -2, -3}
    expected := -6
    result := calculateSum(numbers)

    if result != expected {
        t.Errorf("Expected %d but got %d", expected, result)
    }
}
```

## Comandos para Iniciar Debug

### Debug de todos los tests

```bash
dlv test
```

### Debug de un test específico

```bash
dlv test -- -test.run TestCalculateSum
```

### Debug con expresión regular

```bash
dlv test -- -test.run "TestCalculate.*"
```

## Comandos Principales de Delve

### Navegación y Control de Ejecución

| Comando    | Atajo  | Descripción                                         |
| ---------- | ------ | --------------------------------------------------- |
| `continue` | `c`    | Continuar ejecución hasta el siguiente breakpoint   |
| `next`     | `n`    | Ejecutar la siguiente línea (no entra en funciones) |
| `step`     | `s`    | Ejecutar la siguiente línea (entra en funciones)    |
| `stepout`  | `so`   | Salir de la función actual                          |
| `restart`  | `r`    | Reiniciar el proceso de debug                       |
| `exit`     | `quit` | Salir de Delve                                      |

### Breakpoints

| Comando                      | Descripción                    | Ejemplo               |
| ---------------------------- | ------------------------------ | --------------------- |
| `break` o `b`                | Crear breakpoint               | `break calculateSum`  |
| `break <archivo>:<línea>`    | Breakpoint en línea específica | `break main.go:14`    |
| `breakpoints` o `bp`         | Listar todos los breakpoints   | `breakpoints`         |
| `clear <id>`                 | Eliminar breakpoint            | `clear 1`             |
| `clearall`                   | Eliminar todos los breakpoints | `clearall`            |
| `condition <id> <expresión>` | Breakpoint condicional         | `condition 1 sum > 5` |

### Inspección de Variables

| Comando       | Descripción                         | Ejemplo        |
| ------------- | ----------------------------------- | -------------- |
| `print` o `p` | Imprimir valor de variable          | `print sum`    |
| `locals`      | Mostrar todas las variables locales | `locals`       |
| `args`        | Mostrar argumentos de la función    | `args`         |
| `vars`        | Mostrar variables globales          | `vars`         |
| `whatis`      | Mostrar tipo de variable            | `whatis arr`   |
| `set`         | Cambiar valor de variable           | `set sum = 10` |

### Visualización de Código

| Comando          | Atajo | Descripción                                    |
| ---------------- | ----- | ---------------------------------------------- |
| `list`           | `l`   | Mostrar código alrededor de la posición actual |
| `list <función>` |       | Ver código de una función específica           |
| `frame`          |       | Mostrar frame actual                           |
| `goroutines`     |       | Listar todas las goroutines                    |
| `goroutine <id>` |       | Cambiar a una goroutine específica             |

## Ejemplo Paso a Paso: Debugeando TestCalculateSum

### 1. Iniciar debug del test

```bash
dlv test -- -test.run TestCalculateSum
```

### 2. Poner breakpoint en la función a testear

```
(dlv) break calculateSum
Breakpoint 1 set at 0x1023b1aa0 for main.calculateSum() ./main.go:11
```

### 3. Continuar hasta el breakpoint

```
(dlv) continue
> [Breakpoint 1] main.calculateSum() ./main.go:11
```

### 4. Avanzar dentro de la función

```
(dlv) next
> main.calculateSum() ./main.go:12

(dlv) next
> main.calculateSum() ./main.go:13
```

### 5. Ver los argumentos de la función

```
(dlv) args
arr = []int len: 5, cap: 5, [1,2,3,4,5]
```

### 6. Ver las variables locales

```
(dlv) locals
sum = 0
```

### 7. Entrar en el loop y ver cada iteración

```
(dlv) next
> main.calculateSum() ./main.go:14

(dlv) locals
sum = 0
num = 1

(dlv) next
> main.calculateSum() ./main.go:13

(dlv) print sum
1

(dlv) next
> main.calculateSum() ./main.go:14

(dlv) locals
sum = 1
num = 2
```

### 8. Ver el código alrededor

```
(dlv) list
> main.calculateSum() ./main.go:14
     9:	}
    10:
    11:	func calculateSum(arr []int) int {
    12:		sum := 0
    13:		for _, num := range arr {
=>  14:			sum += num
    15:		}
    16:		return sum
    17:	}
```

## Técnicas Avanzadas

### Breakpoint Condicional

Detener solo cuando se cumple una condición:

```
(dlv) break main.go:14
(dlv) condition 1 sum > 5
(dlv) continue
```

El programa se detendrá en la línea 14 solo cuando `sum` sea mayor que 5.

### Breakpoint en Línea Específica del Test

```
(dlv) break main_test.go:7
(dlv) continue
```

### Cambiar Valor de Variable Durante Debug

```
(dlv) print sum
3

(dlv) set sum = 100

(dlv) print sum
100
```

### Ver Stack Trace

```
(dlv) stack
0  0x00000000001023b1aa0 in main.calculateSum
   at ./main.go:14
1  0x00000000001023b1b20 in main.TestCalculateSum
   at ./main_test.go:7
```

## Tips y Buenas Prácticas

1. **Usa breakpoints estratégicos**: Ponlos en puntos clave como inicios de funciones, dentro de loops o condiciones.

2. **Combina `locals` y `args`**: Para tener una vista completa del estado de la función.

3. **Usa `list` frecuentemente**: Para no perder el contexto de dónde estás en el código.

4. **Breakpoints condicionales**: Son muy útiles para loops largos donde solo te interesa un caso específico.

5. **`step` vs `next`**:
    - Usa `next` para pasar por encima de llamadas a funciones
    - Usa `step` cuando quieres entrar en el detalle de una función

6. **Reinicia en lugar de salir**: Usa `restart` en lugar de salir y volver a entrar si quieres ejecutar de nuevo.

## Atajos de Teclado Comunes

- `Enter`: Repetir el último comando
- `Ctrl+C`: Pausar ejecución (útil si el programa está en un loop infinito)
- `Ctrl+D`: Salir de Delve

## Recursos Adicionales

- [Documentación oficial de Delve](https://github.com/go-delve/delve)
- [Comandos de Delve](https://github.com/go-delve/delve/tree/master/Documentation/cli)
- [Tutorial interactivo](https://github.com/go-delve/delve/blob/master/Documentation/cli/getting_started.md)

## Resumen de Workflow Típico

```bash
# 1. Iniciar debug
dlv test -- -test.run TestCalculateSum

# 2. Poner breakpoint
(dlv) break calculateSum

# 3. Ejecutar hasta el breakpoint
(dlv) continue

# 4. Inspeccionar estado
(dlv) args
(dlv) locals

# 5. Avanzar paso a paso
(dlv) next
(dlv) print sum

# 6. Repetir hasta encontrar el problema
# 7. Salir
(dlv) exit
```
