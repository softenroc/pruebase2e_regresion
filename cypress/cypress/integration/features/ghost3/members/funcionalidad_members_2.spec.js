const fs = require('fs');
const  path_data = "data/members/";

describe("Feature: Members", () => {
  beforeEach(() => {
    cy.home_ghost3();
  });

  it("Como owner/staff ingreso a Members para editar perfil", () => {
    cy.access_valid_ghost3();
    cy.navigate_labs_ghost3();

  });

});