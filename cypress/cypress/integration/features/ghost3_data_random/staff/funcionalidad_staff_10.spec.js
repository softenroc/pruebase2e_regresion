const fs = require('fs');
const  path_data = "data/staff/";
describe("Feature: Opcion Staf", () => {
  beforeEach(() => {
    cy.home_ghost3();
  });

  it(" Como owner ingreso a Staff , link owner y cambio la informacion de mi bio para validar la generación de erro ", () => {
    cy.access_valid_ghost3();
    cy.wait(3000);
    cy.navigate_staff_ghost3(); 
    cy.click_owner_staff_ghost3();
    cy.log("And I fill on element having id user-bio with text");
    cy.readFile(path_data+'data_funcionalidad_staff_10.json').then(data => {   
      var size = data.length;  
      var index = Math.floor(Math.random() * size);
      cy.log("size data pool:"+size);  
      cy.log("And I fill on element having id user-bio with text: "+data[index].bio);  
      cy.get('textarea[id="user-bio"]')
      .clear()
      .should("be.visible")
      .type(data[index].bio, { force: true });
      cy.wait(2000);
      cy.click_save_staff_ghost3();
      cy.log(" Then Validate text main error to bio equals to <Bio is too long>");
      cy.get('p[class="response"]').should(($p) => {
        const message = $p.text();
        expect(message).contain("Bio is too long");
      });
    });
    
    cy.close_session_ghost3();
    cy.wait(2000);
  });
});
