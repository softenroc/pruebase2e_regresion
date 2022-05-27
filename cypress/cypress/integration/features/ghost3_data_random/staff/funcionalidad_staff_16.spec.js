import {faker} from '@faker-js/faker'

let newPassword = faker.internet.password(10);
let oldPassword = faker.internet.password(10);
describe("Feature: Opcion Staf", () => {
  beforeEach(() => {
    cy.home_ghost3();
  });

  it(" Como owner ingreso a Staff , link owner y cambio la informacion de contraseña dejando vacio la contraseña antigua ", () => {
    cy.access_valid_ghost3();
    cy.wait(3000);
    cy.navigate_staff_ghost3(); 
    cy.click_owner_staff_ghost3();
    cy.log("And I fill on element having id user-password-old with text: "+oldPassword);
    cy.get('input[id="user-password-old"]')
      .clear()
      .should("be.visible")
      .type(oldPassword, { force: true });
      cy.wait(2000);
    cy.log("And I fill on element having id user-password with text: "+newPassword);
    cy.get('input[id="user-password-new"]')
      .clear()
      .should("be.visible")
      .type(newPassword, { force: true });
      cy.wait(2000);
      cy.get('input[id="user-new-password-verification"]')
      .clear()
      .should("be.visible")
      .type(newPassword, { force: true });
      cy.wait(2000);
      cy.log("And I click save button");
      cy.get("button[class='gh-btn gh-btn-icon button-change-password gh-btn-red ember-view']").click();
      cy.wait(2000);
      cy.log(" Then Validate text main error to bio equals to <Your password is incorrect. Your password is incorrect.>");
      cy.get('div[class="gh-alert-content"]').should(($div) => {
        const message = $div.text();
        expect(message).contain("Your password is incorrect. Your password is incorrect.");
      });
    cy.close_session_ghost3();
    cy.wait(2000);
  });
});
