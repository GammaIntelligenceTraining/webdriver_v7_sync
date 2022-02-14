Feature: User navigates to Catalog page

    @English
    Scenario: User navigates to Catalog page
        Given User is on Home page
        When User clicks Catalog link
        And User clicks on Item link
        And User clicks on Add to cart item button        
        And item should be added to the cart
        And user credentials should be entered