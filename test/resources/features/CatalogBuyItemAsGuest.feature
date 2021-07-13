Feature: User buys item as a guest
  
    Scenario Outline: User buys item as a guest
        Given User is on Home page
        When User clicks Catalog link
        And User selects first item
        And User adds item to cart
        And User clicks cart
        And User processes with order
        And User selects Guest option
        And User enters the personal details <Firstname>, <Lastname> as Guest
        #And User does not select delivery mode
        #Then User should see confirmation of order
        Examples:
            | Firstname | Lastname |
            | Jaan | Tamm |
            | Maksim | Kolodijev |
            | Jaak | Saar |
            | Максим | Кириллица |
    
    
        


