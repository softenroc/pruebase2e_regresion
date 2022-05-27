const fs = require('fs');
const  path_data = "data/general/";

describe("Feature: General", () => {
  beforeEach(() => {
    cy.home_ghost3();
  });

  it("Como owner/staff ingreso a General para modificar title por 200 caracteres y retorna error", () => {
    cy.access_valid_ghost3();
    cy.wait(4000);
    cy. navigate_general_ghost3();
    cy.click_expand_title_description();
    when_i_enter_a_name();
    and_i_click_on_save_settings_button();
    then_validate_text_error();
    cy.close_session_ghost3();
    cy.click_leave();
    cy.wait(2000);
});

async function when_i_enter_a_name(){
    cy.readFile(path_data+'data_funcionalidad_general_1.json').then(data => {   
        var size = data.length;
        var index = Math.floor(Math.random() * size);
        cy.log("size data pool:" + size);
        cy.log("When I enter a name  " + data[index].name);
        cy.get('input[class="ember-text-field gh-input ember-view"]').then(input => {
            var input_ = input.get(0);
            if (!Cypress.dom.isHidden(input_)) {
                cy.wrap(input_).clear().type(data[index].name, { force: true })
                    .should("be.visible");

                }
            })

        });
}

async function and_i_click_on_save_settings_button(){
    cy.log("And I click on element having id ember61");
    cy.get('button[class="gh-btn gh-btn-blue gh-btn-icon ember-view"]').click();
    cy.wait(2000);
  };

  async function then_validate_text_error(){
    cy.log(" Then Validate text main error equals to <Title is too long>");
    cy.get('p[class="response"]').should(($p) => {
        const message = $p.text();
        expect(message).contain("Title is too long");
    });

};

});