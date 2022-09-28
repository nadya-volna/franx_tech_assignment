Feature: Profile page on demoqa.com

#To work with Profile page user needs to be loggen in
 Background:
    Given User LogsIn as "nadia_vol" with "iloveJenya1!"

  Scenario: Check user can go to Book Store
    Given User visits profile
    When User clicks Go To Book Store button
    Then User see Book Store page

  Scenario: Check user can delete all books
    Given User visits profile
    When User clicks Delete All Books button
    And User press OK
    Then User see No rows in the table

  Scenario: Check user can log out successfully
    Given User visits profile
    When User clicks log out button
    Then User see Welcome user form


 

    