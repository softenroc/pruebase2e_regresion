describe("Feature: Opcion Tags", () => {
  beforeEach(() => {
    cy.home_ghost4();
  });

  it(" Cuando creamos un nuevo tag y no se asigna un nombre al tag entonces no deja guardar el tag y muestra un mensaje de error", () => {
    cy.access_valid_ghost4();
    cy.wait(3000);
    cy.navigate_tags_ghost4();
    cy.screenshot();
    cy.click_new_tag_ghost4();
    cy.screenshot();
    cy.click_save_staff_ghost4();
    cy.screenshot();
    cy.validate_name_tag_ghost4();
    cy.screenshot();
    cy.close_session_ghost4();
    cy.wait(2000);
    cy.get(".modal-footer > .gh-btn-red > span").click();
  });
});
