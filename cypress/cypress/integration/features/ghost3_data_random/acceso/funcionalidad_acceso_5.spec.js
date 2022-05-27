
import {faker} from '@faker-js/faker'

let badUsername =faker.random.alphaNumeric(7);

describe("Feature: Acceso a la plataforma", () => {
    beforeEach(() => {
      cy.home_ghost3();
    });
  
    it(" Como se inserta un usuario que no tiene formato de correo para recuperar una contraseña, entonces retorne el mensaje We need your email address to reset your password! ", () => {
      when_i_enter_email_with_bad_format();      
      cy.and_i_click_on_forgot_link();
      cy.then_validate_text_main_error("We need your email address to reset your password!");
    });
  });

  async function when_i_enter_email_with_bad_format(){
      cy.log("When I enter email with bad format: "+badUsername);  
      cy.get('input[id="ember8"]').type(badUsername);
      cy.wait(2000);
}