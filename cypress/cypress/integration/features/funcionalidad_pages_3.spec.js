describe("Feature: Opcion Pages", () => {
    beforeEach(() => {
      cy.log("Given I navigate to admin page");
      cy.visit("http://localhost:2368/ghost/#/signin");
      cy.wait(2000);
    });
  
    it("Como owner/staff ingreso a Pages , cambio la hora de publicacion de la pagina", () => {
      cy.access_valid();
      cy.wait(3000);
  
      cy.log("And I navigate to page pages");
      cy.visit("http://localhost:2368/ghost/#/pages/");
      cy.wait(1000);
     
      cy.log("And Click in existed tag");
      cy.get('.gh-list > :nth-child(2)').click();
      cy.wait(1000);
       
       

      cy.log("And click en div publish");
      cy.wait(2000);
      cy.get('#ember93 > span').click()
      cy.wait(2000);
  

      cy.log("And click Publish");
      cy.wait(2000);
      cy.get('#ember149 > span').click();
      cy.wait(500);

      cy.get('#ember149 > span').contains("Updated");
      cy.wait(500);

      cy.wait(2000);
  
      cy.close_session();
      cy.wait(2000);
    });
  });
  