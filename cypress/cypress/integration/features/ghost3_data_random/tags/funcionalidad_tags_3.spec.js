const fs = require('fs');
const  path_data = "data/tags/";

let slug_tag = "";
let name_tag = "";

describe('Feature: Tags', () => {
    beforeEach(()=>{
        cy.home_ghost3();
    })

    it('Cuando creamos un nuevo tag e ingresamos un nombre con 192 caracteres,  entonces se muestra el mensaje Tag names cannot be longer than 191 characters.', () => {        
        cy.access_valid_ghost3();
        cy.wait(3000);
        cy.navigate_tags_ghost3();
        cy.click_new_tag_ghost3();
        when_i_entry_a_name_with_192_characters();          
        cy.click_save_staff_ghost3();           
        cy.then_validate_response_error("Tag names cannot be longer than 191 characters")            
    })
  });


  async function when_i_entry_a_name_with_192_characters(){ 
    cy.readFile(path_data+'data_funcionalidad_tags_name_borde_superior.json').then(data => {  
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

    });   
  }
