Feature: ghost4_F#1 Acceso a la plataforma

  @user2 @web
  Scenario: S#4 Como usuario registrado ingreso un usuario valido y una contraseña invalida entonces retorne password incorrecto
    Given I navigate to page "<URL_ADMIN_GHOST4>"
    And I wait for 2 seconds
    When I enter email "<USERNAME1>"
    And I wait for 2 seconds
    And In ghost4 I enter password "badpassword"
    And I wait for 2 seconds
    And I click on element having id "#ember11"
    And I wait for 2 seconds
    Then Validate text main error to login equals to "Your password is incorrect."