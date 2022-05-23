import {faker} from '@faker-js/faker'

let randomTitle = "Title: "+faker.name.jobTitle();
let randomTimeBadFormat =  faker.date.weekday();

describe("Feature: Opcion Pages", () => {
    beforeEach(() => {
      cy.home_ghost3();
    });
  
    it("Como owner ingreso una hora en Publish date en un formato incorrecto, entonces se debe mostrar el mensaje Must be in format: HH:MM", () => {     
      cy.access_valid_ghost3();
      cy.wait(3000);
      cy.navigate_pages_ghost3();      
      cy.click_new_page_ghost3();
      
      cy.input_text_page_title_ghost3_with(randomTitle);
      cy.wait(5000);

      cy.get("button[class='post-settings']").click()
      cy.wait(3000);
      cy.get('input[type="text"]').then(inputs_ => {

        var input_ = inputs_.get(2);
        if (!Cypress.dom.isHidden(input_)) {
            cy.wrap(input_).clear().type(randomTimeBadFormat, { force: true })
                .should("be.visible");
        }});

      cy.wait(4000);
      cy.get('textarea[name="post-setting-custom-excerpt"]').click();
      
      cy.wait(4000);
      
      cy.get('div[class="gh-date-time-picker-error"]').should(($error) => {
        const message = $error.text();
        expect(message).contain("Must be in format");
      })
      
      cy.wait(3000);
    });
  });
  