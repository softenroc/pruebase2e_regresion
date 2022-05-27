const fs = require('fs');
const  path_data = "data/general/";

describe("Feature: General", () => {
  beforeEach(() => {
    cy.home_ghost3();
  });

  it("Como owner/staff ingreso a General para modificar lenguage por simbolos y guarda", () => {
    cy.access_valid_ghost3();
    cy.wait(4000);
    cy. navigate_general_ghost3();
    cy.click_expand_publication_lenguage();
    when_i_enter_a_lenguage();
    and_i_click_on_save_settings_button();
    cy.wait(-2000);
    then_validate_save();
    cy.close_session_ghost3();
    cy.wait(2000);
});

async function when_i_enter_a_lenguage(){
    cy.readFile(path_data+'data_funcionalidad_general_6.json').then(data => {   
        var size = data.length;
        var index = Math.floor(Math.random() * size);
        cy.log("size data pool:" + size);
        cy.log("When I enter a lenguage  "+data[index].lenguage);
        cy.get('input[class="ember-text-field gh-input ember-view"]').clear({force: true})
        cy.get('input[class="ember-text-field gh-input ember-view"]').type(data[index].lenguage,{force: true});
        cy.wait(2000);

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