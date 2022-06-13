# ebac-store-automation

# Automation Test Components with Cypress

This is the repository for automation of web projects, developed to work with Cypress.

## Table of Contents

1. [Goal](#goal)
2. [Project Structure](#project-structure)
3. [Features](#features)
4. [Data](#data)
5. [Initial Setup](#initial-setup)
6. [Run Automation](#run-automation)

## Goal

The goal of this repository is to be easy to understand focused on developing automated tests for Web, using [Cypress](https://www.cypress.io/), a tool developed in JavaScript language that provides speed, ease and reliability in the tests.

The architecture developed for this project meets the need to centralize only a single BDD (Behavior Driven Development) separated by value stream that can be executed for any zone.

This project can be executed in Chrome, Firefox and Edge browsers

## Project Structure

```
|--- cypress
|----- elementsMapping
|----- fixtures
|----- integration
|-------- steps
|-------- features
|----- pages
|----- plugin
|-------- index
|----- screenshots
|----- support
|-------- commands
|-------- index
|-------- DataMap
|-------- PagesMap
|-------- ImportsSupport
|----- videos
|----- screenshots
|--- scripts
|----- autoConfigureCountries.ts
|----- cli.ts
|----- consts.ts
|----- identifyBadSelectors.ts
|----- migrate-passwords.ts
|--- .env
|--- .env.sample
|--- cypress.json
|--- package.json
|--- tsconfig.json
|--- tslint.json
```

## Features

The features were written using the Gherkin language for BDD (Behavior Driven Development) in English. Each feature corresponds to a specific value stream.

## Data

All data used in the execution of the automated tests will be in a .json file, separated by folders with the name of its zone, located inside the "fixtures".

## Run tests

### Initial Setup

1. Requires node. To install, execute `npm install node` or download [Node](https://nodejs.org/en/download/)
2. Run the command `cd components` to into in components folder
3. Run the command `npm install` to install dependencies
4. Create a `.env` file based of `.env.sample` file inside `components` directory
5. Ask your engineering coordinator for credentials, and add them into `.env` file
6. Ask your engineering coordinator for `MS_ACCOUNT_RELAY_SECRET`, `MS_CLIENT_ID`, and `MS_CLIENT_SECRET` values for `.env` in order to create delivery windows


#### .env File Configurations

| Environment Variable | Required | Description | 
| --- | --- | --- |
| `RELEASE_VERSION` | No | Release Version if you are running smoke tests for a given release. Required to post test case results |
| `ZEPHYR_TOKEN` | No | Personal Access Token for Zephyr in Jira. Required to post test case results |
| `JIRA_TOKEN` | No | Personal Access Token for Jira. Required to post test case results |
| `MS_ACCOUNT_RELAY_SECRET` | No | Microservice Account Relay Basic Auth password |
| `MS_CLIENT_ID` | No | Client ID to get the M2M Token for microservice authentication |
| `MS_CLIENT_SECRET` | No | Client Secret to get the M2M Token for microservice authentication |
| `CYPRESS_{COUNTRY}_{ENVIRONMENT}_COUNTRY` | Yes | Per country and environment, this is the password for logging into the frontend. e.g. `CYPRESS_CO_SIT_PASSWORD` |


### Command line to run tests in headless browser

- Run one of the commands below to run the tests.
  Examples:
- To run tests in SIT environment for BR zone using Chrome browser, execute `npm run test:chrome -- -e TAGS=@BR,zone=BR,environment=SIT --headless`
- To run tests in UAT environment for BR zone using Firefox browser, execute `npm run test:firefox -- -e TAGS=@BR,zone=BR,environment=UAT --headless`
<p>

| Commands                                                         | Description                                                                                                                         |
| ---------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| `npm run test:chrome -- -e TAGS=,zone=,environment= --headless`  | Execute all tests in headless Chrome browser; is mandatory to inform the 'TAGS', 'zone' and 'environment' you want to run the test  |
| `npm run test:firefox -- -e TAGS=,zone=,environment= --headless` | Execute all tests in headless Firefox browser; is mandatory to inform the 'TAGS', 'zone' and 'environment' you want to run the test |

### Command line to run tests opening a browser

- Run one of the commands below to run the tests.
  Examples:
- To run tests in SIT environment for BR zone using Chrome browser, execute `npm run test:chrome -- -e TAGS=@BR,zone=BR,environment=SIT`
- To run tests in UAT environment for BR zone using Firefox browser, execute `npm run test:chrome -- -e TAGS=@smoke_nfa_dev,zone=BR,environment=UAT`
<p>

| Commands                                              | Description                                                                                                                    |
| ----------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| `npm run test:chrome -- -e TAGS=,zone=,environment=`  | Execute all test opening Chrome browser; is mandatory to inform the 'TAGS', 'zone' and 'environment' you want to run the test  |
| `npm run test:firefox -- -e TAGS=,zone=,environment=` | Execute all test opening Firefox browser; is mandatory to inform the 'TAGS', 'zone' and 'environment' you want to run the test |

### Command line to run tests using Cypress test runner

- Run one of the commands below to run the tests.
  Examples:
- To run tests in SIT environment for BR zone using chrome browser, execute `npx cypress open test:chrome -e TAGS=@BR,zone=BR,environment=SIT`
- To run tests in UAT environment for BR zone using firefox browser, execute `npx cypress open test:chrome -e TAGS=@BR,zone=BR,environment=UAT`
- Cypress has a [test runner](https://docs.cypress.io/guides/core-concepts/test-runner.html#Overview) to execute the tests manually. To open it, execute one of the commands below:
<p>

| Commands                                                    | Description                                                                                                                                                   |
| ----------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `npx cypress open test:chrome -e TAGS=,zone=,environment=`  | Open Cypress test runner to select a test to execute in Chrome browser; is mandatory to inform the 'TAGS', 'zone' and 'environment' you want to run the test  |
| `npx cypress open test:firefox -e TAGS=,zone=,environment=` | Open Cypress test runner to select a test to execute in Firefox browser; is mandatory to inform the 'TAGS', 'zone' and 'environment' you want to run the test |

<p>
