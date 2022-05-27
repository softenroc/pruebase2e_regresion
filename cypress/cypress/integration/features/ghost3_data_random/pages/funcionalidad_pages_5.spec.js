import {faker} from '@faker-js/faker'
const fs = require('fs');
const  path_data = "data/pages/";

let randomTitle = "Title: "+faker.name.jobTitle();

describe("Feature: Opcion Pages", () => {
    beforeEach(() => {
      cy.home_ghost3();
    });
  
    it("Como owner ingreso un valor de 301 caracteres en el campo Excerpt , entonces la página muestra el mensaje Excerpt cannot be longer than 300 characters.", () => {     
      cy.access_valid_ghost3();
      cy.wait(3000);
      cy.navigate_pages_ghost3();      
      cy.click_new_page_ghost3();
      
      cy.input_text_page_title_ghost3_with(randomTitle);
      cy.wait(5000);
      when_i_entry_a_excerpt_more_than_300_characters();
    
    });

    async function when_i_entry_a_excerpt_more_than_300_characters(){ 
        cy.readFile(path_data+'data_funcionalidad_pages_excerpt_more_than_300_characters.json').then(data => {  
            var size = data.length;  
            var index = Math.floor(Math.random() * size);
            cy.log("size data pool:"+size);  
            var excerpt = data[index];       
            cy.get("button[class='post-settings']").click()
            cy.wait(3000);                        

            cy.get('textarea[name="post-setting-custom-excerpt"]')
            .clear()
            .should("be.visible")
            .type(excerpt.excerpt, { force: true })
            .should("have.value",excerpt.excerpt);            
            
            cy.wait(4000);

            cy.get('input[name="post-setting-slug"]').click();
            cy.wait(2000);
            
            cy.get('p[class="response"]').should(($error) => {
              const message = $error.text();
              expect(message).contain("Excerpt cannot be longer than 300 characters.");
            })
            
            cy.wait(3000);
    
        });   
      }
  });
  