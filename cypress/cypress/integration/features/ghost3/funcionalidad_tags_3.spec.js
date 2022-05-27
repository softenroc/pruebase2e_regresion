describe("Feature: Opcion Tags", () => {
    beforeEach(() => {
      cy.home_ghost3();
    });
  
    it("Cuando abrimos un tag existe y actualizamos el color, entonces se debe guardar la actualizacion", () => {
      cy.access_valid_ghost3();
      cy.wait(3000);
      cy.navigate_tags_ghost3();
      cy.navigate_new_tag_ghost3();
      cy.input_name_color_tag_ghost3("0FE3F1");
      cy.click_save_staff_ghost3();
      cy.navigate_tags_ghost3();
      cy.navigate_new_tag_ghost3();
      cy.validate_modificate_color_tag_ghost3();
      cy.close_session_ghost3();
      cy.wait(2000);
    });
  });
  