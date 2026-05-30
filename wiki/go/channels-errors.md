---
layout: wiki-note
title: go channels and errors
---

Worker pool example where each result carries its own error, allowing all errors to be collected without canceling the remaining jobs.

```go
package main

import (
	"errors"
	"fmt"
	"sync"
)

type Result struct {
	Worker int
	Job    int
	Value  int
	Err    error
}

func process(worker, job int) (int, error) {
	fmt.Printf("worker %d processing job %d\n", worker, job)
	if job%5 == 0 {
		return 0, fmt.Errorf("job %d: divisible by 5", job)
	}

	return job * job, nil
}

func main() {
	const numWorkers = 3

	jobs := make(chan int)
	results := make(chan Result)

	var wg sync.WaitGroup

	for w := range numWorkers {
		wg.Add(1)

		go func(id int) {
			defer wg.Done()

			for job := range jobs {
				val, err := process(id, job)
				results <- Result{Worker: id, Job: job, Value: val, Err: err}
			}
		}(w)
	}

	go func() {
		for j := range 10 {
			jobs <- j
		}
		close(jobs)
	}()

	go func() {
		wg.Wait()
		close(results)
	}()

	var errs []error
	for r := range results {
		if r.Err != nil {
			errs = append(errs, r.Err)
			continue
		}

		fmt.Printf("worker %d: job %2d -> %d\n", r.Worker, r.Job, r.Value)
	}

	if joined := errors.Join(errs...); joined != nil {
		fmt.Println("\nerrs:")
		fmt.Println(joined)
	}
}
```
