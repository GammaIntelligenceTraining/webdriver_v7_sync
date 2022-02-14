Feature: Admin checks the build number

    @English
    Scenario: Build number is available inside the build
        Given Admin is on homepage and language is English
        When Click on Build number button
        Then Information about the build appears