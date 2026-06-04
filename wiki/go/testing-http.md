---
layout: wiki-note
title: go testing http
---

## Test de cliente HTTP

Usar `httptest.NewServer` para probar rutas, status codes y decode sin llamar
servicios externos reales.

```go
func TestGetRecord(t *testing.T) {
	server := httptest.NewServer(http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		if r.URL.Path != "/records/1" {
			t.Fatalf("unexpected URL path: %s", r.URL.Path)
		}

		w.WriteHeader(http.StatusOK)
		w.Write([]byte(`{"id":1,"label":"example"}`))
	}))
	defer server.Close()

	client := NewClient(server.URL, server.Client())

	got, err := client.GetRecord(context.Background(), 1)
	if err != nil {
		t.Fatalf("unexpected error: %v", err)
	}

	want := &Record{ID: 1, Label: "example"}
	if diff := cmp.Diff(want, got); diff != "" {
		t.Errorf("unexpected record (-want +got):\n%s", diff)
	}
}
```

## Test de status no-2xx

Probar que un status de error se convierta en error de dominio o adapter.

```go
func TestGetRecordUnexpectedStatusCode(t *testing.T) {
	server := httptest.NewServer(http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		w.WriteHeader(http.StatusInternalServerError)
	}))
	defer server.Close()

	client := NewClient(server.URL, server.Client())

	got, err := client.GetRecord(context.Background(), 1)
	if !errors.Is(err, ErrUnexpectedStatusCode) {
		t.Fatalf("expected status code error, got: %v", err)
	}
	if got != nil {
		t.Fatalf("expected nil response, got: %v", got)
	}
}
```

## Test de timeout

Preferir mocks para tests rápidos y deterministas.

```go
type timeoutHTTPClient struct{}

func (c *timeoutHTTPClient) Do(req *http.Request) (*http.Response, error) {
	return nil, context.DeadlineExceeded
}
```

```go
func TestGetRecordTimeout(t *testing.T) {
	client := NewClient("https://example.com", &timeoutHTTPClient{})

	got, err := client.GetRecord(context.Background(), 1)
	if !errors.Is(err, context.DeadlineExceeded) {
		t.Fatalf("expected timeout, got: %v", err)
	}
	if got != nil {
		t.Fatalf("expected nil response, got: %v", got)
	}
}
```

Un test con `time.Sleep` sirve para probar integración real del timeout, pero
normalmente debe quedar separado, lento o skipeado.

## Test de handler

Usar `httptest.NewRecorder` y mocks de la capa de aplicación.

```go
func TestGetRecordHandler(t *testing.T) {
	service := &mockService{
		Record: &Record{ID: 1, Label: "example"},
	}
	handler := NewHandler(service)

	req := httptest.NewRequest(http.MethodGet, "/records/1", nil)
	req.SetPathValue("id", "1")

	rr := httptest.NewRecorder()

	http.HandlerFunc(handler.GetRecord).ServeHTTP(rr, req)

	if rr.Code != http.StatusOK {
		t.Fatalf("wrong status code: got %d", rr.Code)
	}

	var got Record
	if err := json.NewDecoder(rr.Body).Decode(&got); err != nil {
		t.Fatalf("error decoding response: %v", err)
	}
}
```

## Checklist

- No llamar APIs reales en unit tests.
- `httptest.NewServer` para adapters HTTP.
- `httptest.NewRecorder` para handlers.
- Validar la ruta recibida por el server de test.
- Probar happy path, status no-2xx y decode inválido si aplica.
- Probar timeouts con mock de `Do`.
- Usar `errors.Is` para errores wrapped.
- Usar `go-cmp` para comparar structs.
