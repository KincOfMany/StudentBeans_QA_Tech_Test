Feature: Trending Offers

  Scenario: As a user I want to go to the Trending Offers page and select and offer
    Given I am on the studentbeans homepage
    When I click on Trending Now offers
    Then I should open the 6th discount within the Trending Now offers list
