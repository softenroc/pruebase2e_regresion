const fs = require('fs');
const  path_data = "data/general/";

describe("Feature: General", () => {
  beforeEach(() => {
    cy.home_ghost3();
  });

  it("Como owner/staff ingreso a General para hacer el sitio privado, cambio la contraseña de 400 caracteres y guarda", () => {
    cy.access_valid_ghost3();
    cy.wait(4000);
    cy.navigate_general_ghost3();
    cy.click_private();
    when_i_enter_a_password();
    and_i_click_on_save_settings_button();
    then_validate_save();
    cy.click_private();
    cy.close_session_ghost3();
    cy.click_leave();
    cy.wait(2000);
});

async function when_i_enter_a_password(){
    cy.readFile(path_data+'data_funcionalidad_general_20.json').then(data => {   
        var size = data.length;
        var index = Math.floor(Math.random() * size);
        cy.log("size data pool:" + size);
        cy.log("When I enter a name  " + data[index].password);
        cy.get('input[class="ember-text-field gh-input ember-view"]').clear({force: true})
        cy.get('input[class="ember-text-field gh-input ember-view"]').type(data[index].password,{force: true});
    

        });
}

async function and_i_click_on_save_settings_button(){
    cy.log("And I click on element having id ember61");
    cy.get('button[class="gh-btn gh-btn-blue gh-btn-icon ember-view"]').click();
    cy.wait(2000);
  };

  async function then_validate_save() {
    cy.log(" Then Validate text save equals to <Saved>");
    cy.get('button[class="gh-btn gh-btn-blue gh-btn-icon gh-btn-green ember-view"]').should(($p) => {
        const message = $p.text();
        expect(message).contain("Saved");
    });

};

});