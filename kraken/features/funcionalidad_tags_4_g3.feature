Feature: ghost3_F#3 Funcionalidad Tags

    @user1 @web
    Scenario: S#4 Cuando damos clic en eliminar un tag entonces el tag se elimina del listado de tags existentes
        Given I navigate to page "<URL_ADMIN_GHOST3>"
        And I wait for 2 seconds
        When I enter email "<USERNAME1>"
        And I wait for 2 seconds
        And In ghost3 I enter password "<PASSWORD1>"
        And I wait for 2 seconds
        And I click on element having id "#ember12"
        And I wait for 2 seconds
        And I navigate to page "<URL_TAGS_GHOST3>"
        And I wait for 3 seconds
        And I navigate to page "<URL_TAGS_GHOST3_NEW_TAG>"
        And I wait for 3 seconds
        And I click on element having id 'button[class="gh-btn gh-btn-red gh-btn-icon mb15"]'
        And I wait for 2 seconds
        And I click on element having id 'button[class="gh-btn gh-btn-red gh-btn-icon ember-view"]'
        Then I wait for 3 seconds
        And I navigate to page "<URL_TAGS_GHOST3_NEW_TAG>"
        Then Validate tag page not found 
        Then I wait for 3 seconds