---
id: stepci-tests
title: StepCI Integration Tests
slug: /tests/stepci
sidebar_position: 1
---

To run [StepCI](https://step.ci/) integration tests effectively, follow these revised instructions, paying attention to the initial setup steps to ensure the Synmetrix development environment is correctly prepared:

1. **Navigate to Your Project Directory**: First, open a terminal window and change to the directory where your Synmetrix project is located. This is where you'll start the necessary preparations.

2. **Start the Synmetrix Development Environment**: With the initial preparations done, start the Synmetrix development environment compose stack by running:
   ```
   ./cli.sh compose up
   ```
   This command activates the Docker Compose stack required for the development environment, ensuring that all services and dependencies are up and running.

3. **Run the Tests**: Now that your environment is set up, you can proceed to run the StepCI integration tests. From the project root, ensure you use the `./cli.sh` script to execute the tests to maintain the correct environment context:
   ```
   ./cli.sh tests stepci
   ```
   Utilizing `./cli.sh` ensures that the Synmetrix CLI (smcli) is executed with the correct configurations and environment settings.

4. **Review Test Results**: Once the tests have finished running, review the terminal output for the test results. The output will detail the outcomes of each test case, including success or failure statuses, along with any error messages or logs that can assist in debugging if necessary.

It's important to ensure that you have the appropriate permissions and that your environment is properly configured before starting the tests. Also, verify that all dependent services are operational to avoid any interruptions during the test execution.

### References

- [Local Development](../development/local-development)
- [Synmetrix CLI](../development/cli)