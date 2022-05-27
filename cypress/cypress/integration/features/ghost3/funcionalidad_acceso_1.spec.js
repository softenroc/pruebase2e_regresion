describe("Feature: Acceso a la plataforma", () => {
  beforeEach(() => {
    cy.home_ghost3();
    cy.screenshot();
  });
  it(" Como usuario registrado ingreso un usuario y una contraseña valida y acceso a la plataforma ", () => {
    cy.access_valid_ghost3();
    cy.screenshot();
    cy.wait(3000);
    cy.screenshot();
    cy.close_session_ghost3();
    cy.wait(2000);
  });
});
 