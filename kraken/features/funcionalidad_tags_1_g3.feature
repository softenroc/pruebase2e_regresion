Feature: ghost3_F#3 Funcionalidad Tags

    @user1 @web
    Scenario: S#1 Cuando creamos un nuevo tag y no se asigna un nombre al tag entonces no deja guardar el tag y muestra un mensaje de error
        Given I navigate to page "<URL_ADMIN_GHOST3>"
        And I wait for 2 seconds
        When I enter email "<USERNAME1>"
        And I wait for 2 seconds
        And In ghost3 I enter password "<PASSWORD1>"
        And I wait for 2 seconds
        And I click on element having id "#ember12"
        And I wait for 2 seconds
        And I navigate to page "<URL_TAGS_GHOST3>"
        And I wait for 2 seconds
        And Click in button new tag
        And I wait for 2 seconds
        And I click on element css_element "/html[1]/body[1]/div[2]/div[1]/main[1]/section[1]/form[1]/header[1]/section[1]/button[1]/span[1]"
        And I wait for 2 seconds
        Then Validate text main new tag response equals to "You must specify a name for the tag."
        And I wait for 3 seconds
        And I click on element having id "#ember47"
        And I wait for 2 seconds
        Then Close the sesion


