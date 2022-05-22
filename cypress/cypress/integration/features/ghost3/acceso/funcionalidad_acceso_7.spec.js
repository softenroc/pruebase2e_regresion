const fs = require('fs');
const  path_data = "data/acceso/";

describe("Feature: Acceso a la plataforma", () => {
  beforeEach(() => {
    cy.home_ghost3();
  });

  it(" Cuando se ingresa a la plataforma con usuario vacio,  entonces retorne mensaje Please fill out the form to sign in", () => {    
    when_i_enter_email_empty_and_password_random();
    cy.and_i_click_on_sign_in_button();
    cy.then_validate_text_main_error("Please fill out the form to sign in");
  });

  async function when_i_enter_email_empty_and_password_random(){
    cy.readFile(path_data+'data_funcionalidad_acceso_errado.json').then(data => {   
      var size = data.length;  
      var index = Math.floor(Math.random() * size);
      cy.log("size data pool:"+size);  
      cy.log("When I enter email empty");  
      cy.get('input[id="ember8"]').clear({force:true});
      cy.wait(2000);

      cy.log("And In ghost3 I enter password  "+data[index].password);
      cy.get('input[id="ember10"]').type(data[index].password);
      cy.wait(2000);
    });
  }

});
