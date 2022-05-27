import {faker} from '@faker-js/faker'

let hora= faker.name.firstName();
describe('New Post', () => {
    beforeEach(()=>{
        cy.home_ghost3();
    })

    it('Ponemos hora de publicación con letras a un post.', () => {
        cy.access_valid_ghost3();
        cy.wait(4000)
        cy.navigate_post_ghost3();
        cy.click_prueba_post_ghost3();
        cy.log("And I click in publish");
        cy.get("div[class='ember-view ember-basic-dropdown-trigger  gh-btn gh-btn-outline gh-publishmenu-trigger']").click();
        cy.wait(2000)
        cy.enter_hora_post_ghost3(hora);
        cy.wait(2000)
        cy.get("button[class='gh-btn gh-btn-blue gh-publishmenu-button gh-btn-icon ember-view']").click();
        cy.wait(2000)
        cy.get('div[class="gh-date-time-picker-error"]').should(($div) => {
            const message = $div.text();
            expect(message).contain('Must be in format: "15:00"');
        });
    })
  })