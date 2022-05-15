Feature: Crear una página en modo draft

    @user1 @web
    Scenario: Como owner/staff ingreso a Pages , cambio eliminar una pagina existente
        Given I navigate to page "<URL_ADMIN_GHOST3>"
        And I wait for 1 seconds
        When I enter email "<USERNAME1>"
        And I wait for 1 seconds
        And In ghost3 I enter password  "<PASSWORD1>"
        And I wait for 1 seconds
        And I click on element having id "#ember12"
        And I wait for 3 seconds
        And I navigate to page "<URL_PAGES>"
        And I wait for 2 seconds
        And I click on element css_element "/html[1]/body[1]/div[2]/div[1]/main[1]/section[1]/section[1]/ol[1]/li[2]/a[3]/div[1]/span[1]"
        And I wait for 1 seconds
        Then I click on element css_element "/html[1]/body[1]/div[2]/div[1]/main[1]/section[1]/header[1]/section[1]/button[1]/*[name()='svg'][1]"
        And I wait for 2 seconds
        And I fill on element having id "#url" with text "www.page-test.com"
        And I wait for 4 seconds
        And I fill on element having id "#custom-excerpt" with text "Custom excerpt"
        And I wait for 8 seconds
        And I navigate to page "<URL_PAGES>"
        And I wait for 2 seconds
        And I click on element css_element "/html[1]/body[1]/div[2]/div[1]/main[1]/section[1]/section[1]/ol[1]/li[2]/a[3]/div[1]/span[1]"
        And I wait for 4 seconds
        Then I click on element css_element "/html[1]/body[1]/div[2]/div[1]/main[1]/section[1]/header[1]/section[1]/button[1]/*[name()='svg'][1]"
        And I wait for 4 seconds
        Then Validate value text having id "#url" equals to "www.page-test.com"
        And I wait for 4 seconds