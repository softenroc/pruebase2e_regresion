describe("Feature: Acceso a la plataforma", () => {
    beforeEach(() => {
      cy.home_ghost3();
    });
  
    it(" Como usuario no registrado quiero recuperar una contraseña entonces retorne mensaje usuario no existe", () => {
      when_i_enter_email_not_registry_();
      and_i_click_on_forgot_link();
      cy.log("Validate text main error to login equals to <User not found.>");
      cy.get('p[class="main-error"]').should(($p) => {
          const message = $p.text();
          expect(message).contain("User not found.");
      });
      cy.wait(2000);
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
  
  async function and_i_click_on_forgot_link(){  
    cy.log("And I click on element having id ember11");
    cy.get('button[id="ember11"]').click();
    cy.wait(3000);
  };

 
  

 
