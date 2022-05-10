describe("Feature: Opcion Tags", () => {
  beforeEach(() => {
    cy.log("Given I navigate to admin page");
    cy.visit("http://localhost:2368/ghost/#/signin");
    cy.wait(2000);
  });

  it(" Como creamos un nuevo tag diligenciamos los campos obligatorios entonces el tag se crea con exito", () => {
    cy.access_valid();
    cy.wait(3000);

    cy.log("And I navigate to page tags");
    cy.visit("http://localhost:2368/ghost/#/tags/");
    cy.log("And click in button new tag");
    cy.get("#ember64 > span").click();

    cy.log(
      "And I fill on element having id tag-name with New Tag Test with Kraken"
    );
    cy.wait(1000);
    cy.get('input[id="tag-name"]')
      .clear()
      .should("be.visible")
      .type("New Tag Test with Kraken", { force: true })
      .should("have.value", "New Tag Test with Kraken");

    cy.log(
      "And I fill on element having id input[name=accent-color] with F1C40F"
    );
    cy.wait(1000);
    cy.get('input[name="accent-color"]')
      .clear()
      .should("be.visible")
      .type("F1C40F", { force: true })
      .should("have.value", "F1C40F");

    cy.log("And I fill on element having id tag-slug with shortpwd");
    cy.wait(1000);
    cy.get('input[id="tag-slug"]')
      .clear()
      .should("be.visible")
      .type("new-tag-with-kraken", { force: true })
      .should("have.value", "new-tag-with-kraken");

    cy.log("And I fill on element having id user-password-new with shortpwd");
    cy.wait(1000);
    cy.get('#tag-description')
      .clear()
      .should("be.visible")
      .type(
        "Nam et convallis dui. Pellentesque sit amet bibendum ligula. Cras consequat ipsum mauris, quis eleifend purus mollis id",
        { force: true }
      )
      .should(
        "have.value",
        "Nam et convallis dui. Pellentesque sit amet bibendum ligula. Cras consequat ipsum mauris, quis eleifend purus mollis id"
      );

    cy.wait(2000);
    cy.log("And I click save button");
    cy.get('#ember73 > span').click();
    cy.wait(2000);

    cy.log("And I navigate to page tags");
    cy.visit("http://localhost:2368/ghost/#/tags/");
    cy.wait(4000);

    cy.log("And I navigate to new tag created");
    cy.visit("http://localhost:2368/ghost/#/tags/new-tag-with-kraken");              
    cy.wait(4000);
    cy.log(
      "Then Validate value text having id tag-name equals to New Tag Test with Kraken"
    );
    cy.get('input[id="tag-name"]').should("have.value", "New Tag Test with Kraken");
     

    cy.wait(2000);
    cy.close_session();
    cy.wait(2000);
  });
});
