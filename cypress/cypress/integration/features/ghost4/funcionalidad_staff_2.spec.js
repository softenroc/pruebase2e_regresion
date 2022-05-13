describe("Feature: Opcion Staf", () => {
    beforeEach(() => {
      cy.home_ghost4();
    });
  
    it(" Como owner ingreso a Staff, link author cambio la informacion de mi website para validar la actualizacion de datos ", () => {
      cy.access_valid_ghost4();
      cy.wait(3000);
     
      cy.log("And I navigate to page staff");
      cy.visit(Cypress.env('baseUrl_ghost3')+"/ghost/#/staff/");
      cy.log("And Click en link author into staff users");
      cy.get('#ember69 > .apps-card-app > .apps-card-right > .apps-configured > .gh-badge').click();
      cy.wait(1000);
      cy.log(
        "And I fill on element having id user-website with text http://www.kraken-node.com"
      );
      cy.wait(1000);
      cy.get('input[id="user-website"]')
        .clear()
        .should("be.visible")
        .type("http://www.kraken-node.com", { force: true })
        .should("have.value", "http://www.kraken-node.com");
      cy.wait(2000);
      cy.log("And I click save button");
      cy.get('#ember86 > span').click();
      cy.wait(1000);
      cy.visit(Cypress.env('baseUrl_ghost3')+"/ghost/#/staff/");
      cy.wait(1000);
      cy.visit(Cypress.env('baseUrl_ghost3')+"/ghost/#/staff/ghost");      
      cy.log(
        "Then Validate value text having id user-website equals to  http://www.kraken-node.com"
      );
      cy.wait(1000);
      cy.get('input[id="user-website"]').should("have.value", "http://www.kraken-node.com");
      cy.wait(4000);

      cy.visit(Cypress.env('baseUrl_ghost3')+"/ghost/#/staff/");
      cy.close_session_ghost4();
      cy.wait(2000);
    });
  });