Feature: Verify the links

    Background: Login Scenarios
        Given Open the Login Page

    #JIRA Issue Id REVI-18 : https://mdm.atlassian.net/browse/REVI-18
    @English
    Scenario Outline: Verify the links
        Given User is on Homepage
        When User clicks <Linkname>
        Then user could see the <Title>
        Examples:
            | Linkname | Title |
            | Uudised  | Uudised | 
            | Lahendused | Lahendused |   
            | Kontakt | Kontakt | 

   
