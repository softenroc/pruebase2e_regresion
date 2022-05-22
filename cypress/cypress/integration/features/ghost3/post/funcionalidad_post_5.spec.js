const fs = require('fs');
const  path_data = "data/post/";
describe('New Post', () => {
    beforeEach(()=>{
        cy.home_ghost3();
    })

    it('Ponemos fecha de publicación con formato AA/MM/YYYY a un post.', () => {
        cy.access_valid_ghost3();
        cy.wait(4000)
        cy.navigate_post_ghost3();
        cy.click_prueba_post_ghost3();
        cy.log("And I click in publish");
        cy.get("div[class='ember-view ember-basic-dropdown-trigger  gh-btn gh-btn-outline gh-publishmenu-trigger']").click();
        cy.wait(2000)
        cy.readFile(path_data+'data_funcionalidad_post_5.json').then(data => {
            var size = data.length;  
            var index = Math.floor(Math.random() * size);   
            cy.enter_date_post_ghost3(data[index].date);
            cy.wait(2000);
            cy.get("button[class='gh-btn gh-btn-blue gh-publishmenu-button gh-btn-icon ember-view']").click();
            cy.wait(2000)
            cy.get('div[class="gh-date-time-picker-error"]').should(($div) => {
            const message = $div.text();
            expect(message).contain("Invalid date format, must be YYYY-MM-DD");
        });
          });
        
    })
  })