describe("Feature: Opcion Tags", () => {
  beforeEach(() => {
    cy.home_ghost3();
  });

  it(" Como creamos un nuevo tag diligenciamos los campos obligatorios entonces el tag se crea con exito", () => {
    cy.access_valid_ghost3();
    cy.wait(3000);
    cy.navigate_tags_ghost3();
    cy.click_new_tag_ghost3();
    cy.input_tag_name_tag_ghost3();
    cy.input_name_color_tag_ghost3("F1C40F");
    cy.input_slug_tag_ghost3();
    cy.input_password_tag_ghost3();
    cy.click_save_staff_ghost3();
    cy.navigate_tags_ghost3();
    cy.navigate_new_tag_ghost3();

    cy.log(
      "Then Validate value text having id tag-name equals to New Tag Test with Kraken"
    );
    cy.get('input[id="tag-name"]').should("have.value", "New Tag Test with Kraken");
     

    cy.wait(2000);
    cy.close_session_ghost3();
    cy.wait(2000);
  });
});
