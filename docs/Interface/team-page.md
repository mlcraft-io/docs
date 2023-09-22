---
id: team-page
title: Teams Page
sidebar_label: Teams
slug: /interface/teams
sidebar_position: 7
---

The Reports page allows you to generate and send a screenshot of the Explore page with predefined parameters, enabling you to monitor metrics at your desired frequency. To create a report, follow these steps:

## How to Create a Report

1. Click the "Create" button on the Reports page.
![Reports Page](/docs/interface/img/report1.png)

2. Select the destination where the screenshot will be sent. You can choose between Webhook, Slack, or Email based on your preferences and integrations.
![Reports Destination](/docs/interface/img/report2.png)

3. Fill out the report form with the following details:
![Reports Form](/docs/interface/img/report3.png)

## Form fields description for the Reports page:

**Report Name**: Enter a name that easily identifies the purpose and content of the report.


  ## Data Settings:

   - **Datasource**: Select the data source from which the report will retrieve data.
   - **Cube**: Choose the cube that contains the required metrics and dimensions for the report.
   - **Measure**: Select the metric you want to analyze in the report.
   - **Time Dimension**: Choose the time dimension to be used for data breakdown over time.
   - **Granularity**: Specify the level of detail for time-based data (e.g., day, week, month).
   - **Since**: Set the starting point from which the data analysis begins.
   - **Limit**: Specify the maximum number of records to be displayed in the report.
  

  ## Trigger Settings:
  - **Schedule**: Configure the frequency at which the report will be executed by setting a schedule (e.g., daily, weekly, monthly).
  

  ## Delivery Settings:

   The available fields in this section depend on the chosen delivery method for the report. Here are some common options:

   - **Webhook**: Enter the URL of the webhook endpoint where the report will be sent.
   - **Slack**: Provide the Slack channel or user ID to which the report will be delivered.
   - **Email**: Enter the email address(es) of the recipient(s) who will receive the report.

:::note

Once you have completed the settings, click the **"Save"** button.

:::