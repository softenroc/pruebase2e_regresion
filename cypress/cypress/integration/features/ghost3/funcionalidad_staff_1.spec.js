describe("Feature: Opcion Staf", () => {
  beforeEach(() => {
    cy.home_ghost3();
  });

  it(" Como owner ingreso a Staff , link owner y cambio la informacion de mi localizacion para validar la actualizacion de datos ", () => {
    cy.access_valid_ghost3();
    cy.wait(3000);
    cy.navigate_staff_ghost3();
    cy.screenshot();
    cy.click_owner_staff_ghost3();
    cy.screenshot();
    cy.input_location_staff_ghost3();
    cy.screenshot();
    cy.click_save_staff_ghost3();
    cy.screenshot();
    cy.navigate_staff_ghost3();
    cy.screenshot();
    cy.click_owner_staff_ghost3();
    cy.screenshot();
    cy.validate_location_staff_ghost3();
    cy.screenshot();
    cy.close_session_ghost3();
    cy.wait(2000);
  });
});
