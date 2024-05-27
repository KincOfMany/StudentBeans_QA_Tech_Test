Feature: Log In

  Scenario: As a user I want to go to the log in with invalidate credentials and receive an error message
    Given I am on the studentbeans homepage
    And I open the log in page
    When I enter email: "test@test.com" password: "testingStuff"
    Then I should see an error message