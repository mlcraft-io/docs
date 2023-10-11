---
id: quickstart-page
title: Quick Start
slug: /intro/quickstart
sidebar_label: Quick Start
sidebar_position: 2
---

### Prerequisites

Before you begin, make sure you have the following prerequisites installed:

- [Docker](https://docs.docker.com/install)
- [Docker Compose](https://docs.docker.com/compose/install)

### Step 1: Get the Docker Compose File

The [mlcraft-io/mlcraft/install-manifests](https://github.com/mlcraft-io/mlcraft/tree/main/install-manifests) repository contains all installation manifests required to deploy MLCraft anywhere. You can get the Docker Compose file from there by running one of the following commands:

```bash
# In a new directory, run one of the following commands
wget https://raw.githubusercontent.com/mlcraft-io/mlcraft/main/install-manifests/docker-compose/docker-compose.yml

# OR

curl https://raw.githubusercontent.com/mlcraft-io/mlcraft/main/install-manifests/docker-compose/docker-compose.yml -o docker-compose.yml
```

### Step 2: Run MLCraft

To run MLCraft along with a Postgres database to store its data, execute the following command:

```bash
$ docker-compose up -d
```

You can check if the containers are running by using the following command:

```bash
$ docker ps

CONTAINER ID IMAGE                 ... CREATED STATUS PORTS          ...
c8f342d086f3 mlcraft/mlcraft-stack ... 1m ago  Up 1m  80->8888/tcp ...
30ea14ddaa5e postgres:12           ... 1m ago  Up 1m  5432/tcp    
```

### Step 3: Try out MLCraft

You can now try out MLCraft:

- MLCraft itself will be available at `http://localhost/`
- GraphQL endpoint: `http://localhost/v1/graphql`
- Admin Console (Hasura Console) will be available at `http://localhost/console`



:::note

Make sure to check `HASURA_GRAPHQL_ADMIN_SECRET` in the `docker-compose` file. You'll need it to access the Admin Console.

:::



If you need assistance or want to schedule a 20-minute call with our team to help you get set up, please select a time directly [here](https://calendly.com/mlcraft-io/video-meeting).

