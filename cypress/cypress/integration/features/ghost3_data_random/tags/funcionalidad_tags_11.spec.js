const fs = require('fs');
const  path_data = "data/tags/";

let slug_tag = "";
let name_tag = "";
describe('Feature: Tags', () => {
    beforeEach(()=>{
        cy.home_ghost3();
    })

    it('Cuando creamos un nuevo tag e ingresamos informacion de twitter card correcta, entonces se debe crear el tag', () => {        
        cy.access_valid_ghost3();
        cy.wait(3000);
        cy.navigate_tags_ghost3();
        cy.click_new_tag_ghost3();
        when_i_entry_a_description_with_twitter_card_data_ok();                          
    })
  });


  async function when_i_entry_a_description_with_twitter_card_data_ok(){ 
    cy.readFile(path_data+'data_funcionalidad_tags_con_twitter_card.json').then(data => {  
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
            cy.input_twitter_title_tags_with(tag.twitter_title);
            cy.wait(1000);   
            cy.textarea_twitter_description_tags_with(tag.twitter_description);
            
        });

        cy.click_save_staff_ghost3();
        cy.navigate_tags_ghost3();
        validate_new_tag_ghost3(slug_tag, name_tag);

    });   
  }

  function validate_new_tag_ghost3(slug_tag, name_tag){ 
    cy.navigate_new_tag_ghost3_with(slug_tag);
    cy.validate_new_tag_ghost3_with_name(name_tag);
  }