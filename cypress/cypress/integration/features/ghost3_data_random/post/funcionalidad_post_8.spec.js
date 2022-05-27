import {faker} from '@faker-js/faker'

let hora= faker.name.firstName();
describe('New Post', () => {
    beforeEach(()=>{
        cy.home_ghost3();
    })

    it('Ponemos hora de publicación con letras a un post. Modulo config', () => {
        cy.access_valid_ghost3();
        cy.wait(4000)
        cy.navigate_post_ghost3();
        cy.click_prueba_post_ghost3();
        cy.log("And I click in config");
        cy.get("button[class='post-settings']").click();cy.wait(2000)
        cy.enter_hora_config_post_ghost3(hora);
        cy.get("input[id='url']").click();
        cy.wait(2000)
        cy.get('div[class="gh-date-time-picker-error"]').should(($div) => {
            const message = $div.text();
            expect(message).contain('Must be in format: "15:00"');
        });
    })
  })