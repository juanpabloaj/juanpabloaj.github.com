---
layout: post
comments: true
title: Elixir and Ecto with SQLite3
categories:
---

There have been instances where I required data persistence with an Elixir application although I don't want to start a PostgreSQL instance. For small applications or tasks, SQLite3 sounds like a good alternative, especially if you are running the app on a small machine.

In this post, I'm going to show how to use Elixir and Ecto with SQLite3. This is strongly based on [an article from fly.io][fly_sqlite] although that article is oriented to Phoenix, I'm going to focus on creating a small Elixir project. The project will have a `GenServer` that writes a random value every second into the SQLite database.

I will be using Elixir version 1.5.2 and Erlang version 26.0.2.

First, create the project's directory with a supervisor.

    $ mix new data_collector --sup

Add `ecto_sqlite3` to `mix.exs`, you can find more details in its [documentation][ecto_sqlite].

       defp deps do
     [
      {:ecto_sqlite3, "~> 0.10"}
        ...
     ]

Fetch the dependencies

    $ mix deps.get

Create a `lib/data_collector/ecto.ex` with

    defmodule DataCollector.Repo do
        use Ecto.Repo, otp_app: :data_collector, adapter: Ecto.Adapters.SQLite3
    end

Create a `config/config.exs` with

    import Config

    config :data_collector,
      ecto_repos: [DataCollector.Repo]

    config :data_collector, DataCollector.Repo,
      database: Path.expand("../data_collector_#{Mix.env()}.db", Path.dirname(__ENV__.file)),
      pool_size: 5

Create a schema `lib/data_collector/instrument.ex`

    defmodule DataCollector.Instrument do
      use Ecto.Schema
      import Ecto.Changeset

      schema "instruments" do
        field(:name, :string)
        field(:measurement, :integer)

        timestamps()
      end

      def changeset(instrument, params \\ %{}) do
        instrument
        |> cast(params, [:name, :measurement])
        |> validate_required([:name, :measurement])
      end
    end

And a migration

    $ mix ecto.gen.migration create_instruments

    # priv/repo/migrations/2023MMDD_create_instruments.exs
    defmodule DataCollector.Repo.Migrations.CreateInstruments do
      use Ecto.Migration

      def change do
        create table(:instruments) do
          add(:name, :string)
          add(:measurement, :integer)

          timestamps()
        end
      end
    end

Create the database and apply the migrations

    $ mix ecto.create
    $ mix ecto.migrate

After that, you should see a file called `data_collector_dev.db`, If you open it with `sqlite3`, you should see the table `instruments`

    $ sqlite3 data_collector_dev.db
    sqlite> .tables
    instruments         schema_migrations
    sqlite> .schema instruments
    CREATE TABLE IF NOT EXISTS "instruments" ("id" INTEGER PRIMARY KEY AUTOINCREMENT, "name" TEXT, "measurement" INTEGER, "inserted_at" TEXT NOT NULL, "updated_at" TEXT NOT NULL);

Create a `GenServer` to insert data every second into the database

    # lib/data_collector/worker.ex
    defmodule DataCollector.Worker do
      use GenServer

      alias DataCollector.{Instrument, Repo}

      def start_link(_opts) do
        GenServer.start_link(__MODULE__, nil, name: __MODULE__)
      end

      def init(_opts) do
        Process.send_after(self(), :work, 1000)
        {:ok, nil}
      end

      def handle_info(:work, state) do
        data = %{
          name: "instrument_#{Enum.random(1..1000)}",
          measurement: Enum.random(1..100)
        }

        %Instrument{}
        |> Instrument.changeset(data)
        |> Repo.insert()

        Process.send_after(self(), :work, 1000)
        {:noreply, state}
      end
    end

Add Repo and `GenServer` to `lib/data_collector/application.ex`

    children = [
      {DataCollector.Repo, []},
      DataCollector.Worker
    ]

Start the processes, in the logs you should see the inserts into the database

    $ mix run --no-halt

If you check the database, you should see the values inserted by the `GenServer`.

    $ sqlite3 data_collector_dev.db
    sqlite> select * from instruments limit 2;
    1|instrument_547|30|2023-08-19T23:43:07|2023-08-19T23:43:07
    2|instrument_334|86|2023-08-19T23:43:08|2023-08-19T23:43:08

At this point, the tutorial could be complete although I will add how to create the release, if you are not interested in how to create a release you can stop here.

Now, let's modify the content of config/config.exs to the following.

    # config/config.exs
    import Config

    # Configures Elixir's Logger
    config :logger, :console,
      format: "$time $metadata[$level] $message\n",
      metadata: [:request_id]

    config :data_collector,
      ecto_repos: [DataCollector.Repo]

    import_config "#{config_env()}.exs"

And add these three new config files:

    # config/dev.exs
    import Config

    config :data_collector, DataCollector.Repo,
      database: Path.expand("../data_collector_dev.db", Path.dirname(__ENV__.file)),
      pool_size: 5


    # config/prod.exs
    import Config

    # Do not print debug messages in production
    config :logger, level: :info


    # config/runtime.exs
    import Config

    if config_env() == :prod do
      database_path =
        System.get_env("DATABASE_PATH") ||
          raise """
          DATABASE_PATH environment variable is missing.
          For example: /data/name/name.db
          """

      config :data_collector, DataCollector.Repo,
        database: database_path,
        pool_size: String.to_integer(System.get_env("POOL_SIZE") || "10")
    end

Create a release file `lib/data_collector/release.ex` with functions related to the migration, you can find more details in this [fly.io post][fly_migration].

    defmodule DataCollector.Release do
      @app :data_collector

      def migrate do
        for repo <- repos() do
          {:ok, _, _} =
            Ecto.Migrator.with_repo(
              repo,
              &Ecto.Migrator.run(&1, :up, all: true)
            )
        end
      end

      def rollback(repo, version) do
        {:ok, _, _} =
          Ecto.Migrator.with_repo(
            repo,
            &Ecto.Migrator.run(&1, :down, to: version)
          )
      end

      defp repos do
        Application.load(@app)
        Application.fetch_env!(@app, :ecto_repos)
      end
    end

Now you can create the release, apply the migration over it, and start it.

    $ MIX_ENV=prod mix release
    $ DATABASE_PATH=/tmp/data_collector_prod.db _build/prod/rel/data_collector/bin/data_collector eval "DataCollector.Release.migrate"

    $ DATABASE_PATH=/tmp/data_collector_prod.db _build/prod/rel/data_collector/bin/data_collector start

If you check the release's database, you should see the values inserted by the `GenServer`.

    $ sqlite3 /tmp/data_collector_prod.db
    sqlite> select * from instruments limit 1;
    1|instrument_751|90|2023-08-20T00:58:26|2023-08-20T00:58:26

That concludes the tutorial.

I hope this post can be useful for you. If you have any suggestions or feedback on the post, please feel free to reach out to me.

### References

-   [Fly.io Advanced Guides for SQLite3][fly_sqlite]
-   [Ecto SQLite3 on GitHub][ecto_sqlite]
-   [How to Migrate Mix Release Projects on Fly.io][fly_migration]
-   [Elixir Getting Started with Mix OTP, Config and Releases][elixir_mix_otp]
-   [Phoenix Ecto Migrations and Custom Commands][phoenix_ecto]

[fly_sqlite]: https://fly.io/docs/elixir/advanced-guides/sqlite3/
[ecto_sqlite]: https://github.com/elixir-sqlite/ecto_sqlite3
[fly_migration]: https://fly.io/phoenix-files/how-to-migrate-mix-release-projects/
[elixir_mix_otp]: https://elixir-lang.org/getting-started/mix-otp/config-and-releases.html
[phoenix_ecto]: https://hexdocs.pm/phoenix/releases.html#ecto-migrations-and-custom-commands
