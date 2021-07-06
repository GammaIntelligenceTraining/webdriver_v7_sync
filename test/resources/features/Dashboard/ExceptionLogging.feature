Feature: Admin navigates to Exception Logging page

    @English
    Scenario Outline: Admin navigates to Exception Logging page
        Given Admin is on homepage and language is English
        When Click on Exception Logging Page
        Then User moves to Exception Logging page and verify title <titleText>
        Examples:
            | titleText |
            | Exception logging |