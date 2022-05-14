describe("Feature: Opcion Staf", () => {
    beforeEach(() => {
      cy.home_ghost3();
    });
  
    it(" Como owner ingreso a Staff, link author cambio la informacion de mi website para validar la actualizacion de datos ", () => {
      cy.access_valid_ghost3();
      cy.wait(3000);
      cy.navigate_staff_ghost3();
      cy.click_author_staff_ghost3();
      cy.input_website_staff_ghost3();
      cy.click_save_staff_ghost3();
      cy.navigate_staff_ghost3();
      cy.click_author_staff_ghost3();
      cy.validate_website_staff_ghost3();
      cy.close_session_ghost3();
      cy.wait(2000);
    });
  });