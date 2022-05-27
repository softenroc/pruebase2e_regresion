describe("Feature: Opcion Staff", () => {
  beforeEach(() => {
    cy.home_ghost3();
  });

  it("Como owner ingreso a Staff, actualizo el password del owner con menos de 10 caracteres entonces aparece mensaje de alerta y no deja guardar ", () => {
    cy.access_valid_ghost3();
    cy.wait(3000);
    cy.navigate_staff_ghost3();
    cy.click_owner_staff_ghost3();
    cy.input_old_password_staff_ghost3();
    cy.input_new_password_staff_ghost3();
    cy.input_verification_password_staff_ghost3();
    cy.click_change_password_staff_ghost3();
    cy.validate_password_staff_ghost3();
    cy.close_session_ghost3();    
    cy.wait(2000);
  });
});
