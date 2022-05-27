const fs = require('fs');
const  path_data = "data/general/";

describe("Feature: General", () => {
  beforeEach(() => {
    cy.home_ghost3();
  });

  it("Como owner/staff ingreso a General para hacer el sitio privado, contraseña vacio y retorna error", () => {
    cy.access_valid_ghost3();
    cy.wait(4000);
    cy.navigate_general_ghost3();
    cy.click_private();
    when_i_enter_a_password();
    and_i_click_on_save_settings_button();
    then_validate_text_error();
    cy.click_private();
    cy.close_session_ghost3();
    cy.wait(2000);
});

async function when_i_enter_a_password(){
    cy.readFile(path_data+'data_funcionalidad_general_19.json').then(data => {   
        var size = data.length;
        var index = Math.floor(Math.random() * size);
        cy.log("size data pool:" + size);
        cy.log("When I enter a name  " + data[index].password);
        cy.get('input[class="ember-text-field gh-input ember-view"]').type("text").clear({force: true});

        });
}

async function and_i_click_on_save_settings_button(){
    cy.log("And I click on element having id ember61");
    cy.get('button[class="gh-btn gh-btn-blue gh-btn-icon ember-view"]').click();
    cy.wait(2000);
  };

  async function then_validate_text_error(){
    cy.log(" Then Validate text main error equals to <Password must be supplied>");
    cy.get('p[class="response"]').should(($p) => {
        const message = $p.text();
        expect(message).contain("Password must be supplied");
    });
    cy.wait(2000);
  };

});