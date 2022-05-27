Feature: ghost3_F#2 Funcionalidad Staf

    @user1 @web
    Scenario: S#4 Como owner ingreso a Staff, actualizo el password del owner con menos de 10 caracteres entonces aparece mensaje de alerta y no deja guardar
        Given I navigate to page "<URL_ADMIN_GHOST3>"
        And I wait for 1 seconds
        When I enter email "<USERNAME1>"
        And I wait for 1 seconds
        And In ghost3 I enter password "<PASSWORD1>"
        And I wait for 1 seconds
        And I click on element having id "#ember12"
        And I wait for 2 seconds
        And I navigate to page "<URL_STAFF_GHOST3>"
        And I wait for 1 seconds
        And Click en link owner into staff users
        And I wait for 2 seconds
        And I fill on element having id "#user-password-old" with text "<PASSWORD1>"
        And I wait for 2 seconds
        And I fill on element having id "#user-password-new" with text "shortpwd"
        And I wait for 2 seconds
        And I fill on element having id "#user-new-password-verification" with text "shortpwd"
        And I wait for 2 seconds
        And I click on element css_element "/html[1]/body[1]/div[2]/div[1]/main[1]/section[1]/section[1]/div[1]/form[2]/div[1]/fieldset[1]/div[4]/button[1]/span[1]"
        And I wait for 2 seconds
        Then Validate text main owner response equals to "Password must be at least 10 characters long"
        And I wait for 2 seconds
        And I click on element having id "#ember47"
        And I wait for 1 seconds
        Then Close the sesion