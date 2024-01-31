---
id: role-access
title: Role Based Access
sidebar_label: Role Based Access
---

# Role Based Access Control
![Role Based Access Control](/docs/img/role-page.png)


## Overview

Role Based Access Control (RBAC) is a system for regulating access to resources within your organization based on the roles of individual users. This document outlines how to manage roles and the types of access they grant.

## Access Types
![Access Types](/docs/img/role-types.png)

- **Partial Access**: Grants access to specific Data Sources, Data Models, and various Measures, Dimensions, or Segments.
- **Full Access**: Provides unrestricted access to all resources.
- **No Access**: Denies access to all resources.

## Adding a New Role

To add a new role, follow these steps:

1. Navigate to **Settings** > **Roles and Access**.
2. Click on the **Create Now** button.
3. In the popup window:
![Role Name](/docs/img/role-name.png)
   - Enter the role name.

![Role Popup](/docs/img/role-popup.png)
   - Set access for data source resources by selecting one or multiple data sources.
   - Choose Data Models.
   - Select Measures, Dimensions, and/or Segments.
     :::tip 
     Use the "Select All" checkbox to select all Measures, Dimensions, and Segments in the current Data Model.
     :::
1. Click **Create**.

:::info 
Roles display information including the creation date, last update, and data sources along with their respective access types.
:::

## Deleting a Role
![Role Edit](/docs/img/role-delete.png)

To delete a role, follow these steps:

1. Go to **Settings** > **Roles and Access**.
2. Find the role to be deleted and click the gear icon on their card.
3. Choose **Delete** from the dropdown list and confirm the deletion.
4. The deletion process is complete.

## Editing a Role
![Role Edit](/docs/img/role-edit.png)

To edit an existing role, follow these steps:

1. Navigate to **Settings** > **Roles and Access**.
2. Locate the role to edit and click the gear icon on their card.
3. Choose **Edit** from the dropdown list.
![Role Popup](/docs/img/role-popup.png)

4. In the popup window, make the desired changes:
   - Update the role name.
   - Adjust access to data source resources.
   - Select or change Data Models.
   - Choose Measures, Dimensions, and/or Segments.
     :::tip 
     Utilize the "Select All" checkbox for selecting all items in the current Data Model.
     :::
5. Click **Save** to apply the changes.

This document provides clear guidelines for managing roles within the Role Based Access Control system, ensuring efficient and secure access management.