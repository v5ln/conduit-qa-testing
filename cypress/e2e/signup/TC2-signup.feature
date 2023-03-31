Feature: Sign Up Page

    Background: User visit sign up page
    Given [COMMON]: User visit signup page

    Scenario: #1 Sign Up page is displayed and the components are appeard
    Then The url should be valid for Sign Up page
    And User should see the Sign Up header
    And Username and Email and password and Sign up button input fields should be displayed and enabled

    Scenario: #2 Have an account? link is displayed and navigates to the login page
    When User clicks the Have an account? link
    Then User should be redirected to the login page

    Scenario: #3 Username input field has a placeholder "Username"
    Then Username input field should have the placeholder "Username"

    Scenario: #4 Email input field has a placeholder "Email"
    Then Email input field should have the placeholder "Email"

    Scenario: #5 Password input field has a placeholder "Password"
    Then Password input field should have the placeholder "Password"

    Scenario: #7 User can sign up with a valid username, email, and password
    When [COMMON]: User fill signup form with "valid" username and "valid" email and "valid" password
    And User clicks the Sign up button
    Then User should be signed up successfully

    Scenario Outline: <TC> User cannot sign up with an existing <input>
    When [COMMON]: User fill signup form with <username> username and <email> email and "valid" password
    And User clicks the Sign up button
    Then User should see an error message

    Examples:
    |  TC  |   email    |  username  |       input        |
    |  TC  |  "valid"   | "existing" |      username      |
    |  #9  | "existing" | "existing" | username and email |
    |  #10 | "existing" |  "valid"   |       email        |


    Scenario Outline: <TC> User cannot sign up with an empty <input> field
    When User leaves the <input> field empty
    And User clicks the Sign up button
    Then User should see an error message

    Examples:
    |   TC  |               input               |
    |  #11  |             "username"            |
    |  #12  |              "email"              |
    |  #13  |             "password"            |
    |  #14  |      "username and password"      |
    |  #15  |        "username and email"       |
    |  #16  |        "password and email"       |
    |  #17  | "username and password and email" |

    Scenario: #18 Sign up button has the text "Sign up"
    Then Sign up button should have the text "Sign up"
