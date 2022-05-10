// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("access_valid", () => {
  cy.log("When I enter email registry");
  cy.get('input[id="ember8"]').type("df.rojasr1@uniandes.edu.co");
  cy.wait(2000);
  cy.log("And I enter password ");
  cy.get('input[id="ember10"]').type("abcd1234567");
  cy.wait(2000);
  cy.log("And I click on element having id ember12");
  cy.get('button[id="ember12"]').click();
});

Cypress.Commands.add("close_session", () => {
  cy.log("Then Close the sesion");
  cy.wait(2000);
  cy.visit("http://localhost:2368/ghost/#/signout");
  cy.wait(2000);
});
