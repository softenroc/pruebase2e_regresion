describe("Feature: Acceso a la plataforma", () => {
    beforeEach(() => {
      cy.log("Given I navigate to admin page");
      cy.visit("http://localhost:2368/ghost/#/signin");
      cy.wait(2000);
    });
  
    it(" Como usuario no registrado quiero recuperar una contraseña entonces retorne mensaje usuario no existe", () => {
      cy.log("When I enter email not registry");
      cy.get('input[id="ember8"]').type("test@uniandes.edu.co");      
      cy.wait(2000);
      cy.log("And I click on element having id ember11");
      cy.get('button[id="ember11"]').click();
      cy.wait(3000);
      cy.log("Validate text main error to login equals to <User not found.>");
      cy.get('p[class="main-error"]').should(($p) => {
          const message = $p.text();
          expect(message).contain("User not found.");
      });
      cy.wait(2000);
    });
  });
  