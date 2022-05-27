Feature: ghost3_F#1 Acceso a la plataforma

  @user1 @web
  Scenario: S#1 Como usuario registrado ingreso un usuario y una contraseña valida y acceso a la plataforma
    Given I navigate to page "<URL_ADMIN_GHOST3>"        
    And I wait for 2 seconds
    When I enter email "<USERNAME1>"
    And I wait for 2 seconds
    And In ghost3 I enter password "<PASSWORD1>"
    And I wait for 2 seconds
    And I click on element having id "#ember12"
    And I wait for 2 seconds
    And I click on element having id "#ember47"
    And I wait for 2 seconds
    Then Close the sesion