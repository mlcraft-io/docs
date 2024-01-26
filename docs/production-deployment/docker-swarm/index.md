---
id: docker-swarm
title: Docker Swarm deployment guide
slug: /docker-swarm
sidebar_label: Docker Swarm
---
# Docker Swarm deployment guide

## Run containers locally (staging mode)

```
# init docker swarm mode
docker swarm init

# create overlay swarm network
./scripts/create-overlay-network.sh

# run local docker registry
./run-registry.sh

# build images and push
DOMAIN=localhost REGISTRY_HOST=127.0.0.1:50001 python3 cli.py --env stage services push

# up the stack
DOMAIN=localhost REGISTRY_HOST=127.0.0.1:50001 python3 cli.py --env stage services up synmetrix
```

Then run migrations:

```
./migrate.sh
```

### Destroy stack

```
python3 cli.py --env stage services destroy synmetrix
```

### Show logs

```
python3 cli.py --env stage services logs synmetrix_hasura
```

### Show stack tasks status

```
python3 cli.py --env stage services ps synmetrix
```
