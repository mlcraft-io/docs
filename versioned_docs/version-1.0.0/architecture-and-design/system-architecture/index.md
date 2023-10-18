---
id: system-architecture
title: System Architecture
slug: /architecture-and-design/system-architecture
sidebar_label: System Architecture
---

# Synmetrix System Architecture

The architecture of the Synmetrix system has been meticulously designed with a focus on details, taking into account the core requirements of scalability, reliability, and flexibility. When creating the architecture, modern technologies were utilized, including the following key components:

## [Hasura](https://hasura.io/)

Hasura plays a crucial role in the system by connecting to the database and providing a GraphQL API for external services and applications. Hasura simplifies working with the database, offering intuitive and powerful tools for quickly creating queries and mutations in GraphQL, thereby enhancing performance and optimizing data-related workflows.

## [PostgreSQL](https://www.postgresql.org/)

PostgreSQL has been chosen as the primary database management system due to its reliability, high performance, and flexibility. This allows for efficient handling of large volumes of data while ensuring excellent performance and stability.

## [Node.js](https://nodejs.org/)

Node.js is the server-side platform used to create the backend of the application. Node.js is known for its ability to easily and rapidly develop scalable networked applications, thanks to efficient handling of asynchronous operations and event processing.

## [React.js](https://reactjs.org/)

React.js is a library for developing user interfaces. It provides high performance and simplifies the development process through the use of a component-based architecture.

## [Cube.js](https://cube.dev/)

Cube.js is an open-source analytics platform for building business analytics applications using JavaScript. In Synmetrix, Cube.js is used to manage business metrics, providing efficient tools for data processing.

## [CubeStore](https://cubestore.dev/)

CubeStore is a distributed database optimized for analytical queries and integrated with Cube.js. It offers capabilities for fast and efficient processing of large volumes of data.

## [Redis](https://redis.io/)

Redis is a key-value database management system known for its high performance and flexibility. It offers unique features, including support for various data structures such as strings, lists, sets, hashes, and more.

## [Docker](https://www.docker.com/)

Docker is used for containerization and simplifying the application deployment process, ensuring consistent functionality in any environment.

## [Docker Swarm](https://docs.docker.com/swarm/)

Docker Swarm is an orchestration and management tool for containers deployed using Docker. It allows for the management and scaling of applications across multiple servers, making infrastructure management easier.

## [Ubuntu](https://ubuntu.com/)

Ubuntu has been chosen as the primary operating system for the servers hosting all the services. It is a stable and reliable system well-suited for server environments.

## Interactions between architecture components
![Interactions between architecture components](/docs/data/architecture.png)

Additionally, Synmetrix has been designed as a microservices-based system. Each microservice performs a specific function and can scale independently of others, providing flexibility and scalability to the system. This architecture allows for the independent updating and modernization of individual system components, simplifying the development and maintenance process of the system as a whole.
