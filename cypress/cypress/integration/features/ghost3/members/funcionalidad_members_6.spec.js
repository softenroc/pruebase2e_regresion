const fs = require('fs');
const  path_data = "data/members/";

describe("Feature: Members", () => {
  beforeEach(() => {
    cy.home_ghost3();
  });

  it("Como owner/staff ingreso a Members para crear un nuevo miembro con nombre y email validos y guarda", () => {
    cy.access_valid_ghost3();
    cy.wait(4000);
    cy.navigate_labs_ghost3();
    cy.wait(4000);
    cy.click_configure_members_ghost3();
    cy.click_enable_members_ghost3();
    cy.navigate_members_ghost3();
    cy.wait(4000);
    cy.click_new_member_ghost3();
    when_i_enter_a_name_email();
    and_i_click_on_save_button();
    cy.wait(-2000);
    then_validate_save();
    cy.navigate_members_ghost3();
    cy.click_own_member();
    cy.click_delete_member();
    cy.click_delete();
    cy.navigate_members_ghost3();
    cy.click_add_yourself_as_a_member();
    cy.navigate_labs_ghost3();
    cy.click_configure_members_ghost3();
    cy.click_enable_members_ghost3();
    cy.close_session_ghost3();
    cy.wait(2000);
    
  });

  async function when_i_enter_a_name_email(){
    cy.readFile(path_data+'data_funcionalidad_members_6.json').then(data => {   
        var size = data.length;
        var index = Math.floor(Math.random() * size);
        cy.log("size data pool:" + size);
        cy.log("When I enter a name  " + data[index].first_name);
        cy.get('input[id="member-name"]').clear({force: true})
        cy.get('input[id="member-name"]').type(data[index].first_name,{force: true});
        cy.wait(2000);

        cy.log("And I enter a invalid email:" + data[index].email);
        cy.get('input[id="member-email"]').clear({force: true});
        cy.get('input[id="member-email"]').type(data[index].email,{force: true});
        cy.wait(2000);
      
    });
  }

  async function and_i_click_on_save_button(){
    cy.log("And I click on element having id ember604");
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