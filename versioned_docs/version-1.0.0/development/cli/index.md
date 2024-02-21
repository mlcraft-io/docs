---
id: cli
title: Console Interface (CLI)
slug: /development/cli
sidebar_label: Console Interface (CLI)
sidebar_position: 2
description: Console Interface (CLI) provides a command-line interface to interact with the platform.
---

# Synmetrix CLI Overview

The Synmetrix Command Line Interface (CLI) is a powerful tool designed to streamline the management of Synmetrix stack containers. It provides developers and administrators with a suite of commands to efficiently control the lifecycle and operations of containers and services within the Synmetrix environment. From starting and stopping containers to pushing Docker images and running tests, the Synmetrix CLI enhances productivity and simplifies the complexity of managing containerized applications.

## Key Features

- **Container Management**: Easily start, stop, restart, and destroy containers to manage your application's environment seamlessly.
- **Log Viewing**: Access detailed logs for containers, helping you troubleshoot and monitor application behavior in real-time.
- **Compose Management**: Utilize Docker Compose functionalities directly from the CLI to manage multi-container setups.
- **Hasura Commands**: Execute Hasura-specific commands, enabling efficient management of the Hasura GraphQL engine services.
- **Testing**: Run integration and unit tests directly from the CLI, facilitating continuous testing practices.

## Getting Started

To begin using the Synmetrix CLI, navigate to your project's root directory and execute the `./cli.sh` script. This script acts as the entry point for running CLI commands, providing you with immediate access to all the functionalities offered by Synmetrix.

### Common Commands

- **`smcli compose up`**: Launches the Docker Compose stack, bringing your services online.
- **`smcli compose down`**: Stops and removes the Docker Compose stack, cleaning up your environment.
- **`smcli compose logs`**: Retrieves logs for specified containers, offering insights into application performance and issues.
- **`smcli hasura cli`**: Executes commands in the Hasura CLI, providing control over your GraphQL services.
- **`smcli tests stepci`**: Runs StepCI integration tests, ensuring your application meets its quality benchmarks.

:::note
When operating from the `cli/` directory, initiate Synmetrix CLI commands with `npx smcli` rather than `./cli.sh` from the project root.
:::

### Advanced Use

The Synmetrix CLI also supports more advanced use cases, such as executing arbitrary commands within containers, managing Docker Swarm stacks, and pushing Docker images to registries. These features make it an indispensable tool for developers working in complex, containerized environments.

### Documentation and Help

For detailed information on each command, including usage and options, use the `smcli help` command or refer to the Synmetrix documentation. The CLI is designed with ease of use in mind, but comprehensive help resources are available for when you need more guidance.

## Conclusion

The Synmetrix CLI is an essential tool for managing the Synmetrix stack, offering a wide range of functionalities to streamline your development and deployment workflows. Whether you're managing container lifecycles, viewing logs, or running tests, the Synmetrix CLI provides a unified interface to enhance your productivity and simplify container management.

## Resources

- [Synmetrix CLI Documentation](https://github.com/mlcraft-io/mlcraft/blob/main/cli/README.md)