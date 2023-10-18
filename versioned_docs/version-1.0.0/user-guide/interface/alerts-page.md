---
id: alerts-page
title: Alerts Page
sidebar_label: Alerts
slug: /interface/alerts
sidebar_position: 4
---

The Alerts page allows you to set up notifications based on predefined conditions in your data. When the specified conditions are met, an alert will be triggered, and you will be notified through your preferred delivery method. To create an alert, follow these steps from the Explore page:

**First, go to the Explore page where you can access the data you want to set alerts for.**

Now, you can proceed with setting up your alerts.

## How to Create an Alert

1. Click the "Create" button on the Alerts page.
![Alerts Page](/docs/interface/img/alerts1.png)

2. Select the destination where the alert notifications will be sent. You can choose between Webhook, Slack, or Email based on your preferences and integrations.
![Delivery path](/docs/interface/img/alerts2.png)

3. Fill out the alert form with the following details:
![Alerts Form](/docs/interface/img/alerts3.png)

### Form fields description for the Alerts page:

**Alert Name**: Enter a name that identifies the purpose and content of the alert.



  ## Preview:

  In the "Preview" section, you will find crucial details for the Alert or Report, including the user-selected metric referred to as the "Query Key." This metric is at the core of your monitoring process and plays a pivotal role in alerting or report generation.

  Here, you'll also discover various other essential components such as:

  **Measures:** These represent the quantitative data that you want to track or display. Users can choose specific measures that matter the most to their analysis, and these will be prominently featured in the Preview.

  **Dimensions:** Dimensions help to provide context and categorize your data. They allow you to break down the information based on various attributes, providing a more comprehensive view of your metrics.

:::info

  In the **Preview**, all these elements come together to give you a snapshot of the data and insights you're tracking, ensuring that you're monitoring the right information for your analysis, whether it's for an Alert or Report.

:::

   ## Trigger Settings:

   - **Schedule**: Configure the frequency at which the alert conditions will be evaluated by setting a schedule (e.g., every hour, daily, weekly).
   - **Lower Bound**: Set the lower threshold value that triggers the alert.
   - **Upper Bound**: Set the upper threshold value that triggers the alert.
   - **Request Timeout (minutes)**: Define the maximum time allowed for the data request to complete.
   - **Timeout On Fire (minutes)**: Specify the duration after which the alert is considered "fired" if the condition remains true.


  ## Delivery Settings:

   The available fields in this section depend on the chosen delivery method for the alert. Here are some common options:

   - **Webhook**: Enter the URL of the webhook endpoint where the alert notifications will be sent.
   - **Slack**: Provide the Slack channel or user ID to which the alert notifications will be delivered.
   - **Email**: Enter the email address(es) of the recipient(s) who will receive the alert notifications.
   

:::note

Once you have completed the settings, click the "Save" button to create the alert and start monitoring the specified conditions.

:::

