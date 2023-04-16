import AccountData from "../fixtures/accontData";

declare global{
  namespace Cypress {
    interface Chainable {
       generateToken({secret}): void;
       login(email?: string, password?: string): void;
       logout(): void;
       signup(username?: string, email?: string, password?: string): void;
    }
  }
}

Cypress.Commands.add('login', (email = AccountData.email, password = AccountData.password) => {
  const apiEndpoint = 'https://conduit.productionready.io/api/users/login';
  const headers = { 'Content-Type': 'application/json' };

  cy.visit('')
  .request({
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
    localStorage.setItem('jwt', response.body.user.token);
    cy.reload()
    cy.get("a.nav-link[href='#login']", {timeout: 5000}).should('not.be.exist')
    cy.log(AccountData.newEmail)
  });
});

  Cypress.Commands.add('logout', () => {
    cy.visit('')
    localStorage.removeItem('jwt');
    cy.reload()
    cy.get("a.nav-link[href='#login']", {timeout: 5000}).should('be.exist')
  });

  Cypress.Commands.add('signup', (
    username = AccountData.getNewUsername(),
    email = AccountData.getNewEmail(),
    password = AccountData.getNewPassword()) => {
    cy.visit('')
    .request({
    method: 'POST',
    url: 'https://conduit.productionready.io/api/users/',
    body: {
        user: {
        username: username,
        email: email,
        password: password
        }
    }
    }).then((response) => {
    localStorage.setItem('jwt', response.body.user.token);
    cy.reload()
    cy.get("a.nav-link[href='#login']", {timeout: 5000}).should('not.be.exist')
    });
  });