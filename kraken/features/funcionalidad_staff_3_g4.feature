Feature: ghost4_F#2 Funcionalidad Staf

    @user1 @web
    Scenario: S#3 Como owner ingreso a Staff, actualizo el valor del correo del autor a un formato errado entonces aparece mensaje de alerta y no deja guardar
        Given I navigate to page "<URL_ADMIN_GHOST4>"
        And I wait for 2 seconds
        When I enter email "<USERNAME1>"
        And I wait for 2 seconds
        And In ghost4 I enter password "<PASSWORD1>"
        And I wait for 2 seconds
        And I click on element having id "#ember11"
        And I wait for 3 seconds
        And I navigate to page "<URL_STAFF_GHOST4>"
        And I wait for 2 seconds
        And Click en link author into staff users
        And I wait for 3 seconds
        And I fill on element having id "#user-email" with text "formato_errado_mail.com"
        And I wait for 3 seconds
        And I click on element css_element "/html[1]/body[1]/div[2]/div[1]/main[1]/section[1]/header[1]/section[1]/button[1]/span[1]"
        And I wait for 3 seconds
        Then Validate text main author response equals to "Please supply a valid email address"
        And I wait for 5 seconds
        And I click on element having id "#ember47"
        And I wait for 2 seconds
        Then Close the sesion