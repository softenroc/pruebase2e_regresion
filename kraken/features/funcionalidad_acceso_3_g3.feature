Feature: ghost3_F#1 Acceso a la plataforma

  @user1 @web
  Scenario: S#3 Como usuario no registrado quiero recuperar una contraseña entonces retorne mensaje usuario no existe
    Given I navigate to page "<URL_ADMIN_GHOST3>"
    And I wait for 2 seconds
    When I enter email "test@uniandes.edu.co"
    And I wait for 2 seconds
    And I click on element having id "#ember11"
    And I wait for 2 seconds
    Then Validate text main error to login equals to "User not found."