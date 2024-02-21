---
id: database-design
title: Database Structure Design
sidebar_label: Database Design
slug: /core-concepts/architecture-and-design/database-design
sidebar_position: 2
---

## Database Structure

The "Synmetrix" database is organized according to the relational database model and includes the following tables:

1. **public.users**: Stores information about registered users, including user ID (id), display name (display_name), avatar URL (avatar_url), as well as the creation time and last update time of the record.

2. **auth.account_providers**: Describes the relationships between user accounts and their authentication providers.

3. **auth.accounts**: Stores information about user accounts, including unique identifiers, email addresses, passwords, and other data.

4. **auth.providers**: Provides a list of available authentication providers.

5. **auth.refresh_tokens**: Contains information about refresh tokens for each user account.

6. **auth.roles**: Manages user roles.

7. **auth.account_roles**: Contains information about roles for each account.

8. **public.teams**: Stores information about user teams.

9. **public.datasources**: Contains information about data sources used by users.

10. **public.dataschemas**: Describes data models used to define business metrics for data sources.

11. **public.explorations**: Describes research tasks performed by users.

12. **public.members**: Stores information about team members.

13. **public.team_roles**: Manages user roles within teams.

14. **public.member_roles**: Contains information about roles for each team member.

15. **public.reports**: Contains information about the structure and schedule of reports based on metrics needed by users.

16. **public.sql_credentials**: Manages SQL credentials used to access business metrics through the SQL interface.

17. **public.alerts**: Stores information about alerts created by users.

## Database Architecture Description

![Database Architecture Description](/docs/data/db.png)

The architecture of the database, including relationships between tables, primary and foreign keys, and indexes, is represented in the [Database Markup Language (DBML).](https://dbml.dbdiagram.io/docs/)

This database structure provides flexibility and scalability to the system, allowing convenient management of users, teams, data sources, reports, and other system elements. Each database table is designed for a specific purpose and can be extended or modified to meet evolving system requirements.

- [DBLM Representation](https://github.com/mlcraft-io/mlcraft/blob/71586dd0f64ab58be15a0593cd9ef820af63a95d/etc/db.dblm)
- [Relationships](https://dbdocs.io/gorland1314/mlcraft?view=relationships)