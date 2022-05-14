describe("Feature: Opcion Pages", () => {
  beforeEach(() => {
    cy.home_ghost3();
  });

  it("Como owner/staff ingreso a Pages para crear una nueva página", () => {
    cy.access_valid_ghost3();
    cy.wait(3000);
    cy.navigate_pages_ghost3();
    cy.screenshot();
    cy.click_new_page_ghost3();
    cy.screenshot();
    cy.input_text_page_ghost3();
    cy.screenshot();
    cy.click_save_page_ghost3();
    cy.navigate_pages_ghost3();
    cy.screenshot();
    cy.click_existed_tag_ghost3();
    cy.screenshot();
    cy.validate_tittle_page_ghost3();
    cy.screenshot();
    cy.close_session_ghost3();
    cy.wait(2000);
  });
});
