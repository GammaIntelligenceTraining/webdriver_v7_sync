Feature: Admin navigates to logs page

    @English
    Scenario Outline: Admin navigates to logs page
        Given Admin is on homepage and language is English
        When Click on logs Page
        Then User moves to logs page and verify title <titleText>
        Examples:
            | titleText |
            | Logs      |