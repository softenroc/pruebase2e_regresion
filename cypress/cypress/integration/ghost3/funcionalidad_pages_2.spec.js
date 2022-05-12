describe("Feature: Opcion Pages", () => {
    beforeEach(() => {
      cy.home_ghost3();
    });
  
    it("Como owner/staff ingreso a Pages , edito una pagina existente y se actualiza la pagina", () => {
      cy.access_valid_ghost3();
      cy.wait(3000);
  
      cy.log("And I navigate to page pages");
      cy.visit("http://localhost:3001/ghost/#/pages/");
      cy.wait(1000);
     
      cy.log("And Click in existed tag");
      cy.get('.gh-list > :nth-child(2)').click();
      cy.wait(1000);
       
      cy.log("And I fill title with text Testing with Kraken Updated");
      cy.wait(1000);
      cy.get('textarea[class="gh-editor-title ember-text-area gh-input ember-view"]')
        .clear()
        .should("be.visible")
        .type("Testing with Kraken Updated", { force: true })
        .should("have.value", "Testing with Kraken Updated");
      cy.wait(2000);
  

      cy.log("Save");
      cy.wait(2000);
      cy.get('button[class="post-settings"]').click();
      cy.wait(2000);
  
      cy.log("And I navigate to page pages");
      cy.visit("http://localhost:3001/ghost/#/pages/");
      cy.wait(1000);
      cy.log("And Click in existed tag");
      cy.get('.gh-list > :nth-child(2)').click();
      cy.wait(1000);
      cy.log(
        "Then Validate title equals to Testing with Kraken Updated"
      );
      cy.get('textarea[class="gh-editor-title ember-text-area gh-input ember-view"]').should("have.value", "Testing with Kraken Updated");
      cy.wait(4000);
  
      cy.close_session_ghost3();
      cy.wait(2000);
    });
  });
  