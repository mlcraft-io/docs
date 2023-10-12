---
id: models-page
title: Models Page
sidebar_label: Models
slug: /interface/models
sidebar_position: 3
---

The Models page is a powerful tool for generating and managing models in your project. It allows you to define the structure and relationships of your data, ensuring consistency and integrity. Models are generated using Cube.js, a powerful open-source analytical API platform. You can refer to the [Cube.js documentation](https://cube.dev/docs/schema/getting-started) for more details. Additionally, the page provides features for version controlling your schemas and executing SQL queries on the associated data sources. Here's how you can make the most of this page:

## How to Get Started

1. To get started, you need to generate data models. Select the "Generate Model" option from the menu (shown in the screenshot below).
   ![Generate Model button](/docs/interface/img/models1.png)

2. In the opened window, navigate to the required sections by opening the corresponding tabs and check the boxes next to the tables or metrics you want to analyze. Then, click the "Generate" button (indicated by the arrow in the screenshot below).
   ![Checkboxes](/docs/interface/img/models2.png)

Now you should see the generated data model files in the right column (as shown in the screenshot below). You can freely edit your models as needed, adding and removing measures and dimensions. All your changes will be tracked by the version control system, the details of which are described below.

## Version Control System

The version control system tracks changes to the data models, allowing you to revert to previous states of the models.

To view the saved versions, open the drop-down menu located at the top left of the page and select the "Show versions" option (as shown in the screenshot below).
![Versions](/docs/interface/img/models3.png)

In the opened window, you will see all the saved versions of the data models (as shown in the screenshot below). By expanding the rows, you can view the files and their contents. To revert to a specific version, simply click the "Restore" button next to it, and it will become the current version.
![Restore version](/docs/interface/img/models4.png)

Additionally, the version control system allows you to create separate branches of versions, which can help you switch between versions more efficiently than restoring versions within a single branch.

To create a branch, open the branch list located in the top left corner of the page, enter the name of the new branch in the field, and click the plus icon button.
![New branch](/docs/interface/img/models5.png)

This will create a new branch with the current state. To work with the new branch, you need to switch to it and then make it the default branch by clicking the "Set as default" button (shown in the screenshot).
![New branch](/docs/interface/img/models6.png)
