describe("Feature: Opcion Tags", () => {
    beforeEach(() => {
      cy.home_ghost4();
    });
  
    it("Cuando abrimos un tag existe y actualizamos el color, entonces se debe guardar la actualizacion", () => {
      cy.access_valid_ghost4();
      cy.wait(3000);
  
      cy.log("And I navigate to page tags");
      cy.visit(Cypress.env('baseUrl_ghost3')+"/ghost/#/tags/");
      cy.wait(3000);

      cy.log("And I navigate to new tag created");
      cy.visit(Cypress.env('baseUrl_ghost3')+"/ghost/#/tags/new-tag-with-kraken");              
      cy.wait(2000);
  
  
      cy.log(
        "And I fill on element having id input[name=accent-color] with 0FE3F1"
      );
      cy.wait(1000);
      cy.get('input[name="accent-color"]')
        .clear()
        .should("be.visible")
        .type("0FE3F1", { force: true })
        .should("have.value", "0FE3F1");
  
    
      cy.wait(2000);
      cy.log("And I click save button");
      cy.get('#ember78 > span').click();
      cy.wait(2000);
  
      cy.log("And I navigate to page tags");
      cy.visit(Cypress.env('baseUrl_ghost3')+"/ghost/#/tags/");
      cy.wait(3000);

      cy.log("And I navigate to new tag created");
      cy.visit(Cypress.env('baseUrl_ghost3')+"/ghost/#/tags/new-tag-with-kraken");              
      cy.wait(2000);
  
     
      cy.log(
        "Then Validate value text having name accent-color equals to0FE3F1"
      );
      cy.get('input[name="accent-color"]').should("have.value", "0FE3F1");
       
  
      cy.wait(2000);
      cy.close_session_ghost4();
      cy.wait(2000);
    });
  });
  