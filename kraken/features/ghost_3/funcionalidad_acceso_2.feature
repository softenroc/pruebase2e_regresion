Feature: Acceso a la plataforma

  @user2 @web
  Scenario: Como usuario no registrado ingreso un usuario y una contraseña invalida entonces retorne mensaje indicando que el usuario no existe
    Given I navigate to page "<URL_ADMIN>"
    And I wait for 2 seconds
    When I enter email "bad@uniandes.edu.co"
    And I wait for 2 seconds
    And I enter password "313213"
    And I wait for 2 seconds
    And I click on element having id "#ember12"
    And I wait for 3 seconds
    Then Validate text main error to login equals to "There is no user with that email address."