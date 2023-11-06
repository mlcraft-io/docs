---
id: test-structure
title: Test Structure
sidebar_label: Test Structure
slug: /testing-and-debugging/test-structure
---

# Testing Structure for Synmetrix

:::info
In the development process of Synmetrix, continuous testing plays a crucial role in ensuring system stability and reliability. To automate this process, we utilize the Continuous Integration (CI) tool, specifically the open-source platform StepCI.
:::

StepCI is employed for writing and conducting integration tests, which verify the correctness of the system's operation when its various components interact with each other. This is particularly vital for projects like Synmetrix, which consist of numerous services and components working collaboratively.

## Test Structure

All test files are located in the `test/stepci` directory within the Synmetrix project folder. Each file represents an individual test scenario described in YAML format.


```yaml
- name: change_password
  http:
    url: ${{env.HASURA_PLUS_ENDPOINT}}/auth/change-password
    method: POST
    headers:
      Content-Type: application/json
      Authorization: Bearer ${{captures.accessToken}}
    body: |
      {
        "old_password": "pass321",
        "new_password": "pass123"
      }
    check:
      status: 204
```

This YAML configuration represents a typical StepCI test scenario named "change_password." It performs a POST request with specific headers and a JSON request body to change a password. The response status is checked to ensure it's 204.

## Testing Algorithm

Testing on the StepCI platform typically involves the following steps:

1. **Request Creation:** StepCI generates a request based on the input data defined in the test scenario.

2. **Request Sending:** The request is sent to the tested endpoint in the Synmetrix system.

3. **Waiting for Response:** StepCI waits for a response from the Synmetrix system. During this time, all necessary actions are performed, such as request processing, interaction with the database, and other services.

4. **Response Verification:** After receiving the response, StepCI compares it with the expected result defined in the test scenario. If the response matches the expectations, the test is considered passed. Otherwise, StepCI logs an error, and the test is marked as failed.

This testing structure ensures the reliability and stability of the Synmetrix system. Automated testing allows developers to quickly identify and rectify errors, as well as ensure that new changes do not disrupt the functionality of existing features.

Upon completing a set of tests, StepCI provides a report with a brief description of the tests that were passed.


```bash
PASS datasource_flow 9.458s 1 1620 bytes 1 16006 bytes
Tests: 0 failed, 1 passed, 1 total
Steps: 0 failed, 0 skipped, 18 passed, 18 total
Time: 9,533s, estimated 10s
CO2:
0.04036g
Workflow passed after 9.533s
```
**Test was passed.** 

In the event of a test failure, StepCI records details, including the name of the failed testing step, input data and parameters, actual and expected results, and error messages obtained during the execution of the tested code. Subsequent test steps are halted upon encountering a failure.

```bash
v create_team passed after 0.041s
v invite_team_member passed after 0.597s 
v create_datasource passed after 0.021s 
v check_connection passed after 0.833s 
v validate_datasource passed after 0.078s 
v fetch_tables passed after 0.436s 
× gen_dataschemas failed after 0.008s 
A create_exploration skipped after 0s 
A fetch_dataset skipped after Os 
A export_data_models skipped after 0s 
A fetch_meta skipped after 0s 
A run_query skipped after Os


• datasource_flow › gen_dataschemas

Request HTTP
POST http://hasura:8080/v1/graphql HTTP/1.1
Content-Type: application/json
Authorization: Bearer eyJhbci01JIUzI1N1J9.eyJoYXN1cmEiOnsieC1oYXN1cmEtdXNlci1pZCI6IjU5Yjhj
OTVjLTdIMmEtNDc5Ny1hNjZjLWU1MTc3NmNjZDM5ZSIsIngtaGFzdXJhLWFsbG93ZWQtcm9sZXMi0\sidXNlciJdLCJ
4LWhhc3VyYS1kzwZhdWx0LXJvbGUi0iJ1c2VyInosInN1Yi16IjU5YjhjOTVjLTdl™mEtNDc5Ny1hNjZjLWU1MTc3Nm
NjZDM5ZSIsImlzcyI6Im5ob3N0IiwiaWF0Ijo×NjkwoDkoNzcOLCJleHAi0jE20TE1NDI3NzR9.DTtp9T†jNg6ABm1v
V7eB0KXZw6k1d2iZx6C-DFicCw™
,x-hasura-user-id: 59b8c95c-7e2a-4797-a66c-e51776ccd39e
{"query": "mutation (#datasource_id: uuid!, $tables: [SourceTable!]!) f\n gen_dataschemas (d atasource_id: $datasource_id, tables: $tables) f\n code\n
messageln FInrIn"， "variabl
es" :{"datasource_id":"9218058b-160c-4c43-8126-b944612c055f"
"tables": K{"name": "default/cell
towers"},{"name": "default/checks"}1}}
Response
HTTP/1.1 200 OK
transfer-encoding: chunked
date: Tue 01 Aug 2023 12:59:36 GMT
server: Warp/3.3.23
content-type: application/json; charset=utf-8
{"errors": ["extensions":{"code": "validation-failed", "path":"$.selectionSet. gen_dataschemas args.branch_id"}, "message":"missing required field 'branch_id'"}1}
Checks
JSONPath
× $. data.gen_dataschemas.code: undefined (expected ok)
```
**Test was failed.**