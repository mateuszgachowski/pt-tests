Feature: Tips Page with filters
  As a ProTipster user
  I want to see greatly designed tips page
  so that I benefit from new business model (ranked tips, not tipsters)


  Scenario Outline: Sport Filters to change url (PROT-2851)
    Given I am on the ProTipster tips page
     When I click on the <filter> sport filter
     Then I should land on <expected-url> url

    Examples:
      | filter            | expected-url            |
      | All Sports        | /tips                   |
      | Football          | /tips/football          |
      | Basketball        | /tips/basketball        |
      | Tennis            | /tips/tennis            |
      | Ice Hockey        | /tips/ice-hockey        |
      | Baseball          | /tips/baseball          |
      | American Football | /tips/american-football |


  Scenario: tips are ranked per new system
    Given I am on the ProTipster tips page
     Then I should see ranked list of tips

  Scenario: tips are ranked accordingly
    Given I am on the ProTipster tips page
     Then I should see accordingly ranked list of tips
