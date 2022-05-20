const fs = require('fs');
const  path_data = "data/acceso/";

describe("Feature: Acceso a la plataforma", () => {
  beforeEach(() => {
    cy.home_ghost3();
  });

  it(" Como usuario no registrado ingreso un usuario y una contraseña invalida entonces retorne mensaje indicando que el usuario no existe", () => {    

    cy.readFile(path_data+'data_funcionalidad_acceso_2.json').then(data => {   
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


    cy.log("And I click on element having id ember12");
    cy.get('button[id="ember12"]').click();
    cy.wait(3000);
    cy.log(" Then Validate text main error to login equals to <There is no user with that email address>");
    cy.get('p[class="main-error"]').should(($p) => {
        const message = $p.text();
        expect(message).contain("There is no user with that email address.");
    });
    cy.wait(2000);
  });
});
