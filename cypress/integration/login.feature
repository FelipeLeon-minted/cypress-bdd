Feature: Login

    Background:
        Given I visit the homepage

    Scenario: Login with username and password
        When I go to login page
        And I login with normal user
        And I go to my account page
        Then The registered user is "automation1@minted.com"
        When I logout from my account
        Then I verify I'm logged out

    Scenario Outline: Login with different usernames and passwords
        When I go to login page
        And I login with "<user>" and "<password>"
        And I go to my account page
        Then The registered user is "<user>"
        When I logout from my account
        Then I verify I'm logged out
        
        Examples:
            | user                   | password         |
            | automation1@minted.com | LX>)^4tr>HN}@~^8 |
            | Felipe.Leon@minted.com | mypassword       |


