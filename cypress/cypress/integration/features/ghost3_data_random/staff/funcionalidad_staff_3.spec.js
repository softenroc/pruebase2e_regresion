const fs = require('fs');
const  path_data = "data/staff/";
describe("Feature: Opcion Staf", () => {
  beforeEach(() => {
    cy.home_ghost3();
  });

  it(" Como owner ingreso a Staff , link owner y cambio la informacion de full name con exito ", () => {
    cy.access_valid_ghost3();
    cy.wait(3000);
    cy.navigate_staff_ghost3(); 
    cy.click_owner_staff_ghost3();
    cy.log("And I fill on element having id user-name with new text");
    cy.readFile(path_data+'data_funcionalidad_staff_3.json').then(data => {   
      var size = data.length;  
      var index = Math.floor(Math.random() * size);
      cy.log("size data pool:"+size);  
      cy.log("And I fill on element having id user-name with text: "+data[index].fullName);  
      cy.get('input[id="user-name"]')
      .clear()
      .should("be.visible")
      .type(data[index].fullName, { force: true });
      cy.wait(2000);
      cy.click_save_staff_ghost3();
      cy.navigate_staff_ghost3();
      cy.click_owner_staff_ghost3();
      cy.validate_user_name_staff_ghost3(data[index].fullName);
    });
    
    cy.close_session_ghost3();
    cy.wait(2000);
  });
});
