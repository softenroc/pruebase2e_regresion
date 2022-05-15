Feature: ghost4_F#4 Funcionalidad Post

    @user1 @web
    Scenario: S#1 Como creamos un nuevo post diligenciamos todos los campos y el post se crea con exito
        Given I navigate to page "<URL_ADMIN_GHOST4>"
        And I wait for 4 seconds
        When I enter email "<USERNAME1>"
        And I wait for 2 seconds
        And In ghost4 I enter password "<PASSWORD1>"
        And I wait for 2 seconds
        And I click on element having id "#ember11"
        And I wait for 2 seconds
        And I navigate to page "<URL_POST_GHOST4>"
        And I wait for 2 seconds
        And Click in button new post ghost4
        And I wait for 2 seconds
        And I fill on element having css_element "/html[1]/body[1]/div[2]/div[1]/main[1]/div[1]/section[1]/div[1]/div[1]/textarea[1]" with text "New Post Test with Kraken"
        And I wait for 2 seconds
        And I fill on element having css_element "/html[1]/body[1]/div[2]/div[1]/main[1]/div[1]/section[1]/div[1]/div[1]/article[1]/div[1]/div[1]" with text "New Post Test with Kraken"
        And I wait for 2 seconds
        And I click on element css_element "/html[1]/body[1]/div[2]/div[1]/main[1]/div[1]/section[1]/header[1]/div[1]/div[1]/a[1]"        
        And I wait for 2 seconds
        And I click on element css_element "/html[1]/body[1]/div[2]/div[1]/main[1]/section[1]/section[1]/ol[1]/li[2]/a[1]"     
        And I wait for 2 seconds
        Then Validate value text having css_element "/html[1]/body[1]/div[2]/div[1]/main[1]/div[1]/section[1]/div[1]/div[1]/textarea[1]" equals to "New Post Test with Kraken"
