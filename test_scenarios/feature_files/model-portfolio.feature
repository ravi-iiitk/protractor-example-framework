Feature: Model Portfolio Features of WeInvest Web APP
  @TestA
  Scenario: Test A
    Given I Navigate to model portfolio page
    When I Select All Weather Strategy by clicking on Explore Investment Ideas
    And In next screen I click on button Customize Portfolio to make changes to portfolio
    Then I Click on Customize button to enable edit controls
    And I Change slider of SPDR S and P 500 ETF TRUST SPY US EQUITY to 50 Percent
    Then Click on Rebalance button
    When I Click on Invest button
    Then On next page I must see that SPDR... under What your portfolio contain ? to be 50 percent

  @TestB
  Scenario: Test B:
    Given I Navigate to model portfolio page
    When I Select All Weather Strategy by clicking on Explore Investment Ideas
    And In next screen I click on button Customize Portfolio to make changes to portfolio
    Then I Click on Customize button to enable edit controls
    Then I Click on Customise button and then ensure the text change to Reset
    When I Click on +Add Stock
    And I Click Add Stock in BT Group plc row.
    And I Click on Done
    Then I must see whether BT Group plc is added to the portfolio

   @TestC
  Scenario: Test C
    Given I Navigate to model portfolio page
    When I Check whether tabs with below texts are available now Where X and Y are are numbers
    Then I must see X Portfolio recommendations based on your preferences
    And I must see Y other portfolio choices available
    When I Resize browser window to 375 x 667
    And I Check whether tabs with below texts are available now also Where X and Y are are numbers
    Then I must see Recommended X
    And I must see Others Y
    When I Check X, Y are same
    Then I must them as in step 2