Feature: ghost4_F#2 Funcionalidad Staf

  @user1 @web
  Scenario: S#1 Como owner ingreso a Staff , link owner y cambio la informacion de mi localizacion para validar la actualizacion de datos
    Given I navigate to page "<URL_ADMIN_GHOST4>"
    And I wait for 2 seconds
    When I enter email "<USERNAME1>"
    And I wait for 2 seconds
    And In ghost4 I enter password "<PASSWORD1>"
    And I wait for 2 seconds
    And I click on element having id "#ember11"
    And I wait for 2 seconds
    And I navigate to page "<URL_STAFF_GHOST4>"
    And I wait for 2 seconds
    And Click en link owner into staff users
    And I wait for 1 seconds
    And I fill on element having id "#user-location" with text "Barranquilla"
    And I wait for 1 seconds
    And I click on element css_element "/html[1]/body[1]/div[2]/div[1]/main[1]/section[1]/header[1]/section[1]/button[1]/span[1]"
    And I wait for 2 seconds
    And I navigate to page "<URL_STAFF_GHOST4>"
    And I wait for 2 seconds
    And Click en link owner into staff users
    And I wait for 2 seconds
    Then Validate value text having id "#user-location" equals to "Barranquilla"
    And I wait for 2 seconds
    And I click on element having id "#ember47"
    And I wait for 1 seconds
    Then Close the sesion



