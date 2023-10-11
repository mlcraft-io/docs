---
id: local-development
title: Local Development
slug: /development/local-development
sidebar_label: Local Development
sidebar_position: 1
---


## Prerequisites

Before you can begin local development for Synmetrix, make sure you have the following prerequisites installed:


- [Docker](https://docs.docker.com/install)
- [Docker Compose](https://docs.docker.com/compose/install)
- [Python3](https://www.python.org/downloads/) (with [pip3](https://pip.pypa.io/en/stable/installing/))
- [Node.js 8.9+](https://nodejs.org/en/download/) with [Yarn](https://classic.yarnpkg.com/en/docs/install) installed

## Getting Started

1. Clone the Synmetrix repository:

   ```bash
   git clone https://github.com/mlcraft-io/mlcraft.git
   cd mlcraft
   ```

2. Run the initialization script:

   ```bash
   bash init.sh
   ```

## Starting the UI in Dev Mode

To start the UI in development mode, run the following command:

```bash
python3 cli.py ui
```

Then, open your web browser and visit [http://localhost:3000](http://localhost:3000).

## Managing Containers

To manually start the containers, use the following command:

```bash
python3 cli.py services up
```

To destroy all services (note that volumes will still be present), run:

```bash
python3 cli.py services destroy
```

For additional command-line options and information, you can check the available commands using:

```bash
python3 cli.py --help
```

You also need to know a [Synmetrix System Architecture](/architecture-and-design/system-architecture/index.md)