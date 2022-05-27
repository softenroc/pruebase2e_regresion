const fs = require('fs');
const  path_data = "data/post/";
describe('New Post', () => {
    beforeEach(()=>{
        cy.home_ghost3();
    })

    it('Ponemos fecha de publicación con formato AA/MM/YYYY a un post. Modulo config.', () => {
        cy.access_valid_ghost3();
        cy.wait(4000)
        cy.navigate_post_ghost3();
        cy.click_prueba_post_ghost3();
        cy.log("And I click in config");
        cy.get("button[class='post-settings']").click();
        cy.wait(2000)
        cy.readFile(path_data+'data_funcionalidad_post_9.json').then(data => {
            var size = data.length;  
            var index = Math.floor(Math.random() * size);   
            cy.enter_date_config_post_ghost3(data[index].date);
            cy.wait(2000);
            cy.get("input[id='url']").click();cy.wait(2000)
            cy.get('div[class="gh-date-time-picker-error"]').should(($div) => {
            const message = $div.text();
            expect(message).contain("Invalid date format, must be YYYY-MM-DD");
        });
          });
        
    })
  })