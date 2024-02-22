---
id: data-models
title: Data Models
slug: /core-concepts/data-models
sidebar_position: 1
description: Data models are the foundation of the Synmetrix platform. They are used to define the structure of data and the relationships between different types of data.
---

# Getting Started with Data Modeling in Synmetrix

Synmetrix employs the Cube data model framework to turn raw data into strategic business insights and to pre-aggregate data for optimal querying efficiency. This data model is accessible through Synmetrix's querying API, enabling users to perform a wide array of analytical queries without needing to modify the data model directly.

Consider an example using a `users` table with the following structure:

| id  | paying | city          | company_name |
|-----|--------|---------------|--------------|
| 1   | true   | San Francisco | Pied Piper   |
| 2   | true   | Palo Alto     | Raviga       |
| 3   | true   | Redwood       | Aviato       |
| 4   | false  | Mountain View | Bream-Hall   |
| 5   | false  | Santa Cruz    | Hooli        |

From this data, we seek answers to several questions regarding our user base:

- Total number of users
- Number of paying users
- Percentage of paying users compared to the overall user count
- Distribution of users, regardless of payment status, across different cities and companies

In Synmetrix, leveraging the Cube data model allows us to avoid crafting individual SQL queries for each question, facilitating the creation of organized and reusable SQL queries.

## 1. Creating a Cube in Synmetrix

Cubes in Synmetrix, structured around the Cube framework, serve to organize data entities and their interrelations. Typically, a cube corresponds to a database table, such as `users`, `orders`, or `products`. We define a base table for each cube using the `sql_table` parameter. For our case, the base table is the `users` table.

**YAML**

```yaml
cubes:
  - name: Users
    sql_table: users
```

**JavaScript**

```javascript
cube(`Users`, {
  sql_table: `users`,
});
```

## 2. Integrating Measures and Dimensions

After defining the base table, the next step involves adding measures and dimensions to the cube. Measures refer to quantitative data, like sales volume or user count, while dimensions categorize data, such as by city or company name.

Let's add our first measure and dimensions to illustrate:

**YAML**

```yaml
cubes:
  - name: Users
    sql: SELECT * FROM users

    measures:
      - name: TotalCount
        sql: id
        type: count

    dimensions:
      - name: City
        sql: city
        type: string

      - name: CompanyName
        sql: company_name
        type: string
```

**JavaScript**

```javascript
cube(`Users`, {
  sql: `SELECT * FROM users`,

  measures: {
    TotalCount: {
      sql: `id`,
      type: `count`,
    },
  },

  dimensions: {
    City: {
      sql: `city`,
      type: `string`,
    },

    CompanyName: {
      sql: `company_name`,
      type: `string`,
    },
  },
});
```

## 3. Applying Filters to Measures

To discern the number of paying users, Synmetrix introduces measure filters, allowing for specific data segmentation:

**YAML**

```yaml
cubes:
  - name: Users

    measures:
      - name: PayingUsersCount
        sql: id
        type: count
        filters:
          - sql: "{CUBE}.paying = true"

    # Other definitions...
```

**JavaScript**

```javascript
cube(`Users`, {
  measures: {
    PayingUsersCount: {
      sql: `id`,
      type: `count`,
      filters: [{ sql: `${CUBE}.paying = true` }],
    },
  },

  // Other definitions...
});
```

## 4. Crafting Calculated Measures

For inquiries like the percentage of paying users relative to the total, Synmetrix simplifies the creation of calculated measures. This enables the comparison of `PayingUsersCount` to `TotalCount`:

**YAML**

```yaml
cubes:
  - name: Users

    measures:
      - name: PayingUsersPercentage
        sql: "100.0 * {PayingUsersCount} / NULLIF({TotalCount}, 0)"
        type: number
        format: percent

    # Additional configurations...
```

**JavaScript**

```javascript
cube(`Users`, {
  measures: {
    PayingUsersPercentage: {
      sql: `100.0 * ${PayingUsersCount} / NULLIF(${TotalCount}, 0)`,
      type: `number`,
      format: `percent`,
    },
  },

  // Additional configurations...
});
```

In this approach, Synmetrix not only streamlines the process of data modeling but also enhances the analytical capabilities available to end-users, making it easier to derive meaningful insights from complex data sets.

## 5. Next Steps

1. [Data models documentation](https://cube.dev/docs/product/data-modeling/overview)
2. [Data models reference](https://cube.dev/docs/reference/data-model/cube)
3. [Query format](https://cube.dev/docs/product/apis-integrations/rest-api/query-format)