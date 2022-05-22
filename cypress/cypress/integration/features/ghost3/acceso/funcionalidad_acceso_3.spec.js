describe("Feature: Acceso a la plataforma", () => {
    beforeEach(() => {
      cy.home_ghost3();
    });
  
    it(" Como usuario no registrado quiero recuperar una contraseña entonces retorne mensaje usuario no existe", () => {
      when_i_enter_email_not_registry_();
      cy.and_i_click_on_forgot_link();
      cy.then_validate_text_main_error("User not found");
    });
  });
  
  async function when_i_enter_email_not_registry_(){

    cy.request('https://api.mockaroo.com/api/23d901c0?count=10&key=2ffac100').should((response) => {
      var data = response.body;
      var size = data.length;  
      var index = Math.floor(Math.random() * size);
      cy.log("size data pool:"+size);  
      cy.log("When I enter email not registry: "+data[index].email);  
      cy.get('input[id="ember8"]').type(data[index].email);
      cy.wait(2000);
  });
}
 
  

 
