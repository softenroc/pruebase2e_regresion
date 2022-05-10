Feature: Funcionalidad Tags

    @user1 @web
    Scenario: Cuando damos clic en eliminar un tag entonces el tag se elimina del listado de tags existentes
        Given I navigate to page "<URL_ADMIN>"
        And I wait for 2 seconds
        When I enter email "<USERNAME1>"
        And I wait for 2 seconds
        And I enter password "<PASSWORD1>"
        And I wait for 2 seconds
        And I click on element having id "#ember12"
        And I wait for 2 seconds
        And I navigate to page "<URL_TAGS>"
        And I wait for 3 seconds
        And I navigate to page "http://localhost:2368/ghost/#/tags/new-tag-with-kraken"
        And I wait for 3 seconds
        And I click on element having id 'button[class="gh-btn gh-btn-red gh-btn-icon mb15"]'
        And I wait for 2 seconds
        And I click on element having id 'button[class="gh-btn gh-btn-red gh-btn-icon ember-view"]'
        Then I wait for 3 seconds
        And I navigate to page "http://localhost:2368/ghost/#/tags/new-tag-with-kraken"
        Then Validate tag page not found 
        Then I wait for 3 seconds