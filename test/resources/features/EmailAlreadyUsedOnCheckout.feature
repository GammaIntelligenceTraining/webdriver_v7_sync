Feature: Checkout as registered user

    @English
    Scenario: Registered user notification if email is used
        Given User is on Home page
        When User clicks Catalog link
        And User clicks on Item link
        And User clicks on Add to cart item button        
        And item should be added to the cart        
        And User selects to create a new account
        #And User fills personal details
        And User enters already used email
        Then message about existing Email appears