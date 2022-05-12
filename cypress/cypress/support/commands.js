// ***********************************************
// Commands Equipo24 

Cypress.Commands.add("access_valid_ghost3", () => {
    cy.log("When I enter email registry");
    cy.get('input[id="ember8"]').type(Cypress.env('user'));
    cy.wait(2000);
    cy.log("And I enter password ");
    cy.get('input[id="ember10"]').type(Cypress.env('password'));
    cy.wait(2000);
    cy.log("And I click on element having id ember12");
    cy.get('button[id="ember12"]').click();
  });
  
  Cypress.Commands.add("close_session_ghost3", () => {
    cy.log("Then Close the sesion");
    cy.wait(2000);
    cy.visit(Cypress.env('baseUrl_ghost3')+"/ghost/#/signout");
    cy.wait(2000);
  });
  
  Cypress.Commands.add("home_ghost3", () => {
    cy.log("Given I navigate to admin page");
    cy.visit(Cypress.env('baseUrl_ghost3')+"/ghost/#/signin");
    cy.wait(2000);
  });