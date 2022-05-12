describe("Feature: Acceso a la plataforma", () => {
  beforeEach(() => {
    cy.home_ghost4();
  });

  it(" Como usuario registrado ingreso un usuario y una contraseña valida y acceso a la plataforma ", () => {
    cy.access_valid_ghost4();
    cy.wait(3000);
    cy.close_session_ghost4();
    cy.wait(2000);
  });
});
