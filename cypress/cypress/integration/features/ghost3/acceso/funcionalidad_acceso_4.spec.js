describe("Feature: Acceso a la plataforma", () => {
    beforeEach(() => {
      cy.home_ghost3();
    });
  
    it(" Como usuario registrado ingreso un usuario valido y una contraseña invalida entonces retorne password incorrecto", () => {
      cy.when_i_enter_email_registry();
      and_i_enter_bad_password();
      cy.and_i_click_on_sign_in_button();
      cy.then_validate_text_main_error("Your password is incorrect");
    });
  });

  async function and_i_enter_bad_password(){

    cy.request('https://api.mockaroo.com/api/23d901c0?count=10&key=2ffac100').should((response) => {
      var data = response.body;
      var size = data.length;  
      var index = Math.floor(Math.random() * size);
      cy.log("size data pool:"+size);  
      cy.log("And I enter bad password: "+data[index].password);  
      cy.get('input[id="ember10"]').type(data[index].password);
      cy.wait(2000);
  });
}