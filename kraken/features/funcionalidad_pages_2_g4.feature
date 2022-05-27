Feature: ghost4_F#5 Crear una página en modo draft

  @user1 @web
  Scenario: S#2 Como owner/staff ingreso a Pages , edito una pagina existente y se actualiza la pagina
    Given I navigate to page "<URL_ADMIN_GHOST4>"
    And I wait for 1 seconds
    When I enter email "<USERNAME1>"
    And I wait for 1 seconds
    And In ghost4 I enter password "<PASSWORD1>"
    And I wait for 1 seconds
    And I click on element having id "#ember11"
    And I wait for 3 seconds
    And I navigate to page "<URL_PAGES_GHOST4>"
    And I wait for 2 seconds
    And I click on element css_element "/html[1]/body[1]/div[2]/div[1]/main[1]/section[1]/section[1]/ol[1]/li[2]/a[3]/div[1]/span[1]"
    And I wait for 1 seconds
    And I fill on field having css selector "/html[1]/body[1]/div[2]/div[1]/main[1]/section[1]/div[1]/div[1]/textarea[1]" with text "Testing with Kraken Updated"
    And I wait for 4 seconds
    Then I click on element css_element "/html[1]/body[1]/div[2]/div[1]/main[1]/section[1]/header[1]/section[1]/button[1]/*[name()='svg'][1]"
    And I wait for 1 seconds
    And I click on element css_element "/html[1]/body[1]/div[4]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/form[1]/div[1]/a[1]"
    And I wait for 5 seconds
    And I navigate to page "<URL_PAGES_GHOST4>"
    And I wait for 5 seconds
    And I click on element css_element "/html[1]/body[1]/div[2]/div[1]/main[1]/section[1]/section[1]/ol[1]/li[2]/a[3]/div[1]/span[1]"
    And I wait for 5 seconds
    Then Validate value text having id "/html[1]/body[1]/div[2]/div[1]/main[1]/section[1]/div[1]/div[1]/textarea[1]" equals to "Testing with Kraken Updated"   
    And I wait for 5 seconds     