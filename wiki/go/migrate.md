---
layout: wiki-note
title: golang-migrate
---
Create migration file

    migrate create -ext sql -dir migrations -seq migration_file_name


Load .env and apply migrations

    source .env && migrate -path ./migrations -database $DATABASE_URL up

### References

- https://github.com/golang-migrate/migrate
