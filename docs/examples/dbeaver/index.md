---
id: dbeaver 
title: DBeaver
slug: /examples/dbeaver 
---
# Using DBeaver with Synmetrix

Welcome to the SQL Interface Testing Guide for Data Models. This comprehensive guide will walk you through the process of testing SQL interfaces for data models within our system.

## Section 1: Test Database Credentials

Before you begin testing, you'll need the following Postgres database credentials:

- Type: Postgres
- Host: demo-db.cube.dev
- Port: 5432
- User: cube
- Password: 12345
- Database Name: ecom

![Connecting to Data source](/docs/interface/img/sql-test1.png)

## Section 2: Adding SQL Interface

To add an SQL interface, follow these steps:

1. Go to the Settings > SQL API and Click to the  "Attach SQL API" button.
2. Select the data source for connection; in our case, it's "Ecom (demo db)."
3. Enter your login and password or use the default ones (login: "test" and password: "test").
4. Click "Connect new."

![Attach SQL API](/docs/interface/img/sql-test2.png)
![SQL API](/docs/interface/img/sql-test3.png)

## Section 3: Generating Data Models

Refer to the guide in Appendix V.2 for generating data models. For "Ecom (demo db)," you'll need to generate data models for the following tables:

- Line Items
- Line Items Count by States
- Orders
- Product Categories
- Products
- Suppliers
- Users

This will result in the following list of data models:

- LineItems.yml
- LineItemsCountByStates.yml
- Orders.yml
- ProductCategories.yml
- Products.yml
- Suppliers.yml
- Users.yml

Each script is labeled with its corresponding name, which is also the table name when accessing via the SQL interface.

## Section 4: Connecting via SQL Interface with a Postgres Client

We recommend using DBeaver of any version (https://dbeaver.io/) for connecting. However, our connection has also been tested with the following tools:

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

### 4.1: Connecting via DBeaver

![Connecting via DBeaver](/docs/interface/img/sql-test5.png)

1. Create a new PostgresSQL connection.
2. Enter the credentials provided when setting up the SQL interface. In this example:
   - Host: localhost
   - Port: 15432
   - Database: ecom (you can specify any value)
   - Username: test
   - Password: test
![Connecting via DBeaver](/docs/interface/img/sql-test6.png)

3. Click "Test Connection" to verify the connection.
![Connecting via DBeaver](/docs/interface/img/sql-test7.png)

4. Click "Finish" and save the connection.
5. Go to the SQL console to test SQL queries against the data models.
![Connecting via DBeaver](/docs/interface/img/sql-test8.png)

### 4.2: Testing SQL Queries

![Testing SQL Queries](/docs/interface/img/sql-test9.png)

Start writing queries for the generated data models following the steps outlined in Appendix D.3.

#### 4.2.1: Sample SQL Queries

Query:
```sql
SELECT * FROM orders ORDER BY created_at LIMIT 3;
```

Response:
![Testing SQL Queries](/docs/interface/img/sql-test10.png)


Query:
```sql
SELECT p.name, SUM(o.count) FROM orders o CROSS JOIN products p GROUP BY 1 LIMIT 5;
```

Response:
![Testing SQL Queries](/docs/interface/img/sql-test11.png)

Query:
```sql
SELECT MEASURE(count), status, DATE_TRUNC('month', created_at) date FROM orders GROUP BY date, status ORDER BY date ASC;
```

Response:
![Testing SQL Queries](/docs/interface/img/sql-test12.png)

Query:
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
    users.city AS city,
    SUM(number) AS amount,
    orders.status
  FROM orders
    CROSS JOIN users
  GROUP BY 1, 3
) AS inner
GROUP BY 1, 2
ORDER BY 1;
```

Response:
![Testing SQL Queries](/docs/interface/img/sql-test13.png)