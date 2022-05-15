Feature: ghost4_F#1 Acceso a la plataforma

  @user1 @web
  Scenario: S#1 Como usuario registrado ingreso un usuario y una contraseña valida y acceso a la plataforma
    Given I navigate to page "<URL_ADMIN_GHOST4>"
    And I wait for 2 seconds
    When I enter email "<USERNAME1>"
    And I wait for 2 seconds
    And In ghost4 I enter password "<PASSWORD1>"        
    And I wait for 2 seconds
    And I click on element having id "#ember11"
    And I wait for 2 seconds
    And I click on element having id "#ember33"
    And I wait for 2 seconds
    Then Close the sesion
    