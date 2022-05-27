const fs = require('fs');
const  path_data = "data/acceso/";

describe("Feature: Acceso a la plataforma", () => {
  beforeEach(() => {
    cy.home_ghost3();
  });

  it(" Cuando se ingresa a la plataforma un usuario que no es formato de email,  entonces retorne mensaje Please fill out the form to sign in. .", () => {    
    when_i_enter_email_with_bad_format_and_password_random();
    cy.and_i_click_on_sign_in_button();
    cy.then_validate_text_main_error("Please fill out the form to sign in");
  });

  async function when_i_enter_email_with_bad_format_and_password_random(){
    cy.readFile(path_data+'data_funcionalidad_acceso_usuario_mal_formato.json').then(data => {   
      var size = data.length;  
      var index = Math.floor(Math.random() * size);
      cy.log("size data pool:"+size);  
      cy.log("When I enter email not registry: "+data[index].email);  
      cy.get('input[id="ember8"]').type(data[index].email);
      
      cy.log("And In ghost3 I enter password random:  "+data[index].password);
      cy.get('input[id="ember10"]').type(data[index].password);
      cy.wait(2000);
    });
  }

});
