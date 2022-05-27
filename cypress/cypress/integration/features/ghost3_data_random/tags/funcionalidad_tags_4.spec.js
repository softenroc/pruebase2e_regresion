const fs = require('fs');
const  path_data = "data/tags/";
import {faker} from '@faker-js/faker'

let slug_tag = "";
let name_tag = "";

let randomColor = faker.internet.color().substring(1);

describe('Feature: Tags', () => {
    beforeEach(()=>{
        cy.home_ghost3();
    })

    it('Cuando creamos un tag, lo abrimos para editar y actualizamos el color, entonces se debe guardar la actualizacion.', () => {        
        cy.access_valid_ghost3();
        cy.wait(3000);
        cy.navigate_tags_ghost3();
        cy.click_new_tag_ghost3();
        when_i_entry_a_name_with_190_characters();                      
    })
  });


  async function when_i_entry_a_name_with_190_characters(){ 
    cy.readFile(path_data+'data_funcionalidad_tags_name_borde_inferior.json').then(data => {  
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

        cy.click_save_staff_ghost3();
        cy.navigate_tags_ghost3();
        validate_new_tag_ghost3(slug_tag, name_tag);

        cy.log("And I update the color hex: "+randomColor);      
        cy.input_name_color_tag_ghost3(randomColor);      

        cy.validate_mod_color_tag_ghost3_with_color(randomColor);

    });   
  }

  function validate_new_tag_ghost3(slug_tag, name_tag){ 
    cy.navigate_new_tag_ghost3_with(slug_tag);
    cy.validate_new_tag_ghost3_with_name(name_tag);
  }