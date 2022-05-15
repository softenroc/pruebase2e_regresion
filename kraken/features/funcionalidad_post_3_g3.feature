
Feature: ghost3_F#4 Funcionalidad Post

    @user1 @web
    Scenario: S#3 Como Publicamos un post con exito
        Given I navigate to page "<URL_ADMIN_GHOST3>"
        And I wait for 2 seconds
        When I enter email "<USERNAME1>"
        And I wait for 2 seconds
        And In ghost3 I enter password  "<PASSWORD1>"
        And I wait for 2 seconds
        And I click on element having id "#ember12"
        And I wait for 2 seconds
        And I navigate to page "<URL_POST_GHOST3>"
        And I wait for 2 seconds
        And I click on element css_element "/html[1]/body[1]/div[2]/div[1]/main[1]/section[1]/section[1]/ol[1]/li[2]/a[2]"   
        And I wait for 3 seconds
        And I click on element css_element "/html[1]/body[1]/div[2]/div[1]/main[1]/section[1]/header[1]/section[1]/div[1]/div[1]/span[1]" 
        And I wait for 2 seconds
        And I click on element css_element "/html[1]/body[1]/div[1]/div[1]/footer[1]/button[2]/span[1]" 
        And I wait for 2 seconds
        Then Validate value text having css_element "/html[1]/body[1]/div[2]/div[1]/aside[1]/article[1]/div[2]/span[2]" equals to "Update post status"
        And I wait for 2 seconds
        
