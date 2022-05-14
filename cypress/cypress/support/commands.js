// ***********************************************
// Commands Equipo24 

// Ghost v3

Cypress.Commands.add("access_valid_ghost3", () => {
    cy.log("When I enter email registry");
    cy.get('input[id="ember8"]').type(Cypress.env('user'));
     
    cy.wait(2000);
    cy.log("And I enter password ");
     
    cy.get('input[id="ember10"]').type(Cypress.env('password'));
    cy.wait(2000);
    cy.log("And I click on element having id ember12");
    cy.get('button[id="ember12"]').click();
     
  });
  
  Cypress.Commands.add("close_session_ghost3", () => {
    cy.log("Then Close the sesion");
    cy.wait(2000);
    cy.visit(Cypress.env('baseUrl_ghost3')+"/ghost/#/signout");
     
    cy.wait(2000);
  });
  
  Cypress.Commands.add("home_ghost3", () => {
    cy.log("Given I navigate to admin page");
    cy.visit(Cypress.env('baseUrl_ghost3')+"/ghost/#/signin");
    cy.wait(2000);
  });


  Cypress.Commands.add("navigate_post_ghost3", () => {
    cy.log("And I navigate to page post");
    cy.visit('http://localhost:3001/ghost/#/posts')
    cy.wait(2000)
  });


  Cypress.Commands.add("click_new_post_ghost3", () => {
    cy.log("And I navigate to page post");
    cy.get("a[class='ember-view gh-btn gh-btn-green']").click();
    cy.wait(2000)
  });

  Cypress.Commands.add("enter_tittle_ghost3", (tittle) => {
    cy.log("And I enter title");
    cy.get("textarea[class='gh-editor-title ember-text-area gh-input ember-view']").type(tittle);
    cy.wait(2000)
  });

  Cypress.Commands.add("enter_description_ghost3", () => {
    cy.log("And I enter description");
    cy.get("div[class='koenig-editor__editor __mobiledoc-editor __has-no-content']").type('Prueba Post');
    cy.wait(2000)
  });

  Cypress.Commands.add("enter_save_ghost3", () => {
    cy.log("And I save");
    cy.get("a[class='blue link fw4 flex items-center ember-view']").click();
    cy.wait(2000)
    cy.log("And I validate new post");
    validatePost(cy, 'Prueba Post');
    cy.wait(3000);
  });

  function validatePost(cy, tagName){
    cy.get('ol > li').find('a:contains("' + tagName + '")').should('have.length', 1);
    cy.wait(1000)
  }


  Cypress.Commands.add("click_prueba_post_ghost3", () => {
    cy.log("And I click in prueba post");
    cy.get('ol > li').find('a:contains("Prueba Post")').click();
    cy.wait(2000)
  });

  Cypress.Commands.add("enter_save_ghost3", (post) => {
    cy.log("And I save");
    cy.get("a[class='blue link fw4 flex items-center ember-view']").click();
    cy.wait(2000)
    cy.log("And I validate post");
    validatePost(cy, post);
    cy.wait(3000);
  });

  Cypress.Commands.add("click_publish_post_ghost3", () => {
    cy.log("And I click in publish");
    cy.get("div[class='ember-view ember-basic-dropdown-trigger  gh-btn gh-btn-outline gh-publishmenu-trigger']").click();
    cy.wait(2000)
    cy.get("button[class='gh-btn gh-btn-blue gh-publishmenu-button gh-btn-icon ember-view']").click();
    cy.wait(2000)
  });
  Cypress.Commands.add("validate_published_ghost3", (post) => {
    cy.log("And I validate");
    cy.get("a[class='blue link fw4 flex items-center ember-view']").click();
    cy.wait(2000)
    cy.log("And I click in prueba post");
    cy.get('ol > li').find('a:contains("Prueba Post")').click();
    cy.wait(2000)
    cy.get("div[class='ember-view ember-basic-dropdown-trigger  gh-btn gh-btn-outline gh-publishmenu-trigger']").find('span:contains("Update")').should('have.length', 1);

    cy.wait(3000);
  });

  Cypress.Commands.add("click_settings_post_ghost3", () => {
    cy.log("And I click in settings");
    cy.get("button[class='post-settings']").click();
  });

  Cypress.Commands.add("click_delete_post_ghost3", () => {
    cy.log("And I click in delete");
    cy.get("button[class='gh-btn gh-btn-hover-red gh-btn-icon settings-menu-delete-button']").click();
  });

  Cypress.Commands.add("click_delete_post_ghost3", () => {
    cy.log("And I click in delete");
    cy.get("button[class='gh-btn gh-btn-hover-red gh-btn-icon settings-menu-delete-button']").click();
    cy.wait(2000)
    cy.get("button[class='gh-btn gh-btn-red gh-btn-icon ember-view']").click();
    cy.wait(2000)
  });

  Cypress.Commands.add("validate_delete_post_ghost3", () => {
    cy.log("And I validate");
    cy.get('ol[class="posts-list gh-list "]').find('li').its('length').should('eq', 8)
  });

  Cypress.Commands.add("navigate_staff_ghost3", () => {
    cy.log("And I navigate to page staff");
    cy.visit(Cypress.env('baseUrl_ghost3')+"/ghost/#/staff/");
    cy.wait(1000);
  });

  Cypress.Commands.add("click_owner_staff_ghost3", () => {
    cy.log("And Click en link owner into staff users");
    cy.get("span[class='gh-badge owner']").click();
    cy.wait(1000);
  });

  Cypress.Commands.add("input_location_staff_ghost3", () => {
    cy.log("And I fill on element having id user-location with text Bucaramanga");
    cy.get('input[id="user-location"]')
      .clear()
      .should("be.visible")
      .type("Bucaramanga", { force: true })
      .should("have.value", "Bucaramanga");
    cy.wait(2000);
  });

  Cypress.Commands.add("click_save_staff_ghost3", () => {
    cy.log("And I click save button");
    cy.get("button[class='gh-btn gh-btn-blue gh-btn-icon ember-view']").click();
    cy.wait(2000);
  });

  Cypress.Commands.add("validate_location_staff_ghost3", () => {
    cy.log("Then Validate value text having id user-location equals to Bucaramanga");
    cy.get('input[id="user-location"]').should("have.value", "Bucaramanga");
    cy.wait(2000);
  });

  Cypress.Commands.add("click_author_staff_ghost3", () => {
    cy.log("And Click en link author into staff users");
    cy.get("span[class='gh-badge author']").click();
    cy.wait(1000);
  });

  Cypress.Commands.add("input_website_staff_ghost3", () => {
    cy.log("And I fill on element having id user-website with text http://www.kraken-node.com");
    cy.get('input[id="user-website"]')
        .clear()
        .should("be.visible")
        .type("http://www.kraken-node.com", { force: true })
        .should("have.value", "http://www.kraken-node.com");
    cy.wait(2000);
  });

  Cypress.Commands.add("validate_website_staff_ghost3", () => {
    cy.log("Then Validate value text having id user-website equals to http://www.kraken-node.com");
    cy.get('input[id="user-website"]').should("have.value", "http://www.kraken-node.com");
    cy.wait(2000);
  });

  Cypress.Commands.add("input_email_staff_ghost3", () => {
    cy.log("And I fill on element having id user-email with text formato_errado_mail.com");
    cy.get('input[id="user-email"]')
      .clear()
      .should("be.visible")
      .type("formato_errado_mail.com", { force: true })
      .should("have.value", "formato_errado_mail.com");
    cy.wait(2000);
  });

  Cypress.Commands.add("validate_email_staff_ghost3", () => {
    cy.log("Then Validate text main author response equals to Please supply a valid email address");
    cy.get(".response").should(($p) => {
      const message = $p.text();
      expect(message).contain("Please supply a valid email address");
    });cy.wait(2000);
  });

  Cypress.Commands.add("input_old_password_staff_ghost3", () => {
    cy.log("And I fill on element having id user-password-old with text abcd1234567");
    cy.get('input[id="user-password-old"]')
      .clear()
      .should("be.visible")
      .type("abcd1234567", { force: true })
      .should("have.value", "abcd1234567");

    cy.wait(1000);
  });

  Cypress.Commands.add("input_new_password_staff_ghost3", () => {
    cy.log("And I fill on element having id user-password-new with text shortpwd");
    cy.get('input[id="user-password-new"]')
      .clear()
      .should("be.visible")
      .type("shortpwd", { force: true })
      .should("have.value", "shortpwd");
    cy.wait(1000);
  });

  Cypress.Commands.add("input_verification_password_staff_ghost3", () => {
    cy.log("And I fill on element having id user-password-verification with text shortpwd");
    cy.get('input[id="user-new-password-verification"]')
      .clear()
      .should("be.visible")
      .type("shortpwd", { force: true })
      .should("have.value", "shortpwd");

    cy.wait(1000);
  });

  Cypress.Commands.add("validate_password_staff_ghost3", () => {
    cy.log("Then Validate text main owner response equals to Password must be at least 10 characters long");
    cy.get(".response").should(($p) => {
      const message = $p.text();
      expect(message).contain("Password must be at least 10 characters long");
    });cy.wait(2000);
  });

  Cypress.Commands.add("click_change_password_staff_ghost3", () => {
    cy.log("And I click change password button");
    cy.get("button[class='gh-btn gh-btn-icon button-change-password gh-btn-red ember-view']").click();
    cy.wait(2000);
  });
  
  Cypress.Commands.add("navigate_tags_ghost3", () => {
    cy.log("And I navigate to page tags");
    cy.visit(Cypress.env('baseUrl_ghost3')+"/ghost/#/tags/");
    cy.wait(1000);
  });

  Cypress.Commands.add("click_new_tag_ghost3", () => {
    cy.log("And click in button new tag");
    cy.get("a[class='ember-view gh-btn gh-btn-green']").click();
    cy.wait(1000);
  });

  Cypress.Commands.add("validate_name_tag_ghost3", () => {
    cy.log("Then Validate text main new tag response equals to You must specify a name for the tag.");
    cy.get(".error > :nth-child(1)").should(($p) => {
      const message = $p.text();
      expect(message).contain("You must specify a name for the tag.");
    });
    cy.wait(2000);
  });

  Cypress.Commands.add("input_tag_name_tag_ghost3", () => {
    cy.log("And I fill on element having id tag-name with New Tag Test with Kraken");
    cy.get('input[id="tag-name"]')
      .clear()
      .should("be.visible")
      .type("New Tag Test with Kraken", { force: true })
      .should("have.value", "New Tag Test with Kraken");
    cy.wait(1000);
  });

  Cypress.Commands.add("input_name_color_tag_ghost3", (color) => {
    cy.log("And I fill on element having id input[name=accent-color] with F1C40F");
    cy.get('input[name="accent-color"]')
      .clear()
      .should("be.visible")
      .type(color, { force: true })
      .should("have.value", color);
    cy.wait(1000);
  });

  Cypress.Commands.add("input_slug_tag_ghost3", () => {
    cy.log("And I fill on element having id tag-slug with shortpwd");
    cy.get('input[id="tag-slug"]')
      .clear()
      .should("be.visible")
      .type("new-tag-with-kraken", { force: true })
      .should("have.value", "new-tag-with-kraken");
    cy.wait(1000);
  });
  Cypress.Commands.add("input_password_tag_ghost3", () => {
    cy.log("And I fill on element having id user-password-new with shortpwd");
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
    cy.wait(1000);
  });

  Cypress.Commands.add("navigate_new_tag_ghost3", () => {
    cy.log("And I navigate to new tag created");
    cy.visit(Cypress.env('baseUrl_ghost3')+"/ghost/#/tags/new-tag-with-kraken"); 
    cy.wait(1000);
  });

  Cypress.Commands.add("validate_new_tag_ghost3", () => {
    cy.log("Then Validate value text having id tag-name equals to New Tag Test with Kraken");
    cy.get('input[id="tag-name"]').should("have.value", "New Tag Test with Kraken");
     

    cy.wait(2000);
  });

  Cypress.Commands.add("validate_modificate_color_tag_ghost3", () => {
    cy.log("Then Validate value text having name accent-color equals to0FE3F1");
    cy.get('input[name="accent-color"]').should("have.value", "0FE3F1");
    cy.wait(2000);
  });

  Cypress.Commands.add("click_delete_tag_ghost3", () => {
    cy.log("And I click delete button");
    cy.get('button[class="gh-btn gh-btn-red gh-btn-icon mb15"]').click();
    cy.wait(2000);
    cy.log("And I click confirmation delete tag");
    cy.get('button[class="gh-btn gh-btn-red gh-btn-icon ember-view"]').click();
    cy.wait(2000);
  });

  Cypress.Commands.add("validate_eliminated_tag_ghost3", () => {
    cy.log("Validate tag page not found");
      cy.wait(1000);
      cy.get('h2[class="midlightgrey f4 fw3"]').should(($p) => {
        const message = $p.text();
        expect(message).contain("Page not found");
      });
  });

  Cypress.Commands.add("navigate_pages_ghost3", () => {
    cy.log("And I navigate to page pages");
    cy.visit(Cypress.env('baseUrl_ghost3')+"/ghost/#/pages/"); 
    cy.wait(2000);
  });

  Cypress.Commands.add("click_new_page_ghost3", () => {
    cy.log("And click en new page");
    cy.visit(Cypress.env('baseUrl_ghost3')+"/ghost/#/editor/page");
    cy.wait(2000);
  });

  Cypress.Commands.add("input_text_page_ghost3", () => {
    cy.log("And I fill title with text Testing with Kraken");
    cy.wait(1000);
    cy.get('textarea[class="gh-editor-title ember-text-area gh-input ember-view"]')
      .clear()
      .should("be.visible")
      .type("Testing with Kraken", { force: true })
      .should("have.value", "Testing with Kraken");
    cy.wait(1000);
  });

  Cypress.Commands.add("click_save_page_ghost3", () => {
    cy.log("Save");
    cy.get('button[class="post-settings"]').click();
    cy.wait(2000);
  });

  Cypress.Commands.add("click_existed_tag_ghost3", () => {
    cy.log("And Click in existed tag");
    cy.get('.gh-list > :nth-child(2)').click();
    cy.wait(2000);
  });

  Cypress.Commands.add("validate_tittle_page_ghost3", () => {
    cy.log("Then Validate title equals to Testing with Kraken");
    cy.get('textarea[class="gh-editor-title ember-text-area gh-input ember-view"]').should("have.value", "Testing with Kraken");
  });


  // Ghost v4
Cypress.Commands.add("access_valid_ghost4", () => {
  cy.log("When I enter email registry");
  cy.get('input[name="identification"]').type(Cypress.env('user'));
  cy.wait(2000);
  cy.log("And I enter password ");
  cy.get('input[name="password"]').type(Cypress.env('password'));
  cy.wait(2000);
  cy.log("And I click on element having id ember12");
  cy.get('button[class="login gh-btn gh-btn-login gh-btn-block gh-btn-icon js-login-button ember-view"]').click();
});

Cypress.Commands.add("close_session_ghost4", () => {
  cy.log("Then Close the sesion");
  cy.wait(2000);
  cy.visit(Cypress.env('baseUrl_ghost4')+"/ghost/#/signout");
  cy.wait(2000);
});

Cypress.Commands.add("home_ghost4", () => {
  cy.log("Given I navigate to admin page");
  cy.visit(Cypress.env('baseUrl_ghost4')+"/ghost/#/signin");
  cy.wait(2000);
});

Cypress.Commands.add("navigate_post_ghost4", () => {
  cy.log("And I navigate to page post");
  cy.visit('http://localhost:3002/ghost/#/posts')
  cy.wait(2000)
});


Cypress.Commands.add("click_new_post_ghost4", () => {
  cy.log("And I navigate to page post");
  cy.get("a[class='ember-view gh-btn gh-btn-primary view-actions-top-row']").click();
  cy.wait(2000)
});

Cypress.Commands.add("enter_tittle_ghost4", (tittle) => {
  cy.log("And I enter title");
  cy.get("textarea[class='gh-editor-title ember-text-area gh-input ember-view']").type(tittle);
  cy.wait(2000)
});

Cypress.Commands.add("enter_description_ghost4", () => {
  cy.log("And I enter description");
  cy.get("div[class='koenig-editor__editor __mobiledoc-editor __has-no-content']").type('Prueba Post');
  cy.wait(2000)
});

Cypress.Commands.add("enter_save_ghost4", () => {
  cy.log("And I save");
  cy.get("div[class='ml3 mobile flex items-center']").click();
  cy.wait(2000)
  cy.log("And I validate new post");
  validatePost(cy, 'Prueba Post');
  cy.wait(3000);
});


Cypress.Commands.add("click_prueba_post_ghost4", () => {
  cy.log("And I click in prueba post");
  cy.get('ol > li').find('a:contains("Prueba Post")').click();
  cy.wait(2000)
});


Cypress.Commands.add("click_publish_post_ghost4", () => {
  cy.log("And I click in publish");
  cy.get("div[class='ember-view ember-basic-dropdown-triggergh-btn gh-btn-editor  gh-publishmenu-trigger']").click();
  cy.wait(2000)
  cy.get("button[class='gh-btn gh-btn-black gh-publishmenu-button gh-btn-icon ember-view']").click();
  cy.wait(2000)
});
Cypress.Commands.add("validate_published_ghost4", (post) => {
  cy.log("And I validate");
  cy.get("a[class='blue link fw4 flex items-center ember-view']").click();
  cy.wait(2000)
  cy.log("And I click in prueba post");
  cy.get('ol > li').find('a:contains("Prueba Post")').click();
  cy.wait(2000)
  cy.get("div[class='ember-view ember-basic-dropdown-trigger  gh-btn gh-btn-outline gh-publishmenu-trigger']").find('span:contains("Update")').should('have.length', 1);

  cy.wait(3000);
});

Cypress.Commands.add("click_settings_post_ghost4", () => {
  cy.log("And I click in settings");
  cy.get("button[class='post-settings']").click();
});

Cypress.Commands.add("click_delete_post_ghost4", () => {
  cy.log("And I click in delete");
  cy.get("button[class='gh-btn gh-btn-hover-red gh-btn-icon settings-menu-delete-button']").click();
});

Cypress.Commands.add("click_delete_post_ghost4", () => {
  cy.log("And I click in delete");
  cy.get("button[class='gh-btn gh-btn-hover-red gh-btn-icon settings-menu-delete-button']").click();
  cy.wait(2000)
  cy.get("button[class='gh-btn gh-btn-red gh-btn-icon ember-view']").click();
  cy.wait(2000)
});

Cypress.Commands.add("validate_delete_post_ghost4", () => {
  cy.log("And I validate");
  cy.get('ol[class="posts-list gh-list "]').find('li').its('length').should('eq', 8)
});

Cypress.Commands.add("navigate_staff_ghost4", () => {
  cy.log("And I navigate to page staff");
  cy.visit(Cypress.env('baseUrl_ghost4')+"/ghost/#/settings/staff");
  cy.wait(1000);
});

Cypress.Commands.add("click_owner_staff_ghost4", () => {
  cy.log("And Click en link owner into staff users");
  cy.get("span[class='gh-badge owner']").click();
  cy.wait(1000);
});

Cypress.Commands.add("input_location_staff_ghost4", () => {
  cy.log("And I fill on element having id user-location with text Bucaramanga");
  cy.get('input[id="user-location"]')
    .clear()
    .should("be.visible")
    .type("Bucaramanga", { force: true })
    .should("have.value", "Bucaramanga");
  cy.wait(2000);
});

Cypress.Commands.add("click_save_staff_ghost4", () => {
  cy.log("And I click save button");
  cy.get("button[class='gh-btn gh-btn-primary gh-btn-icon ember-view']").click();
  cy.wait(2000);
});

Cypress.Commands.add("validate_location_staff_ghost4", () => {
  cy.log("Then Validate value text having id user-location equals to Bucaramanga");
  cy.get('input[id="user-location"]').should("have.value", "Bucaramanga");
  cy.wait(2000);
});

Cypress.Commands.add("click_author_staff_ghost4", () => {
  cy.log("And Click en link author into staff users");
  cy.get("span[class='gh-badge author']").click();
  cy.wait(1000);
});

Cypress.Commands.add("input_website_staff_ghost4", () => {
  cy.log("And I fill on element having id user-website with text http://www.kraken-node.com");
  cy.get('input[id="user-website"]')
      .clear()
      .should("be.visible")
      .type("http://www.kraken-node.com", { force: true })
      .should("have.value", "http://www.kraken-node.com");
  cy.wait(2000);
});

Cypress.Commands.add("validate_website_staff_ghost4", () => {
  cy.log("Then Validate value text having id user-website equals to http://www.kraken-node.com");
  cy.get('input[id="user-website"]').should("have.value", "http://www.kraken-node.com");
  cy.wait(2000);
});

Cypress.Commands.add("input_email_staff_ghost4", () => {
  cy.log("And I fill on element having id user-email with text formato_errado_mail.com");
  cy.get('input[id="user-email"]')
    .clear()
    .should("be.visible")
    .type("formato_errado_mail.com", { force: true })
    .should("have.value", "formato_errado_mail.com");
  cy.wait(2000);
});

Cypress.Commands.add("validate_email_staff_ghost4", () => {
  cy.log("Then Validate text main author response equals to Please supply a valid email address");
  cy.get(".response").should(($p) => {
    const message = $p.text();
    expect(message).contain("Please supply a valid email address");
  });cy.wait(2000);
});

Cypress.Commands.add("input_old_password_staff_ghost4", () => {
  cy.log("And I fill on element having id user-password-old with text abcd1234567");
  cy.get('input[id="user-password-old"]')
    .clear()
    .should("be.visible")
    .type("abcd1234567", { force: true })
    .should("have.value", "abcd1234567");

  cy.wait(1000);
});

Cypress.Commands.add("input_new_password_staff_ghost4", () => {
  cy.log("And I fill on element having id user-password-new with text shortpwd");
  cy.get('input[id="user-password-new"]')
    .clear()
    .should("be.visible")
    .type("shortpwd", { force: true })
    .should("have.value", "shortpwd");
  cy.wait(1000);
});

Cypress.Commands.add("input_verification_password_staff_ghost4", () => {
  cy.log("And I fill on element having id user-password-verification with text shortpwd");
  cy.get('input[id="user-new-password-verification"]')
    .clear()
    .should("be.visible")
    .type("shortpwd", { force: true })
    .should("have.value", "shortpwd");

  cy.wait(1000);
});

Cypress.Commands.add("validate_password_staff_ghost4", () => {
  cy.log("Then Validate text main owner response equals to Password must be at least 10 characters long");
  cy.get(".response").should(($p) => {
    const message = $p.text();
    expect(message).contain("Password must be at least 10 characters long");
  });cy.wait(2000);
});

Cypress.Commands.add("click_change_password_staff_ghost4", () => {
  cy.log("And I click change password button");
  cy.get("button[class='gh-btn gh-btn-icon button-change-password gh-btn-red ember-view']").click();
  cy.wait(2000);
});

Cypress.Commands.add("navigate_tags_ghost4", () => {
  cy.log("And I navigate to page tags");
  cy.visit(Cypress.env('baseUrl_ghost4')+"/ghost/#/tags/");
  cy.wait(1000);
});

Cypress.Commands.add("click_new_tag_ghost4", () => {
  cy.log("And click in button new tag");
  cy.get("a[class='ember-view gh-btn gh-btn-primary']").click();
  cy.wait(1000);
});

Cypress.Commands.add("validate_name_tag_ghost4", () => {
  cy.log("Then Validate text main new tag response equals to You must specify a name for the tag.");
  cy.get(".error > :nth-child(1)").should(($p) => {
    const message = $p.text();
    expect(message).contain("You must specify a name for the tag.");
  });
  cy.wait(2000);
});

Cypress.Commands.add("input_tag_name_tag_ghost4", () => {
  cy.log("And I fill on element having id tag-name with New Tag Test with Kraken");
  cy.get('input[id="tag-name"]')
    .clear()
    .should("be.visible")
    .type("New Tag Test with Kraken", { force: true })
    .should("have.value", "New Tag Test with Kraken");
  cy.wait(1000);
});

Cypress.Commands.add("input_name_color_tag_ghost4", (color) => {
  cy.log("And I fill on element having id input[name=accent-color] with F1C40F");
  cy.get('input[name="accent-color"]')
    .clear()
    .should("be.visible")
    .type(color, { force: true })
    .should("have.value", color);
  cy.wait(1000);
});

Cypress.Commands.add("input_slug_tag_ghost4", () => {
  cy.log("And I fill on element having id tag-slug with shortpwd");
  cy.get('input[id="tag-slug"]')
    .clear()
    .should("be.visible")
    .type("new-tag-with-kraken", { force: true })
    .should("have.value", "new-tag-with-kraken");
  cy.wait(1000);
});
Cypress.Commands.add("input_password_tag_ghost4", () => {
  cy.log("And I fill on element having id user-password-new with shortpwd");
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
  cy.wait(1000);
});

Cypress.Commands.add("navigate_new_tag_ghost4", () => {
  cy.log("And I navigate to new tag created");
  cy.visit(Cypress.env('baseUrl_ghost4')+"/ghost/#/tags/new-tag-with-kraken"); 
  cy.wait(1000);
});

Cypress.Commands.add("validate_new_tag_ghost4", () => {
  cy.log("Then Validate value text having id tag-name equals to New Tag Test with Kraken");
  cy.get('input[id="tag-name"]').should("have.value", "New Tag Test with Kraken");
   

  cy.wait(2000);
});

Cypress.Commands.add("validate_modificate_color_tag_ghost4", () => {
  cy.log("Then Validate value text having name accent-color equals to0FE3F1");
  cy.get('input[name="accent-color"]').should("have.value", "0FE3F1");
  cy.wait(2000);
});

Cypress.Commands.add("click_delete_tag_ghost4", () => {
  cy.log("And I click delete button");
  cy.get('button[class="gh-btn gh-btn-red gh-btn-icon mb15"]').click();
  cy.wait(2000);
  cy.log("And I click confirmation delete tag");
  cy.get('button[class="gh-btn gh-btn-red gh-btn-icon ember-view"]').click();
  cy.wait(2000);
});

Cypress.Commands.add("validate_eliminated_tag_ghost4", () => {
  cy.log("Validate tag page not found");
    cy.wait(1000);
    cy.get('h2[class="midlightgrey f4 fw3"]').should(($p) => {
      const message = $p.text();
      expect(message).contain("Page not found");
    });
});

Cypress.Commands.add("navigate_pages_ghost4", () => {
  cy.log("And I navigate to page pages");
  cy.visit(Cypress.env('baseUrl_ghost4')+"/ghost/#/pages/"); 
  cy.wait(1000);
});

Cypress.Commands.add("click_new_page_ghost4", () => {
  cy.log("And click en new page");
  cy.visit(Cypress.env('baseUrl_ghost4')+"/ghost/#/editor/page");
  cy.wait(2000);
});

Cypress.Commands.add("input_text_page_ghost4", () => {
  cy.log("And I fill title with text Testing with Kraken");
  cy.wait(1000);
  cy.get('textarea[class="gh-editor-title ember-text-area gh-input ember-view"]')
    .clear()
    .should("be.visible")
    .type("Testing with Kraken", { force: true })
    .should("have.value", "Testing with Kraken");
  cy.wait(1000);
});

Cypress.Commands.add("click_save_page_ghost4", () => {
  cy.log("Save");
  cy.get('a[href="#/pages/"]').click();
  cy.wait(2000);
});

Cypress.Commands.add("click_existed_tag_ghost4", () => {
  cy.log("And Click in existed tag");
  cy.get('.gh-list > :nth-child(2)').click();
  cy.wait(2000);
});

Cypress.Commands.add("validate_tittle_page_ghost4", () => {
  cy.log("Then Validate title equals to Testing with Kraken");
  cy.get('textarea[class="gh-editor-title ember-text-area gh-input ember-view"]').should("have.value", "Testing with Kraken");
});