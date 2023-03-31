Feature: Login Page

    Background: User visit login page
    Given [COMMON]: User visit login page

    Scenario: #1 Need an account? link redirects to the registration page
    When User clicks the Need an account? link
    Then User should be redirected to the registration page

    Scenario: #2 Sign in page is displayed and the components are appeard
    Then The url should be valid for Sign In page 
    And User should see the Sign In header
    And Email and password and Sign in button input fields should be displayed and enabled

    Scenario: #3 Email input field accepts valid email addresses
    When User enters a valid email address
    Then Email input field should accept the email address

    Scenario: #4 Password input field accepts valid passwords
    When User enters a valid password
    Then Password input field should accept the password

    Scenario: #5 User can log in with valid email and password
    When [COMMON]: User fill login form with "valid" email and "valid" password
    And User clicks the Sign in button
    Then User should be logged in successfully

    Scenario Outline: <TC> User cannot log in with invalid email or password
    When [COMMON]: User fill login form with <email> email and <password> password
    And User clicks the Sign in button
    Then User should see an error message

    Examples:
    |  TC  |         email         | password  |
    |  #6  |        "valid"        | "invalid" |
    |  #7  | "invalid@invalid.com" |  "valid"  |
    |  #8  | "invalid@invalid.com" | "invalid" |

    Scenario Outline: <TC> User cannot log in with an empty <input> field
    When User leaves the <input> field empty
    And User clicks the Sign in button
    Then User should see an error message

    Examples:
    |  TC  |   input    |
    |  #9  |  "email"   |
    |  #10  | "password" |

    Scenario: #11 Email input field has a placeholder "Email"
    Then Email input field should have the placeholder "Email"

    Scenario: #12 Password input field has a placeholder "Password"
    Then Password input field should have the placeholder "Password"

    Scenario: #13 Sign in button has the text "Sign in"
    Then Sign in button should have the text "Sign in"

    
