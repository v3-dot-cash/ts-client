
# Getting Started with v3.cash

## Introduction

Admin Portal to fetch data required for running apis: [/admin/tenants](/admin/tenants)

## Building

### Requirements

The SDK relies on **Node.js** and **npm** (to resolve dependencies). You can download and install Node.js and [npm](https://www.npmjs.com/) from [the official Node.js website](https://nodejs.org/en/download/).

> **NOTE:** npm is installed by default when Node.js is installed.

### Verify Successful Installation

Run the following commands in the command prompt or shell of your choice to check if Node.js and npm are successfully installed:

* Node.js: `node --version`

* npm: `npm --version`

![Version Check](https://apidocs.io/illustration/typescript?workspaceFolder=V3Cash&step=versionCheck)

### Install Dependencies

- To resolve all dependencies, go to the **SDK root directory** and run the following command with npm:

```bash
npm install
```

- This will install all dependencies in the **node_modules** folder.

![Resolve Dependencies](https://apidocs.io/illustration/typescript?workspaceFolder=V3Cash&workspaceName=v-3-cashlib&step=resolveDependency)

## Installation

The following section explains how to use the generated library in a new project.

### 1. Initialize the Node Project

- Open an IDE/text editor for JavaScript like Visual Studio Code. The basic workflow presented here is also applicable if you prefer using a different editor or IDE.

- Click on **File** and select **Open Folder**. Select an empty folder of your project, the folder will become visible in the sidebar on the left.

![Open Folder](https://apidocs.io/illustration/typescript?step=openProject)

- To initialize the Node project, click on **Terminal** and select **New Terminal**. Execute the following command in the terminal:

```bash
npm init --y
```

![Initialize the Node Project](https://apidocs.io/illustration/typescript?step=initializeProject)

### 2. Add Dependencies to the Client Library

- The created project manages its dependencies using its `package.json` file. In order to add a dependency on the *v3.cashLib* client library, double click on the `package.json` file in the bar on the left and add the dependency to the package in it.

![Add V3Cashlib Dependency](https://apidocs.io/illustration/typescript?workspaceFolder=V3Cash&workspaceName=v-3-cashlib&step=importDependency)

- To install the package in the project, run the following command in the terminal:

```bash
npm install
```

![Install V3Cashlib Dependency](https://apidocs.io/illustration/typescript?step=installDependency)

## Initialize the API Client

**_Note:_** Documentation for the client can be found [here.](/doc/client.md)

The following parameters are configurable for the API Client:

| Parameter | Type | Description |
|  --- | --- | --- |
| `timeout` | `number` | Timeout for API calls.<br>*Default*: `0` |
| `httpClientOptions` | `Partial<HttpClientOptions>` | Stable configurable http client options. |
| `unstableHttpClientOptions` | `any` | Unstable configurable http client options. |

The API client can be initialized as follows:

```ts
const client = new Client({
  timeout: 0,
})
```

## List of APIs

* [Account Holder Pipeline](/doc/controllers/account-holder-pipeline.md)
* [Account Holder](/doc/controllers/account-holder.md)
* [Payment Request](/doc/controllers/payment-request.md)

## Classes Documentation

* [ApiResponse](/doc/api-response.md)
* [ApiError](/doc/api-error.md)

