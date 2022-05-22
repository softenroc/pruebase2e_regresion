const fs = require('fs');
const  path_data = "data/acceso/";

describe("Feature: Acceso a la plataforma", () => {
  beforeEach(() => {
    cy.home_ghost3();
  });

  it(" Cuando se ingresa a la plataforma con password vacio,  entonces retorne mensaje Please fill out the form to sign in.", () => {    
    when_i_enter_email_random_and_password_empty();
    cy.and_i_click_on_sign_in_button();
    cy.then_validate_text_main_error("Please fill out the form to sign in");
  });

  async function when_i_enter_email_random_and_password_empty(){
    cy.readFile(path_data+'data_funcionalidad_acceso_errado.json').then(data => {   
      var size = data.length;  
      var index = Math.floor(Math.random() * size);
      cy.log("size data pool:"+size);  
      cy.log("When I enter email not registry: "+data[index].email);  
      cy.get('input[id="ember8"]').type(data[index].email);
      
      cy.log("And In ghost3 I enter password empty ");
      cy.get('input[id="ember10"]').clear({force:true});
      cy.wait(2000);
    });
  }

});
