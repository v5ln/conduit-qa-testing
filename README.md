# Conduit QA Testing

This project is a training project for Foothill Technology Solutions QA training. The main focus of this project is to create an automated test suite for the [Conduit](https://react-redux.realworld.io) application using [Cypress](https://www.cypress.io).

## Table of Contents

- [Getting Started](#getting-started)
- [Test Suite Structure](#test-suite-structure)
- [Running the Tests](#running-the-tests)
- [Built With](#built-with)
- [Contributing](#contributing)

## Getting Started

These instructions will help you set up the project on your local machine for development and testing purposes.

### Prerequisites

- Node.js (version 12 or higher) and npm (version 6 or higher) installed on your local machine
- A code editor such as Visual Studio Code

### Installing

1. Clone the repository:

```bash
git clone https://github.com/v5ln/conduit-qa-testing.git
```

2. Change to the project directory:

```bash
cd conduit-qa-testing
```

3. Install the project dependencies:

```bash
npm install
```

## Test Suite Structure

The test suite is organized into the following main sections:

### [End-to-End Tests (e2e)](cypress/e2e)

Contains the test cases and features for the various parts of the application:

- [Common](cypress/e2e/common) - Common features for the application
  - [loginCommon.ts](cypress/e2e/common/loginCommon.ts)
  - [settingsCommon.ts](cypress/e2e/common/settingsCommon.ts)
  - [shared.ts](cypress/e2e/common/shared.ts)
  - [signupCommon.ts](cypress/e2e/common/signupCommon.ts)
  - [topBarComponentCommon.ts](cypress/e2e/common/topBarComponentCommon.ts)
- [Login](cypress/e2e/login) - Test cases for the login page
  - [TC1-login.feature](cypress/e2e/login/TC1-login.feature)
  - [TC1-login.ts](cypress/e2e/login/TC1-login/TC1-login.ts)
- [Signup](cypress/e2e/signup) - Test cases for the signup page
  - [TC2-signup.feature](cypress/e2e/signup/TC2-signup.feature)
  - [TC2-signup.ts](cypress/e2e/signup/TC2-signup/TC2-signup.ts)
- [Topbar](cypress/e2e/topbar) - Test cases for the top bar component
  - [TC3-topbar.feature](cypress/e2e/topbar/TC3-topbar.feature)
  - [TC3-topbar.ts](cypress/e2e/topbar/TC3-topbar/TC3-topbar.ts)
- [Settings](cypress/e2e/settings) - Test cases for the settings page
  - [TC4-settings.feature](cypress/e2e/settings/TC4-settings.feature)
  - [TC4-settings.ts](cypress/e2e/settings/TC4-settings/TC4-settings.ts)


### [Fixtures](cypress/fixtures)

Contains models and dummy data for the test suite:

- [accountData.ts](cypress/fixtures/accountData.ts)
- [articleData.ts](cypress/fixtures/articleData.ts)
- [model/user.ts](cypress/fixtures/model/user.ts)

### [Page Objects](cypress/pageObjects)

Contains actions and assertions for each page in the website:

- [Shared](cypress/pageObjects/shared)
  - [services.ts](cypress/pageObjects/shared/services.ts) - Services for interacting with the application
  - [utilities.ts](cypress/pageObjects/shared/utilities.ts) - Utilities and helper functions
- [loginPage](cypress/pageObjects/loginPage)
  - [actions.ts](cypress/pageObjects/loginPage/actions.ts) - Actions for interacting with the login page
  - [asserts.ts](cypress/pageObjects/loginPage/asserts.ts) - Assertions for verifying the login page state
- [settingsPage](cypress/pageObjects/settingsPage)
  - [actions.ts](cypress/pageObjects/settingsPage/actions.ts) - Actions for interacting with the settings page
  - [asserts.ts](cypress/pageObjects/settingsPage/asserts.ts) - Assertions for verifying the settings page state
- [signupPage](cypress/pageObjects/signupPage)
  - [actions.ts](cypress/pageObjects/signupPage/actions.ts) - Actions for interacting with the signup page
  - [asserts.ts](cypress/pageObjects/signupPage/asserts.ts) - Assertions for verifying the signup page state
- [topBarComponent](cypress/pageObjects/topBarComponent)
  - [actions.ts](cypress/pageObjects/topBarComponent/actions.ts) - Actions for interacting with the top bar component
  - [asserts.ts](cypress/pageObjects/topBarComponent/asserts.ts) - Assertions for verifying the top bar component state

### [Support](cypress/support)

Contains custom commands and configurations for the test suite:

- [commands.ts](cypress/support/commands.ts) - Custom Cypress commands for the test suite

## Running the Tests

To run the tests, you will need to have Cypress installed. If you haven't already, install Cypress by running `npm install cypress`. Then, open the Cypress Test Runner by running the following command:

```bash
npx cypress open
```

This will open the Cypress Test Runner, and you can run the tests by clicking on the test files or by clicking "Run all specs" to run all the test cases.

## Built With

- [Cypress](https://www.cypress.io) - The testing framework used
- [Cucumber](https://cucumber.io) - The behavior-driven development (BDD) tool used
- [TypeScript](https://www.typescriptlang.org) - The programming language used for the tests

## Contributing

Contributions are welcome! If you have any suggestions, ideas, or improvements for this project, feel free to submit a pull request or create an issue.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Create a new Pull Request