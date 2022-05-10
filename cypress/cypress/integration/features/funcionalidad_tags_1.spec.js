describe("Feature: Opcion Tags", () => {
  beforeEach(() => {
    cy.log("Given I navigate to admin page");
    cy.visit("http://localhost:2368/ghost/#/signin");
    cy.wait(2000);
  });

  it(" Cuando creamos un nuevo tag y no se asigna un nombre al tag entonces no deja guardar el tag y muestra un mensaje de error", () => {
    cy.access_valid();
    cy.wait(3000);

    cy.log("And I navigate to page tags");
    cy.visit("http://localhost:2368/ghost/#/tags/");
    cy.log("And click in button new tag");
    cy.get("#ember64 > span").click();
    cy.wait(2000);
    cy.log("And I click save button");
    cy.get('#ember73 > span').click();
    cy.wait(2000);
    cy.log(
      "Then Validate text main new tag response equals to You must specify a name for the tag."
    );
    cy.get(".error > :nth-child(1)").should(($p) => {
      const message = $p.text();
      expect(message).contain("You must specify a name for the tag.");
    });

    cy.wait(2000);
    cy.close_session();
    cy.wait(2000);
    cy.get(".modal-footer > .gh-btn-red > span").click();
    cy.wait(2000);
  });
});
