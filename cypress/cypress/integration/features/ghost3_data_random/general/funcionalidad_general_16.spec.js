const fs = require('fs');
const  path_data = "data/general/";

describe("Feature: General", () => {
  beforeEach(() => {
    cy.home_ghost3();
  });

  it("Como owner/staff ingreso a General para modificar social accounts Twitter URL en texto y guarda", () => {
    cy.access_valid_ghost3();
    cy.wait(4000);
    cy. navigate_general_ghost3();
    cy.click_expand_social_accounts();
    when_i_enter_a_twitter_URL();
    and_i_click_on_save_settings_button();
    then_validate_save();
    cy.close_session_ghost3();
    cy.wait(2000);
});

async function when_i_enter_a_twitter_URL(){
    cy.readFile(path_data+'data_funcionalidad_general_16.json').then(data => {   
        var size = data.length;
        var index = Math.floor(Math.random() * size);
        cy.log("size data pool:" + size);
        cy.log("When I enter a entre URL  " + data[index].URL);
        cy.get('input[class="ember-text-field gh-input ember-view"]').then(input => {
            var input_ = input.get(1);
            if (!Cypress.dom.isHidden(input_)) {
                cy.wrap(input_).clear().type(data[index].URL, { force: true })
                    .should("be.visible");
            }
        })

    });
}

async function and_i_click_on_save_settings_button(){
    cy.log("And I click on element having id ember163");
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