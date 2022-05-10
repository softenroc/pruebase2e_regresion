Feature: Funcionalidad Tags

    @user1 @web
    Scenario: Cuando abrimos un tag existe y actualizamos el color, entonces se debe guardar la actualizacion
        Given I navigate to page "<URL_ADMIN>"
        And I wait for 2 seconds
        When I enter email "<USERNAME1>"
        And I wait for 2 seconds
        And I enter password "<PASSWORD1>"
        And I wait for 2 seconds
        And I click on element having id "#ember12"
        And I wait for 2 seconds
        And I navigate to page "<URL_TAGS>"
        And I wait for 2 seconds
        And I navigate to page "http://localhost:2368/ghost/#/tags/new-tag-with-kraken"
        And I wait for 3 seconds
        And I fill on element having id 'input[name="accent-color"]' with text "0FE3F1"
        And I wait for 2 seconds
        And I click on element css_element "/html[1]/body[1]/div[2]/div[1]/main[1]/section[1]/form[1]/header[1]/section[1]/button[1]/span[1]"
        And I wait for 2 seconds
        And I navigate to page "<URL_TAGS>"
        And I wait for 3 seconds
        And I navigate to page "http://localhost:2368/ghost/#/tags/new-tag-with-kraken"
        And I wait for 3 seconds
        Then Validate value text having id 'input[name="accent-color"]' equals to "0FE3F1"
        Then I wait for 3 seconds