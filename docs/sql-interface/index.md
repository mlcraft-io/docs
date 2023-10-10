---
id: sql-interface
title: SQL Interface
sidebar_label: SQL Interface
slug: /sql-interface
sidebar_position: 7
---

# Synmetrix SQL Interface

## Introduction

In the development of Synmetrix, the establishment of a robust SQL interface plays a pivotal role. This interface serves as a unified platform for accessing data sources, ensuring consistent metrics are available to all data consumers. It addresses the challenge of maintaining data integrity and precision across various tools employed by modern organizations.

## Problem Statement

Many modern organizations utilize numerous tools to process data from a shared storage but perform individual metric calculations. This often leads to discrepancies in calculations and disparities among different teams. The more tools an organization employs, the greater the potential for inconsistencies, making data-driven decision-making complex. Hence, it is essential to create a centralized hub for defining and maintaining metrics, ensuring that all tools operate with a single source of data.

## Solution: Leveraging Cube.js

To tackle this challenge, Synmetrix has chosen the Cube.js framework, successfully integrated into the Synmetrix platform. Cube.js offers a significant advantage in its ability to act as a data source proxy, transforming incoming queries—whether in JSON, GraphQL, or SQL format—into native queries to the underlying data store.

## Implementation of SQL Interface in Synmetrix

Creating the SQL interface within Synmetrix presented several challenges effectively addressed using the Cube.js framework and Apache Datafusion. This SQL interface enables Cube.js to provide data through a PostgreSQL-compatible protocol to various data-consuming applications, including but not limited to:

- [BI tools](https://example-bi-tool.com)
- Data exploration tools such as Jupyter or Hex
- Reverse ETL tools like Census or Hightouch
- Low-code development platforms such as Retool
- Automated tasks

**The SQL interface has been thoroughly tested with a range of tools and platforms, including:**

- [psql CLI](https://www.postgresql.org/docs/current/app-psql.html)
- [Apache Superset](https://superset.apache.org/)
- [Tableau Cloud](https://www.tableau.com/cloud)
- [Tableau Desktop with JDBC driver](https://www.tableau.com/)
- [Power BI](https://powerbi.microsoft.com/)
- [Metabase](https://www.metabase.com/)
- [Google Data Studio](https://datastudio.google.com/)
- Excel through [Devart plugin](https://www.devart.com/excel-addins/)
- [Deepnote](https://deepnote.com/)
- [Hex](https://hex.pm/)
- [Observable](https://observablehq.com/)
- [Streamlit](https://streamlit.io/)
- [Jupyter notebook](https://jupyter.org/)
- [Hightouch](https://hightouch.io/)

The SQL API utilizes Apache Datafusion as its SQL execution engine, responsible for query planning and execution.

## Implementation Details

The implementation of the SQL interface in Synmetrix comprises several key steps, facilitated by the Cube.js framework and Apache Datafusion:

- **Request Retrieval**: Incoming data retrieval requests arrive in SQL format to Cube.js, serving as the initial queries that require processing and execution.
- **Query Transformation**: Cube.js transforms the incoming SQL queries into its own query format (JSON). This transformation optimizes and prepares the query for execution against the underlying data store.
- **Query Execution**: The SQL query generated in the previous step is sent to the data source. This source can be any supported database to which Cube.js can connect.
- **Data Retrieval**: The output is a dataset containing the required data in response to the original query.
- **Load into Apache Datafusion**: The dataset is loaded into Apache Datafusion, where it undergoes further processing. Apache Datafusion serves as the SQL execution engine, responsible for query planning and execution.
- **Execution of the Original SQL Query**: The original SQL query received by the server is executed within Apache Datafusion. This allows for the full utilization of SQL's capabilities for data analysis and processing while preserving the structure and semantics of the original query.
- **Data Return**: Query results are returned through Cube.js, where they can be further processed or directly delivered to end-users.

This process ensures high flexibility and power when working with queries while maintaining data consistency and coherence for all consumers. Each stage has been meticulously designed and optimized to ensure efficient query execution and overall system performance.

## Transformation of SQL Queries

A notable feature of the SQL interface in Synmetrix is how it handles and transforms SQL queries. As previously mentioned, Cube.js converts incoming SQL queries into its own query format (JSON), a process known as "Cube query rewrite." This transformation allows for optimization and query preparation for execution against the underlying data store.

Let's illustrate this with an example query to the "orders" cube in our data model:

**Original SQL Query:**
```sql
SELECT
  city,
  SUM(amount)
FROM orders
WHERE status = 'shipped'
GROUP BY 1
```

This SQL query in the SELECT statement to the "orders" cube is transformed into Cube.js' internal query format:

**Transformed Cube.js Query:**
```json
{
  "measures": ["Orders.amount"],
  "dimensions": ["Orders.city"],
  "filters": [
    {
      "member": "Orders.status",
      "operator": "equals",
      "values": ["shipped"]
    }
  ]
}
```

As a result of this transformation, not all functions and expressions are supported within query fragments that execute SELECT statements on cube tables. For example, the following query would not work because the SQL API cannot pass the CASE expression to Cube.js for processing, making it impossible to translate the CASE expression into a metric:

**Non-supported Query:**
```sql
SELECT
  city,
  CASE
    WHEN status = 'shipped' THEN 'done'
    ELSE 'in-progress'
  END real_status,
  SUM(number)
FROM orders
  CROSS JOIN Users
GROUP BY 1;
```

However, in such cases, nested queries can be employed. You can encapsulate your SELECT query from a cube table within another SELECT query to perform calculations with expressions like CASE. This outer SELECT is not part of the rewritten SQL query, allowing you to use more SQL functions, operators, and expressions.

**Example Query:**
```sql
SELECT
  city,
  CASE
    WHEN status = 'shipped' THEN 'done'
    ELSE 'in-progress'
  END real_status,
  SUM(amount) AS total
FROM (
  SELECT
    Users.city AS city,
    SUM(number) AS amount,
    orders.status
  FROM orders
    CROSS JOIN Users
  GROUP BY 1, 3
) AS inner
GROUP BY 1, 2
ORDER BY 1;
```

The above query works because the CASE expression is supported in SELECT queries that do not reference cube tables. These nuances and query handling specifics should be considered when designing and utilizing the SQL interface in Synmetrix.

## Server Code

For a detailed analysis of the server code and its components, please refer to the [Synmetrix SQL Interface Server Code](https://github.com/synmetrix-io/synmetrix/blob/main/services/cubejs/index.js).

## Conclusion

The creation of the SQL interface in Synmetrix has allowed for the development of a unified data access interface, ensuring metric consistency for all data tools. This has reduced the number of discrepancies and conflicts related to metric calculations, providing a more reliable foundation for data-driven decision-making.

For more in-depth information and detailed documentation, please visit the [Synmetrix Documentation](https://docs.synmetrix.org).