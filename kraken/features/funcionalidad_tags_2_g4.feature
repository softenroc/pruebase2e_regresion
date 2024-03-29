Feature: ghost4_F#3 Funcionalidad Tags

    @user1 @web
    Scenario: S#2 Como creamos un nuevo tag diligenciamos los campos obligatorios entonces el tag se crea con exito
        Given I navigate to page "<URL_ADMIN_GHOST4>"
        And I wait for 2 seconds
        When I enter email "<USERNAME1>"
        And I wait for 2 seconds
        And In ghost4 I enter password "<PASSWORD1>"
        And I wait for 2 seconds
        And I click on element having id "#ember11"
        And I wait for 2 seconds
        And I navigate to page "<URL_TAGS_GHOST4>"
        And I wait for 2 seconds
        And Click in button new tag ghost4
        And I wait for 2 seconds
        And I fill on element having id "#tag-name" with text "New Tag Test with Kraken"
        And I wait for 2 seconds
        And I fill on element having id 'input[name="accent-color"]' with text "F1C40F"
        And I wait for 2 seconds
        And I fill on element having id "#tag-slug" with text "new-tag-with-kraken"
        And I wait for 2 seconds
        And I fill on element having id "#tag-description" with text "Nam et convallis dui. Pellentesque sit amet bibendum ligula. Cras consequat ipsum mauris, quis eleifend purus mollis id"
        And I wait for 2 seconds
        And I click on element css_element "/html[1]/body[1]/div[2]/div[1]/main[1]/section[1]/form[1]/div[1]/header[1]/section[1]/button[1]/span[1]"        
        And I wait for 2 seconds
        And I navigate to page "<URL_TAGS_GHOST4>"
        And I wait for 3 seconds
        And I navigate to page "<URL_TAGS_GHOST4_NEW_TAG>"
        And I wait for 3 seconds
        Then Validate value text having id "#tag-name" equals to "New Tag Test with Kraken"        
        Then I wait for 3 seconds

