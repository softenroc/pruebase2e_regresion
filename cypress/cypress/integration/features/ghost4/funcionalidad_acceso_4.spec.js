describe("Feature: Acceso a la plataforma", () => {
    beforeEach(() => {
      cy.home_ghost4();
    });
  
    it(" Como usuario registrado ingreso un usuario valido y una contraseña invalida entonces retorne password incorrecto", () => {
      cy.log("When I enter email registry");
      cy.get('input[id="ember8"]').type(Cypress.env('user'));      
      cy.wait(2000);
      cy.wait(2000);
      cy.log("And I enter bad password");
      cy.get('input[id="ember10"]').type("badpassword");
      cy.log("And I click on element having id ember12");
      cy.get('button[id="ember12"]').click();
      cy.wait(3000);
      cy.log("Validate text main error to login equals to <Your password is incorrect.>");
      cy.get('p[class="main-error"]').should(($p) => {
          const message = $p.text();
          expect(message).contain("Your password is incorrect.");
      });
      cy.wait(2000);
    });
  });
  