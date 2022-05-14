describe("Feature: Opcion Tags", () => {
    beforeEach(() => {
      cy.home_ghost3();
    });
  
    it("Cuando damos clic en eliminar un tag entonces el tag se elimina del listado de tags existentes", () => {
      cy.access_valid_ghost3();
      cy.wait(3000);
      cy.navigate_tags_ghost3();
      cy.navigate_new_tag_ghost3();
      cy.click_delete_tag_ghost3();
      cy.navigate_tags_ghost3();
      cy.navigate_new_tag_ghost3();
      cy.validate_eliminated_tag_ghost3();
  
      cy.wait(2000);
      cy.close_session_ghost3();
      cy.wait(2000);
    });
  });
  