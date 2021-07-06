Feature: Login-Module. Admin should be able to login

    Background: Login Scenarios
        Given Open the Login Page

    #JIRA Issue Id REVI-18 : https://mdm.atlassian.net/browse/REVI-18
    @English
    Scenario Outline: Successful Login Scenario
        Given Select the language English
        When Enter <Username> and <Password> and click login button
        Then user logged in successful and admin name <Username> is visible
        And logout the user
        Examples:
            | Username | Password |
            | admin    | N3p1fwux |    

    @English
    #Jira Issue :https://mdm.atlassian.net/browse/REVI-19
    Scenario Outline: Unsuccessful Login Scenario
        Given Select the language English
        When Enter <Username> and <Password> and click login button
        Then Incorrect credential message is visible <ErrorMessage>
        Examples:
            | Username | Password | Langauge | ErrorMessage                      |
            | admin    | 123456   | English  | Username or password is incorrect |

    @English
    #Jira Issue :https://mdm.atlassian.net/browse/REVI-20
    Scenario Outline: Verify input field validation message
        When Empty Username input
        Then Validation message <ErrorMessage> should be visible for Username
        When Empty Password input
        Then Validation message <ErrorMessage> should be visible for Password
        Examples:
            | ErrorMessage            |
            | This field is required |
