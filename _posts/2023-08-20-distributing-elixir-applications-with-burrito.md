---
layout: post
comments: true
title: Distributing Elixir applications with Burrito
categories:
---

In this post, I will demonstrate how to use Burrito to create a self-extracting archive for an Elixir project, to use it across varied environments (Windows, MacOS, or Linux). This post is a small complement to the previous post [Elixir and Ecto with SQLite3][elixir_sqlite], which was about how to use SQLite3 with Elixir and Ecto.

This test was made in a clean Debian virtual machine (aarch64), the objective is to create a binary for use in Ubuntu (x86_64) where Erlang and Elixir are not available and I don't have root permissions.

Burrito's dependencies include XZ, 7zip, and Zig (version 0.10.0). You can install XZ and 7zip with the package manager. Since Zig wasn't available in the package manager, you can obtain it from the [Zig's Getting Started page][zig_started], there, you'll find instructions on how to install it. Simply download the tar file, uncompress it, and you'll have Zig's binary available for use. Please note that, Burrito is compatible with Zig version 0.10.0. During my initial tests, I downloaded the latest version of Zig, but found that Burrito wasn't compatible with it.

You can read more about Burrito in [its repository][burrito].

I took the code from the [previous post][elixir_sqlite], I added Burrito to the dependencies

    # mix.exs
    defp deps do
    [
        {:burrito, github: "burrito-elixir/burrito"}
    ]
    end

From Burrito's documentation, I copied this function

    # mix.exs
    def releases do
    [
      data_collector: [
        steps: [:assemble, &Burrito.wrap/1],
        burrito: [
          targets: [
            linux: [os: :linux, cpu: :x86_64]
          ]
        ]
      ]
    ]
    end

In `mix.exs`, I added this line to the project function

    # mix.exs
    def project do
    [
      ...
      releases: releases()
    ]
    end

These are all the modifications related to Burrito. However, in my scenario, I needed to migrate the database before starting the application. In the previous post, I had done the migrations manually as a release command

    $ DATABASE_PATH=/tmp/data_collector_prod.db _build/prod/rel/data_collector/bin/data_collector eval "DataCollector.Release.migrate"

In this case, I preferred to call the migrations automatically, so I called the migration function before starting the Supervisor (I am not sure if it is the best way to call the migrations automatically at the beginning).

    #lib/data_collector/application.ex
    @impl true
    def start(_type, _args) do
        DataCollector.Release.migrate()

        children = [
        ...

I called Burrito with the release command

    $ MIX_ENV=prod mix release

Burrito created the directory `burrito_out` with the binary called `data_collector_linux` inside

    $ ls burrito_out/
    data_collector_linux

Using ssh, I moved the binary to the other machine with Ubuntu. There, I executed the binary, the migrations were applied, and the application started.

    $ DATABASE_PATH=/tmp/data_collector_prod.db ./data_collector_linux
    00:50:55.830 [info] == Running 20230819231423 DataCollector.Repo.Migrations.CreateInstruments.change/0 forward
    00:50:55.839 [info] create table instruments
    00:50:55.844 [info] == Migrated 20230819231423 in 0.0s

After a few seconds, the database had values

    $ sqlite3 /tmp/data_collector_prod.db
    SQLite version 3.39.3 2022-09-05 11:02:23
    sqlite> select * from instruments;
    1|instrument_374|7|2023-08-21T00:50:56|2023-08-21T00:50:56

As a side note, while writing this post, I recalled a somewhat related article I wrote in Spanish 9 years ago on [how to create a self-contained Python executable][python_pex]. How time flies!

I hope you find this post useful. If you have any suggestions or feedback on the post, please feel free to reach out to me.

### References

-   [Burrito repository][burrito]
-   [Elixir and Ecto with SQLite3][elixir_sqlite]
-   [Zig - Getting Started][zig_started]
-   [Empaquetando y distribuyendo código python con pex][python_pex]

[burrito]: https://github.com/burrito-elixir/burrito
[elixir_sqlite]: https://juanpabloaj.com/2023/08/19/elixir-and-sqlite3/
[python_pex]: https://juanpabloaj.com/2014/09/19/empaquetando-y-distribuyendo-con-pex/
[zig_started]: https://ziglang.org/learn/getting-started/
