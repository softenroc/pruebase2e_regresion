newFunction();

function newFunction() {
    const fs = require('fs');
    const path_data = "data/members/";

    describe("Feature: Members", () => {
        beforeEach(() => {
            cy.home_ghost3();
        });

        it("Como owner/staff ingreso a mi perfil de Members para editar email vacio y retorna error", () => {
            cy.access_valid_ghost3();
            cy.wait(4000);
            cy.navigate_labs_ghost3();
            cy.wait(4000);
            cy.click_configure_members_ghost3();
            cy.click_enable_members_ghost3();
            cy.navigate_members_ghost3();
            cy.click_own_member();
            when_i_enter_email();
            and_i_click_on_save_button();
            cy.wait(-2000);
            then_validate_text_error();
            cy.navigate_labs_ghost3();
            cy.click_leave();
            cy.click_configure_members_ghost3();
            cy.click_enable_members_ghost3();
            cy.close_session_ghost3();
        });

        async function when_i_enter_email() {
            cy.readFile(path_data + 'data_funcionalidad_members_4.json').then(data => {
                var size = data.length;
                var index = Math.floor(Math.random() * size);
                cy.log("And I enter a null email  "+data[index].email);
                cy.get('input[id="member-email"]').type("text").clear({force: true});
                cy.wait(2000);

            });
        }

        async function and_i_click_on_save_button() {
            cy.log("And I click on element having id ember604");
            cy.get('button[class="gh-btn gh-btn-blue gh-btn-icon ember-view"]').click();
            cy.wait(3000);
        };

        async function then_validate_text_error(){
            cy.log(" Then Validate text main error equals to <Please enter an email.>");
            cy.get('p[class="response"]').should(($p) => {
                const message = $p.text();
                expect(message).contain("Please enter an email.");
            });
            
        };

    });
}
