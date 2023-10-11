---
id: installation-and-setup
title: Installation and Setup
slug: /usage/installation-and-setup
sidebar_label: Installation and Setup
---

## Installation and Setup

Welcome to Synmetrix! This guide will walk you through the installation and setup process to get you up and running with Synmetrix, our powerful data analytics platform.

### Step 1: Clone the Repository

Start by cloning the Synmetrix repository from GitHub:

```bash
git clone https://github.com/mlcraft-io/mlcraft.git
```

This will create a local copy of the Synmetrix source code on your machine.

### Step 2: Install Dependencies

Synmetrix relies on several dependencies and packages to function properly. It's essential to install these dependencies to ensure a smooth installation process.

- [Docker](https://docs.docker.com/install)
- [Docker Compose](https://docs.docker.com/compose/install)
- [Python3](https://www.python.org/downloads/) (with [pip3](https://pip.pypa.io/en/stable/installing/))
- [Node.js 8.9+](https://nodejs.org/en/download/) with [Yarn](https://classic.yarnpkg.com/en/docs/install) installed

### Step 3: Configuration

Now that you have the repository and dependencies in place, it's time to configure Synmetrix. Configuration involves specifying settings, credentials, and other parameters to tailor Synmetrix to your needs. The exact configuration steps may vary based on your use case, so consult our [Local Development Guide](/docs/development/local-development/index.md) and [Quick Start Guide](docs/quickstart/index.mdx) for detailed info.

### Step 4: Start the Server

With the repository cloned, dependencies installed, and configuration set, you're ready to start the Synmetrix server. The server is the heart of the platform, responsible for data processing and analytics. The exact command to start the server can be found in our [Server Startup Guide](/docs/production-deployment/index.md).

### Step 5: Access the Web Interface

Once the Synmetrix server is up and running, you can access the web interface through your preferred web browser. Open your browser and navigate to the following URL:

```text
http://localhost:8080
```

This will take you to the Synmetrix web interface, where you can interact with the platform, create data analytics pipelines, and explore your data.

:::Congratulations!
You've successfully installed and set up Synmetrix. Now you can unleash the power of data analytics and gain valuable insights from your datasets.
:::


If you need assistance or want to schedule a 30-minute call with our team to help you get set up, please select a time directly [here](https://cal.com/synmetrix/30min).