import {faker} from '@faker-js/faker'

let randomTitle = "Title: "+faker.name.jobTitle();
let randomDateBadFormat =  faker.date.weekday();
let randomUrl =  faker.internet.url();

describe("Feature: Opcion Pages", () => {
    beforeEach(() => {
      cy.home_ghost3();
    });
  
    it("Como owner ingreso una fecha y hora en un formato incorrecto para programarla, entonces se debe retornar el mensaje Invalid date format, must be YYYY-MM-DD HH:mm", () => {     
      cy.access_valid_ghost3();
      cy.wait(3000);
      cy.navigate_pages_ghost3();      
      cy.click_new_page_ghost3();
      
      cy.input_text_page_title_ghost3_with(randomTitle);
      cy.wait(5000);

      cy.get("button[class='post-settings']").click()
      cy.wait(3000);
      cy.get('input[placeholder="YYYY-MM-DD"]')
      .clear()
      .should("be.visible")
      .type(randomDateBadFormat, { force: true });      
      cy.wait(4000);
      cy.get('textarea[name="post-setting-custom-excerpt"]').click();
      
      cy.wait(4000);
      
      cy.get('div[class="gh-date-time-picker-error"]').should(($error) => {
        const message = $error.text();
        expect(message).contain("Invalid date format, must be YYYY-MM-DD");
      })
      
      cy.wait(3000);
    });
  });
  