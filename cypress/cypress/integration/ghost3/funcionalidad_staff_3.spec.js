describe("Feature: Opcion Staff", () => {
  beforeEach(() => {
    cy.home_ghost3();
  });

  it(" Como owner ingreso a Staff, actualizo el valor del correo del autor a un formato errado entonces aparece mensaje de alerta y no deja guardar ", () => {
    cy.access_valid_ghost3();
    cy.wait(3000);

    cy.log("And I navigate to page staff");
    cy.visit(Cypress.env('baseUrl_ghost3')+"/ghost/#/staff/");
    cy.log("And Click en link owner into staff users");
    cy.get(
      "#ember64 > .apps-card-app > .apps-card-right > .apps-configured > .gh-badge"
    ).click();
    cy.wait(1000);
    cy.log(
      "And I fill on element having id user-email with text formato_errado_mail.com"
    );
    cy.wait(1000);
    cy.get('input[id="user-email"]')
      .clear()
      .should("be.visible")
      .type("formato_errado_mail.com", { force: true })
      .should("have.value", "formato_errado_mail.com");
    cy.wait(2000);
    cy.log("And I click save button");
    cy.get("#ember76 > span").click();
    cy.wait(2000);

    cy.log(
      " Then Validate text main author response equals to Please supply a valid email address"
    );
    cy.get("#ember83 > .response").should(($p) => {
      const message = $p.text();
      expect(message).contain("Please supply a valid email address");
    });
    cy.wait(2000);
    cy.close_session_ghost3();
    cy.wait(2000);
    cy.get(".modal-footer > .gh-btn-red > span").click();
    cy.wait(2000);
  });
});
