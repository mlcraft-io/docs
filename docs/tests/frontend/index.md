---
id: frontend-tests
title: Frontend Tests
slug: /tests/frontend
sidebar_position: 2
description: Frontend tests for the Synmetrix platform.
---

To run frontend tests for the client-v2 in your project, follow these steps:

1. **Open Your Terminal**: Start by opening a terminal window on your computer.

2. **Navigate to the Project Root**: Use the command line to navigate to the root directory of your project where the client-v2 resides. You can do this by executing a command like `cd path/to/your/project`.

3. **Navigate to the Client-v2 Directory**: Once in the root directory of your project, move into the client-v2 directory by running:
   ```
   cd client-v2
   ```

4. **Install Dependencies**: Before running the tests, make sure all the necessary dependencies are installed. If you haven't already, run:
   ```
   npm install
   ```
   or if you prefer using Yarn,
   ```
   yarn install
   ```

5. **Run the Tests**: To execute the tests, you can use either npm or Yarn, depending on what you're using to manage your packages. Run one of the following commands:
   - Using npm:
     ```
     npm run test
     ```
   - Using Yarn:
     ```
     yarn test
     ```

6. **Review the Test Results**: After the tests have completed, the results will be displayed in your terminal. It will show which tests have passed, which have failed, and provide a summary of the test execution.

Make sure your development environment is correctly set up, including any environment variables or configurations that the tests might depend on. Additionally, ensure that any services or APIs that the frontend interacts with during the tests are accessible.


### References

- [Local Development](../development/local-development)
- [Synmetrix CLI](../development/cli)
- [Client-v2 repo](https://github.com/mlcraft-io/client-v2?tab=readme-ov-file#testing)