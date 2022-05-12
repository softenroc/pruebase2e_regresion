describe("Feature: Opcion Staff", () => {
  beforeEach(() => {
    cy.home_ghost3();
  });

  it("Como owner ingreso a Staff, actualizo el password del owner con menos de 10 caracteres entonces aparece mensaje de alerta y no deja guardar ", () => {
    cy.access_valid_ghost3();
    cy.wait(3000);

    cy.log("And I navigate to page staff");
    cy.visit("http://localhost:3001/ghost/#/staff/");
    cy.log("And Click en link owner into staff users");
    cy.get(
      "#ember64 > .apps-card-app > .apps-card-right > .apps-configured > .gh-badge"
    ).click();
    cy.wait(1000);
    cy.log(
      "And I fill on element having id user-password-old with text abcd1234567"
    );
    cy.wait(1000);
    cy.get('input[id="user-password-old"]')
      .clear()
      .should("be.visible")
      .type("abcd1234567", { force: true })
      .should("have.value", "abcd1234567");

    cy.wait(1000);
    cy.log(
      "And I fill on element having id user-password-new with shortpwd"
    );
    cy.wait(1000);
    cy.get('input[id="user-password-new"]')
      .clear()
      .should("be.visible")
      .type("shortpwd", { force: true })
      .should("have.value", "shortpwd");

    cy.wait(1000);
    cy.log(
      "And I fill on element having id user-new-password-verification with text shortpwd"
    );
    cy.wait(1000);
    cy.get('input[id="user-new-password-verification"]')
      .clear()
      .should("be.visible")
      .type("shortpwd", { force: true })
      .should("have.value", "shortpwd");

    cy.wait(2000);
    cy.log("And I click save button");
    cy.get('#ember93 > span').click();
    cy.wait(2000);
    cy.log(
      "Then Validate text main owner response equals to Password must be at least 10 characters long"
    );
    cy.get('#ember91 > .response').should(($p) => {
        const message = $p.text();
        expect(message).contain( "Password must be at least 10 characters long");
      });
    cy.wait(2000);
    cy.close_session_ghost3();    
    cy.wait(2000);
  });
});
