const fs = require('fs');
const  path_data = "data/acceso/";

describe("Feature: Acceso a la plataforma", () => {
  beforeEach(() => {
    cy.home_ghost3();
  });

  it(" Como usuario no registrado ingreso un usuario y una contraseña invalida entonces retorne mensaje indicando que el usuario no existe", () => {    
    when_i_enter_email_not_registry_();
    cy.and_i_click_on_sign_in_button();
    cy.then_validate_text_main_error("There is no user with that email address");
  });

  async function when_i_enter_email_not_registry_(){
    cy.readFile(path_data+'data_funcionalidad_acceso_errado.json').then(data => {   
      var size = data.length;  
      var index = Math.floor(Math.random() * size);
      cy.log("size data pool:"+size);  
      cy.log("When I enter email not registry: "+data[index].email);  
      cy.get('input[id="ember8"]').type(data[index].email);
      cy.wait(2000);

      cy.log("And In ghost3 I enter password  "+data[index].password);
      cy.get('input[id="ember10"]').type(data[index].password);
      cy.wait(2000);
    });
  }

});
