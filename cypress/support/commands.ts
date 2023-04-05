const { default: AccountData } = require("../fixtures/accontData");

declare namespace Cypress {
  interface Chainable<Subject> {
     generateToken({secret}): void;
     login(email?: string, password?: string): void;
     logout(): void;
     signup(username?: string, email?: string, password?: string): void;
  }
}

Cypress.Commands.add('login', (email = AccountData.email, password = AccountData.password) => {
    const apiEndpoint = 'https://conduit.productionready.io/api/users/login';
    const headers = { 'Content-Type': 'application/json' };
  
    cy.request({
      method: 'POST',
      url: apiEndpoint,
      headers: headers,
      body: {
        user: {
          email: email,
          password: password,
        },
      },
    }).then(response => {
      window.localStorage.setItem('jwt', response.body.user.token);
    });
    cy.visit('')
  });

  Cypress.Commands.add('logout', () => {
    window.localStorage.removeItem('jwt');
    cy.visit('')
  });

  Cypress.Commands.add('signup', (
    username = AccountData.getNewUsername,
    email = AccountData.getNewEmail,
    password = AccountData.getNewPassword) => {
    cy.request({
    method: 'POST',
    url: 'https://conduit.productionready.io/api/users',
    body: {
        user: {
        username: username,
        email: email,
        password: password
        }
    }
    }).then((response) => {
    window.localStorage.setItem('jwt', response.body.user.token);
    });
    cy.visit('')
  });