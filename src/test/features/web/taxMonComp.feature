@ui
Feature: Verify the components present on dashboard

  Background: User navigate to the URL and enter the credentials
    Given User is on login page
    When User enter credentials

  Scenario: User verify the components present on Taxonomy overview dashboard
    Then User verify the successful login
    When User verify the components of trend Graph
    # And User verify the filters present on the page
    Then User verify the components of data source graph
    And User verify the "View connections" button
    Then User verify the components of hierarchy graph
    Then User verify the components of market graph

  Scenario: User verify the components present on Taxonomy compliance dashboard
    And User click on arrowdown button
    And User click on the "Taxonomy compliance" on side navigation
    And User verify the header of the compliance page
    And User verify the compliance summary block
    And User verify the Table component texts
    And User verify the pagination presented on compliance page
    # Then User logout the application