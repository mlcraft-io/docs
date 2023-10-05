---
id: overview
title: Overview
slug: /overview
sidebar_label: Overview
sidebar_position: 2
---

This document provides information about the functional characteristics of "Synmetrix" software (hereinafter referred to as the software or application) and the necessary details for its operation. This includes information about the software's technological stack, its purpose, and more.

## Description and Purpose of the Software

"Synmetrix" software (hereinafter referred to as the program or software) is a tool designed for data engineers, analysts, and managers. It enables the creation and management of data models, version control for these models, monitoring metric changes, and organizing work with them. Additionally, it facilitates the transmission of metrics to other data consumers through various interfaces, including REST, GraphQL, or SQL.

The software's scope of application encompasses any field that requires the processing, analysis, and transmission of large volumes of data, including but not limited to the financial sector, retail, electric power industry, manufacturing, research and development, healthcare, and more.

### Key Features

Key features of the software include:

- Creating data models to transform raw data into meaningful business indicators.
- Version control for data models, allowing for tracking changes and quick rollback to stable versions.
- Metric management, including tracking changes, ownership assignment, and involvement.
- Creating an SQL interface for accessing metrics.
- Scheduled reporting system for metric delivery through various communication channels.
- User notification system for metric changes.
- Importing and exporting data models.
- Generating documentation from data models.

## Main Platform Components

The main functional components of the platform include:

### Datasources

This page provides a user-friendly interface for adding various data sources to the project. It offers a wide selection of possible databases, drivers, and other data storage solutions, providing flexibility in choosing the right option for your needs.

### Dataschemas

The Dataschemas page is a powerful tool for creating data schemas and managing them in the project. It allows you to define the structure and relationships of your data, ensuring consistency and integrity. Data schemas are generated using Cube.js, a powerful open-source API analytics platform. Additionally, this page offers functions for version control of schemas and executing SQL queries on linked data sources.

### Alerts

This section allows you to configure notifications based on predefined data conditions. When specified conditions are met, notifications are triggered, and you will be informed through your chosen notification method.

### Explore

Explore enables the examination of data from the selected data source. It allows you to gather data sets using measures and dimensions and offers a wide range of filters for more precise data analysis.

### Reports

On the "Reports" page, you can track metrics with the desired frequency.

### Logs

This section is designed to manage the internal operations of the Cube.js service. It allows you to view requests and events that occur during the processing of these events. You can access information such as execution time, start and end times, actual queries, and additional technical details. This capability enables performance tracking and analysis of Cube.js service behavior.

### Team

The "Team" page is used to create and manage teams within the project. It allows you to invite new users and assign roles and access levels to team members.

This document provides an overview of the software's features and main platform components. For detailed usage instructions and technical information, refer to the accompanying documentation.
