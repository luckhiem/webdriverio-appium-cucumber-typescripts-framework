@demo
Feature: Interact with Elfie Website

  Scenario: Search for Elfie and interact with the website
    Given I am on the Google homepage
    When I search for "Elfie Singapore"
    And I click on the first search result
    Then the logo should be displayed
    And I accept cookie promt if it displayed
    And I click on the hamburger menu
    Then the hamburger menu should change to "X"
    And I click close the hamburger menu
    Then the home page should be displayed
    And I scroll to the bottom
    Then I should see the copyright text "Copyright © 2024 Elfie Pte. Ltd."
