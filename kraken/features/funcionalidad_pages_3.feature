Feature: Crear una página en modo draft

    @user1 @web
    Scenario: Como owner/staff ingreso a Pages , cambio la hora de publicacion de la pagina
        Given I navigate to page "<URL_ADMIN>"
        And I wait for 1 seconds
        When I enter email "<USERNAME1>"
        And I wait for 1 seconds
        And I enter password "<PASSWORD1>"
        And I wait for 1 seconds
        And I click on element having id "#ember12"
        And I wait for 3 seconds
        And I navigate to page "<URL_PAGES>"
        And I wait for 2 seconds        
        And I click on element css_element "/html[1]/body[1]/div[2]/div[1]/main[1]/section[1]/section[1]/ol[1]/li[2]/a[3]/div[1]/span[1]"
        And I wait for 1 seconds
        And I click on element css_element "/html[1]/body[1]/div[2]/div[1]/main[1]/section[1]/header[1]/section[1]/div[1]/div[1]/span[1]"
        And I wait for 4 seconds
        And I click on element css_element "/html[1]/body[1]/div[1]/div[1]/div[1]/section[1]/div[1]/div[2]/div[1]"
        And I wait for 2 seconds
        And I click on element css_element "/html[1]/body[1]/div[1]/div[1]/footer[1]/button[2]/span[1]"
        And I wait for 5 seconds
        And I navigate to page "<URL_PAGES>"
        And I wait for 3 seconds
        And I click on element css_element "/html[1]/body[1]/div[2]/div[1]/main[1]/section[1]/section[1]/ol[1]/li[2]/a[3]/div[1]/span[1]"
        And I wait for 5 seconds
        Then Validate value text css element 'span[class="fw4 midgrey-l2"]' contain to "Will be published"
        And I wait for 5 seconds

        
        