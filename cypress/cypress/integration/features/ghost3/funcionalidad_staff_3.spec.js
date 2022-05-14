describe("Feature: Opcion Staff", () => {
  beforeEach(() => {
    cy.home_ghost3();
  });

  it(" Como owner ingreso a Staff, actualizo el valor del correo del autor a un formato errado entonces aparece mensaje de alerta y no deja guardar ", () => {
    cy.access_valid_ghost3();
    cy.wait(3000);
    cy.navigate_staff_ghost3();
    cy.click_owner_staff_ghost3();
    cy.input_email_staff_ghost3();
    cy.click_save_staff_ghost3();

    cy.validate_email_staff_ghost3();
    cy.close_session_ghost3();
    cy.wait(2000);
    cy.get(".modal-footer > .gh-btn-red > span").click();
    cy.wait(2000);
  });
});
