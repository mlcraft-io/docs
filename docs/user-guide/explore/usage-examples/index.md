---
id: usage-examples-explore
title: Usage Examples
sidebar_label: Usage Examples
slug: /user-guide/explore/usage-examples-explore
---

## Example with Exell and Rest API

### 

:::tip Playground Data Source Configuration
**Host**: gh-api.clickhouse.tech  
**Database Name**: default  
**User**: play  
**Port**: 443  
**SSL**: yes
:::

### Detailed Steps for Data Analysis

**Step 1:**  
Initialize by adding a Data Source, either during the Onboarding process or through the [Settings](/docs/user-guide/settings/data-sources/index.md) section.

**Step 2:**  
Create a model, such as the 'Covid' model. Select **COVID LOCATION KEY DIMENSIONS** and **COVID COUNT MEASURES** for your analysis.

**Step 3:**  
Apply a filter for 'Covid Count' to ensure the data is relevant and specific.

**Step 4:**  
Set the row limit to 1000 and proceed to execute the query by clicking "Run Query".

**Step 5:**  
Examine the auto-generated SQL:
```sql
SELECT
  `covid`.location_key `covid__location_key`, count(*) `covid__count`
FROM
  default.covid AS `covid`
GROUP BY `covid__location_key`
HAVING (count(*) IS NOT NULL)
LIMIT 1000
```

### Advanced Analysis with SQL and Excel

With the SQL query, you can conduct in-depth analysis of COVID data:

- **Visualizing Trends**: Export data to Excel for graphical representations of COVID case trends.
- **Comparative Studies**: Analyze COVID counts across different regions or timeframes in Excel.
- **Correlation Analysis**: Merge COVID data with other datasets in Excel to discover correlations.
- **Predictive Models**: Utilize Excel's tools for forecasting future COVID case trends.
- **Report Creation**: Build detailed reports using Excel, integrating both data and visual aids.

### Step 6: Utilizing REST API for Web Integration

After generating your SQL, Synmetrix offers a REST API tab for data transmission to elsewhere you need. Here's how you can utilize it:

- **Data Sharing**: Use the API to send real-time COVID data to websites or online dashboards.
- **Building Interactive Tools**: Create web-based tools or widgets that display up-to-date COVID statistics.
- **Automating Updates**: Set up the API for regular data updates on your web platforms.
- **Integrating with Web Apps**: Use the API for seamless data integration with other online applications or services.

This comprehensive guide illustrates how Synmetrix, coupled with SQL, Excel, and the REST API, provides a robust framework for advanced COVID data analysis and web integration.