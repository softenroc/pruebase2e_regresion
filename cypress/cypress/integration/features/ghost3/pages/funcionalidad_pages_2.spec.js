import {faker} from '@faker-js/faker'

let randomTitle = "Title: "+faker.name.jobTitle();
let randomTitleUpdate = "Title: "+faker.name.jobTitle();

describe("Feature: Opcion Pages", () => {
    beforeEach(() => {
      cy.home_ghost3();
    });
  
    it("Como owner/staff ingreso a Pages , edito una pagina existente y se actualiza la pagina", () => {
      cy.access_valid_ghost3();
      cy.wait(3000);
      cy.navigate_pages_ghost3();      
      cy.click_new_page_ghost3();
      
      cy.input_text_page_title_ghost3_with(randomTitle);

      cy.click_save_page_ghost3();
      cy.navigate_pages_ghost3();

      cy.click_existed_tag_ghost3();

      cy.validate_tittle_page_ghost3_with(randomTitle);

      cy.input_text_page_title_ghost3_with(randomTitleUpdate);

      cy.click_save_page_ghost3();
      cy.navigate_pages_ghost3();

      cy.click_existed_tag_ghost3();

      cy.validate_tittle_page_ghost3_with(randomTitleUpdate);
  
      cy.close_session_ghost3();
      cy.wait(2000);
    });
  });
  