describe("Feature: Opcion Pages", () => {
  beforeEach(() => {
    cy.log("Given I navigate to admin page");
    cy.visit("http://localhost:2368/ghost/#/signin");
    cy.wait(2000);
  });

  it("Como owner/staff ingreso a Pages para crear una nueva página", () => {
    cy.access_valid();
    cy.wait(3000);

    cy.log("And I navigate to page pages");
    cy.visit("http://localhost:2368/ghost/#/pages/");
    cy.wait(1000);
    cy.log("And click en new page");
    cy.visit("http://localhost:2368/ghost/#/editor/page");

    cy.log("And I fill title with text Testing with Kraken");
    cy.wait(1000);
    cy.get('textarea[class="gh-editor-title ember-text-area gh-input ember-view"]')
      .clear()
      .should("be.visible")
      .type("Testing with Kraken", { force: true })
      .should("have.value", "Testing with Kraken");
    cy.wait(2000);

    cy.log("Save");
    cy.wait(2000);
    cy.get('button[class="post-settings"]').click();
    cy.wait(2000);

    cy.log("And I navigate to page pages");
    cy.visit("http://localhost:2368/ghost/#/pages/");
    cy.wait(1000);
    cy.log("And Click in existed tag");
    cy.get('.gh-list > :nth-child(2)').click();
    cy.wait(1000);
    cy.log(
      "Then Validate title equals to Testing with Kraken"
    );
    cy.get('textarea[class="gh-editor-title ember-text-area gh-input ember-view"]').should("have.value", "Testing with Kraken");
    cy.wait(4000);

    cy.close_session();
    cy.wait(2000);
  });
});
