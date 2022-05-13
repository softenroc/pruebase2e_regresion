describe("Feature: Opcion Tags", () => {
    beforeEach(() => {
      cy.home_ghost4();
    });
  
    it("Cuando damos clic en eliminar un tag entonces el tag se elimina del listado de tags existentes", () => {
      cy.access_valid_ghost4();
      cy.wait(3000);
  
      cy.log("And I navigate to page tags");
      cy.visit(Cypress.env('baseUrl_ghost3')+"/ghost/#/tags/");
      cy.wait(3000);

      cy.log("And I navigate to new tag created");
      cy.visit(Cypress.env('baseUrl_ghost3')+"/ghost/#/tags/new-tag-with-kraken");              
      cy.wait(2000);
  
      cy.wait(2000);
      cy.log("And I click delete button");
      cy.get('button[class="gh-btn gh-btn-red gh-btn-icon mb15"]').click();
      cy.wait(2000);

      cy.wait(2000);
      cy.log("And I click confirmation delete tag");
      cy.get('button[class="gh-btn gh-btn-red gh-btn-icon ember-view"]').click();
      cy.wait(2000);
    
      cy.log("And I navigate to page tags");
      cy.visit(Cypress.env('baseUrl_ghost3')+"/ghost/#/tags/");
      cy.wait(3000);

      cy.log("And I navigate to new tag created");
      cy.visit(Cypress.env('baseUrl_ghost3')+"/ghost/#/tags/new-tag-with-kraken");              
      cy.wait(2000);
  
      cy.log("Validate tag page not found");
      cy.wait(1000);
      cy.get('h2[class="midlightgrey f4 fw3"]').should(($p) => {
        const message = $p.text();
        expect(message).contain("Page not found");
      });
  
      cy.wait(2000);
      cy.close_session_ghost4();
      cy.wait(2000);
    });
  });
  