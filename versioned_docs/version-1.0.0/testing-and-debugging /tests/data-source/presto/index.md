---
id: presto
title: Presto
slug: /testing-and-debugging/tests/data-source/presto
sidebar_label: Presto
---

# PrestoDB

Tested on the [starburstdata/presto](https://hub.docker.com/r/starburstdata/presto) image.

## Step 1: Navigate to the PrestoDB example directory

Navigate to the PrestoDB example directory located at `/docs/examples/prestodb` in the root of the Synmetrix project. You can also download this directory from the GitHub repository. To navigate to the directory, run the following command:

```bash
cd ./docs/examples/prestodb
```

## Step 2: Run the PrestoDB service using the script

In the PrestoDB example directory, there is a script called `run_prestodb.sh`. Make sure the script is executable by running:

```bash
chmod +x run_prestodb.sh
```

Then, start the PrestoDB service by running the script:

```bash
./run_prestodb.sh
```

After the script has finished running, it will return the host IP address of your machine. Take note of this IP address for the next step.

## Step 3: Add a data source in the Synmetrix UI

Go to the Synmetrix UI and add a new data source with the following parameters:

* Name: PrestoDB Test
* Host: Host IP (obtained from the script in Step 2)
* Port: 8050
* Catalog: tpch
* User: user

## Step 4: Test the connection
Click the "Check connection" button in the Synmetrix UI to verify the connection to the PrestoDB data source. If the connection is successful, you will see a confirmation message.