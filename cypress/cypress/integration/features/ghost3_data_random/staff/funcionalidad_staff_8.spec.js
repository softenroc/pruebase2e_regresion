const fs = require('fs');
const  path_data = "data/staff/";
describe("Feature: Opcion Staf", () => {
  beforeEach(() => {
    cy.home_ghost3();
  });

  it(" Como owner ingreso a Staff , link owner y cambio la informacion de mi website para validar la generación de erro ", () => {
    cy.access_valid_ghost3();
    cy.wait(3000);
    cy.navigate_staff_ghost3(); 
    cy.click_owner_staff_ghost3();
    cy.log("And I fill on element having id user-website with text");
    cy.readFile(path_data+'data_funcionalidad_staff_8.json').then(data => {   
      var size = data.length;  
      var index = Math.floor(Math.random() * size);
      cy.log("size data pool:"+size);  
      cy.log("And I fill on element having id user-website with text: "+data[index].website);  
      cy.get('input[id="user-website"]')
      .clear()
      .should("be.visible")
      .type(data[index].website, { force: true });
      cy.wait(2000);
      cy.click_save_staff_ghost3();
      cy.log(" Then Validate text main error to website equals to <Website is not a valid url>");
      cy.get('p[class="response"]').should(($p) => {
        const message = $p.text();
        expect(message).contain("Website is not a valid url");
      });
    });
    
    cy.close_session_ghost3();
    cy.wait(2000);
  });
});
