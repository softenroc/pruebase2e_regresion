const fs = require('fs');
const  path_data = "data/tags/";

let slug_tag = "";
let name_tag = "";
describe('Feature: Tags', () => {
    beforeEach(()=>{
        cy.home_ghost3();
    })

    it('Cuando creamos un nuevo tag e ingresamos informacion de meta data con twitter description superior a 156 caracteres, entonces el span informativo de la cantidad de caracteres debe ser de color rojo', () => {        
        cy.access_valid_ghost3();
        cy.wait(3000);
        cy.navigate_tags_ghost3();
        cy.click_new_tag_ghost3();
        when_i_entry_a_description_with_twitter_card_with_twitter_description_more_that_156_characters();                          
    })
  });


  async function when_i_entry_a_description_with_twitter_card_with_twitter_description_more_that_156_characters(){ 
    cy.readFile(path_data+'data_funcionalidad_tags_con_twitter_description_superior_data.json').then(data => {          
        cy.wait(3000);
        
        var size = data.length;  
        var index = Math.floor(Math.random() * size);
        cy.log("size data pool:"+size);  
        var tag = data[index];       
        console.log("Tag: "+tag);                 
  
        name_tag= tag.name;
        cy.log("When I entry a name with 190 characters : "+tag.name);        
        cy.input_tag_name_tag_ghost3_with(tag.name);      

        cy.log("And I enter random color hex: "+tag.color.substring(1));      
        cy.input_name_color_tag_ghost3(tag.color.substring(1));                    
        
        slug_tag= tag.slug;
        cy.log("And I enter random slag:"+tag.slug);      
        cy.input_slug_tag_ghost3_with(tag.slug);    

        cy.log("And I enter random description:"+tag.description);      
        cy.input_description_tag_ghost3_with(tag.description);

        cy.get("button[class='gh-btn']").then($buttons => {
            console.log("buttons: "+$buttons.length)                 
            $buttons.get(1).click();                       
            cy.wait(1000);   
            cy.log("And I enter twitter data info :"+tag);                  
            cy.textarea_twitter_description_tags_with(tag.twitter_description);            

            cy.get("span[class='word-count']").then(span => {
                console.log("span: "+span.length)                                   
               var span_ = span.get(2);
               cy.log("And I validate span You’ve used with color red");         
               cy.wrap(span_).should('have.css', 'color', 'rgb(226, 84, 64)');               
            });            
        });

    

    });   
  }
