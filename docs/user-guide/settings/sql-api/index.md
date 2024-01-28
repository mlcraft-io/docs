---
id: sql-api-settings
title: SQL API
sidebar_label: SQL API
---

# SQL API
![SQL API Page](/docs/img/sql-page.png)

## Effortless Data Management and Uninterrupted Collaboration
Engage in powerful and flexible data retrieval and manipulation with our SQL API, designed for effortless data management and seamless collaboration.

### Simplified Data Sharing
Synmetrix revolutionizes data sharing with its versatile protocol, ensuring smooth integration with a variety of data tools. Our platform seamlessly connects with business intelligence and data exploration tools (Superset, Tableau), data notebooks (Jupyter, Hex), reverse ETL tools (Census, Hightouch), low-code platforms (Retool), and more, enhancing efficiency and simplicity in data-driven tasks.

### One-Stop Metrics Solution
Synmetrix serves as the ultimate repository for all your data needs, centralizing metrics in an organized manner. Regardless of your preferred tools or platforms for data analysis or visualization, Synmetrix provides easy access to essential data.

### Key Benefits
1. **Integrations**: Seamlessly integrate into your workflow, including Excel compatibility.
2. **Flexibility**: Encourage collaborative efforts with shared models in a harmonious team environment.
3. **Security**: Rely on our robust and reliable security measures.
4. **Effortless**: Tailor SQL queries to meet your unique requirements.

## Acquiring SQL Credentials
Obtain your SQL API credentials through two distinct methods:

### First Method: From Onboarding
1. Initiate a new account creation.
2. Add your data source.
3. Opt to generate models (optional).
4. Synmetrix generates SQL API access during this step.
5. A pop-up allows you to choose between PSQL or MYSQL for connection, along with credential copying.
6. Connect using PSQL or MYSQL, or opt to "Download Credentials" for later use.
7. Finish the onboarding.

### Second Method: From Settings
![Second Method: From Settings](/docs/img/sql-edit-gear.png)

1. Navigate to `Settings > SQL API`.
2. Click the gear icon on the database card and select "Edit".
3. The pop-up window provides PSQL or MYSQL connection options and credential copying.

    :::tip Example Credentials
    - Host/URL: `cube.synmetrix.org:15432`
    - Database: `db`
    - Login: `4x4qg8ei76`
    - Password: `**********`
    - PSQL Client Connection: `psql --host=cube.synmetrix.org:15432 --username=4x4qg8ei76 --password=********** --dbname=db`
    :::

4. Connect using PSQL or MYSQL, or "Download Credentials" for later use.

## Managing SQL API Credentials
Easily create, edit, or delete SQL API credentials via `Settings > SQL API`.

### Deleting Credentials
![Delete SQL API](/docs/img/sql-edit-delete.png)
1. Click the gear icon and select "Delete" from the dropdown.
2. Confirm deletion.


### Creating Credentials
![Creating Credentials](/docs/img/sql-create.png)
1. Select the "Create Now" button on the SQL API page.
2. In the pop-up, specify the Team member and Data source.

### Editing Credentials
![Editing SQL API](/docs/img/sql-edit.png)
1. Click the gear icon and select "Edit".
2. Modify the credentials as needed.
3. Confirm by clicking "Finish".