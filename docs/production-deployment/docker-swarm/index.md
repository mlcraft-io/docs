---
id: docker-swarm
title: Docker Swarm deployment guide
slug: /docker-swarm
sidebar_label: Docker Swarm
description: Docker Swarm deployment guide
sidebar_position: 2
---
# Docker Swarm deployment guide

For deploying Synmetrix in a production environment, Docker Swarm is recommended. This guide will assist you in setting up Synmetrix on a Docker Swarm cluster.

Synmetrix provides a CLI tool for managing services and stacks, which can be utilized for deploying Synmetrix on a Docker Swarm cluster.

### Getting Started

Clone the Synmetrix repository:

```bash
git clone https://github.com/mlcraft-io/mlcraft.git
cd mlcraft
```

## Start Synmetrix on Docker Swarm

Go to the Synmetrix project directory and run the following commands:

### Step 1 - Run Docker Registry

```bash
./scripts/run-registry.sh
```

### Step 2 - Run Synmetrix services

```bash
DOMAIN=localhost REGISTRY_HOST=127.0.0.1:50001 ./cli.sh swarm up --init --build --env stage synmetrix 
```

Where `DOMAIN` is the domain name of your Synmetrix instance and `REGISTRY_HOST` is the host of the Docker registry.

### Step 3 - Run migrations

```bash
./migrate.sh
```

---

### Destroy stack

```bash
./cli.sh swarm destroy synmetrix 
```

### Show logs

```bash
./cli.sh swarm logs synmetrix_hasura
```

### Show stack tasks status

```bash
./cli.sh swarm ps synmetrix
```

---

For more information about the CLI tool, run the following command:

```bash
./cli.sh swarm --help
```
