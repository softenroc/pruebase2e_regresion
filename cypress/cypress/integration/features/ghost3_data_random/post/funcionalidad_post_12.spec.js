import {faker} from '@faker-js/faker'

let tag = faker.name.firstName();
describe('New Post', () => {
    beforeEach(()=>{
        cy.home_ghost3();
    })

    it('Modificamos campo Tags de un post', () => {
        cy.access_valid_ghost3();
        cy.wait(4000)
        cy.navigate_post_ghost3();
        cy.click_prueba_post_ghost3();
        cy.log("And I click in config");
        cy.get("button[class='post-settings']").click();
        cy.wait(2000)
        cy.log("And I enter excerpt");
        cy.get("input[class='ember-power-select-trigger-multiple-input'").first().clear().type(tag);
        cy.wait(2000)
        cy.get("button[class='close settings-menu-header-action']").click();
        cy.wait(2000)
        cy.log("And I click in config");
        cy.get("button[class='post-settings']").click();
        cy.wait(2000)
        cy.get("input[class='ember-power-select-trigger-multiple-input'").first().should("have.value", tag);
        
    });
  });