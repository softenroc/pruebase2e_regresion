describe("Feature: Acceso a la plataforma", () => {
  beforeEach(() => {
    cy.log("Given I navigate to admin page");
    cy.visit("http://localhost:2368/ghost/#/signin");
    cy.wait(2000);
  });

  it(" Como usuario registrado ingreso un usuario y una contraseña valida y acceso a la plataforma ", () => {
    cy.access_valid();
    cy.wait(3000);
    cy.close_session();
    cy.wait(2000);
  });
});