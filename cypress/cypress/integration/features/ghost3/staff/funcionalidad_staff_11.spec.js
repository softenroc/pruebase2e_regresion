import {faker} from '@faker-js/faker'

let faceName = faker.name.firstName();

describe("Feature: Opcion Staf", () => {
  beforeEach(() => {
    cy.home_ghost3();
  });

  it(" Como owner ingreso a Staff , link owner y camfacebook la informacion de mi facebook para validar la generación de erro ", () => {
    cy.log("---------------------------------"+faceName);
    cy.access_valid_ghost3();
    cy.wait(3000);
    cy.navigate_staff_ghost3(); 
    cy.click_owner_staff_ghost3();
    cy.log("And I fill on element having id user-facebook with text: "+faceName);
    cy.get('input[id="user-facebook"]')
      .clear()
      .should("be.visible")
      .type(faceName, { force: true });
      cy.wait(2000);
      cy.click_save_staff_ghost3();
      cy.navigate_staff_ghost3();
      cy.click_owner_staff_ghost3();
      cy.validate_facebook_staff_ghost3(faceName);
    
    cy.close_session_ghost3();
    cy.wait(2000);
  });
});
