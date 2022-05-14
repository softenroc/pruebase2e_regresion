describe("Feature: Acceso a la plataforma", () => {
  beforeEach(() => {
    cy.home_ghost3();
  });

  it(" Como usuario no registrado ingreso un usuario y una contraseña invalida entonces retorne mensaje indicando que el usuario no existe", () => {
    cy.log("When I enter email not registry");
    cy.get('input[id="ember8"]').type("bad@uniandes.edu.co");
    cy.wait(2000);
    cy.log("And In ghost3 I enter password  ");
    cy.get('input[id="ember10"]').type("313213");
    cy.wait(2000);
    cy.log("And I click on element having id ember12");
    cy.get('button[id="ember12"]').click();
    cy.wait(3000);
    cy.log(" Then Validate text main error to login equals to <There is no user with that email address>");
    cy.get('p[class="main-error"]').should(($p) => {
        const message = $p.text();
        expect(message).contain("There is no user with that email address.");
    });
    cy.wait(2000);
  });
});
