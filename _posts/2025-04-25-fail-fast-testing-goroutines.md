---
layout: post
comments: true
title : fail fast testing goroutines
categories:
---
# Fail-Fast Testing of Goroutines with WaitGroup and time.After

TL;DR
Unit-testing async code in Go? Drop in a mock that just closes a sync.WaitGroup, then wrap the wait in a select with time.After. If the goroutine never returns, the test fails quickly instead of hanging your CI.

Your function fires a goroutine — maybe it pushes to Kafka or hits an API. In a test you don’t care about the payload; you care that the goroutine actually ran. And if it deadlocks, you want to know fast.

```
package main

import (
    "sync"
    "testing"
    "time"
)

type Actor interface {
    Perform()
}

func Cinema(a Actor) {
    go a.Perform()
}

type mockActor struct{ wg *sync.WaitGroup }

func (m mockActor) Perform() {
    m.wg.Done()
}

func TestCinema(t *testing.T) {
    var wg sync.WaitGroup
    wg.Add(1)

    Cinema(mockActor{wg: &wg})

    done := make(chan struct{})
    go func() {
        wg.Wait()
        close(done)
    }()

    select {
    case <-done:
    case <-time.After(500 * time.Millisecond):
        t.Fatalf("timeout: Perform did not finish in 500 ms")
    }
}
```

What’s happening

Bump the WaitGroup, call the code under test.

The mock fires inside the goroutine and calls wg.Done()—proof the path was hit.

A helper goroutine converts wg.Wait() into a channel you can watch in a select.

If the deadline expires first, the test explodes instead of blocking your pipeline.

For quick unit tests, this WaitGroup-plus-timeout trick hits the sweet spot.
