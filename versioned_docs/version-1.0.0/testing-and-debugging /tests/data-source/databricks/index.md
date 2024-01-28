---
id: databricks
title: Databricks
slug: /usage/user-guide/data-source/databricks
sidebar_label: Databricks
---

# Connecting to Databricks Datasource via JDBC

To connect to a Databricks datasource via JDBC, you will need the following information:

- Access Token: A personal access token used to authenticate the Databricks connection.

- Databricks JDBC URL: The URL for a JDBC connection. It should be in the format:

  ```jsx
  jdbc:databricks://{'<Databricks address>'}:443/default;transportMode=http;ssl=1;
  ```

- Database Name: The name of the database to connect to.
