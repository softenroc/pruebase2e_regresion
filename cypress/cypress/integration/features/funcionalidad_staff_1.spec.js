describe("Feature: Opcion Staf", () => {
  beforeEach(() => {
    cy.log("Given I navigate to admin page");
    cy.visit("http://localhost:2368/ghost/#/signin");
    cy.wait(2000);
  });

  it(" Como owner ingreso a Staff , link owner y cambio la informacion de mi localizacion para validar la actualizacion de datos ", () => {
    cy.access_valid();
    cy.wait(3000);

    cy.log("And I navigate to page staff");
    cy.visit("http://localhost:2368/ghost/#/staff/");
    cy.log("And Click en link owner into staff users");
    cy.get(
      "#ember64 > .apps-card-app > .apps-card-right > .apps-configured > .gh-badge"
    ).click();
    cy.wait(1000);
    cy.log(
      "And I fill on element having id user-location with text Bucaramanga"
    );
    cy.wait(1000);
    cy.get('input[id="user-location"]')
      .clear()
      .should("be.visible")
      .type("Bucaramanga", { force: true })
      .should("have.value", "Bucaramanga");
    cy.wait(2000);
    cy.log("And I click save button");
    cy.get("#ember76 > span").click();
    cy.wait(2000);
    cy.log("And I navigate to page staff");
    cy.visit("http://localhost:2368/ghost/#/staff/");
    cy.wait(1000);
    cy.log("And Click en link owner into staff users");
    cy.get(
      "#ember107 > .apps-card-app > .apps-card-right > .apps-configured > .gh-badge"
    ).click();
    cy.wait(1000);
    cy.log(
      "Then Validate value text having id user-location equals to Bucaramanga"
    );
    cy.get('input[id="user-location"]').should("have.value", "Bucaramanga");
    cy.wait(4000);

    cy.close_session();
    cy.wait(2000);
  });
});
