const fs = require('fs');
const  path_data = "data/acceso/";

describe("Feature: Acceso a la plataforma", () => {
    beforeEach(() => {
      cy.home_ghost3();
    });
  
    it(" Como usuario registrado quiero recuperar una contraseña entonces intente enviar un correo electrónico.", () => {
      when_i_enter_email_registry();
      cy.and_i_click_on_forgot_link();
      cy.then_validate_text_main_error("Failed to send email");
    });
  });
  
  async function when_i_enter_email_registry(){

    cy.readFile(path_data+'data_funcionalidad_acceso_ok.json').then(data => {   
        var size = data.length;  
        var index = Math.floor(Math.random() * size);
        cy.log("size data pool:"+size);  
        cy.log("When I enter email registry: "+data[index].email);  
        cy.get('input[id="ember8"]').type(data[index].email);
        cy.wait(2000);
      });
}
 
  

 