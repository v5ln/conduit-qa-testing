Feature: Top Bar Navigation

    Background:
    [COMMON]: User visit home page

#   Scenario: Logo button redirects to the home page
#     When [COMMON]: User clicks the logo button
#     Then Home URL should be "valid"

#   Scenario: Home button redirects to the home page
#     When [COMMON]: User clicks the Home button
#     Then Home URL should be "valid"

    Scenario: #1 Sign in button redirects to the sign in page
    Given User is logged out
    When [COMMON]: User clicks the Sign in button
    Then Sign in URL should be "valid"

    Scenario: #2 Sign up button redirects to the sign up page
    Given User is logged out
    When [COMMON]: User clicks the Sign up button
    Then Sign up URL should be "valid"

    Scenario: #3 New Post button redirects to the new post page
    Given User is logged in
    When [COMMON]: User clicks the New Post button
    Then New Post URL should be "valid"

    Scenario: #4 Settings button redirects to the settings page
    Given User is logged in
    When [COMMON]: User clicks the Settings button
    Then Settings URL should be "valid"

    Scenario: #5 Profile button redirects to the profile page
    Given User is logged in
    When [COMMON]: User clicks the Profile button
    Then Profile URL should be "valid"

    Scenario: #6 Verify buttons when user is logged out
    Given User is logged out
    Then Logo button should be "displayed"
    And Home button should be "displayed"
    And Sign in button should be "displayed"
    And Sign up button should be "displayed"
    And New Post button should be "not displayed"
    And Settings button should be "not displayed"
    And Profile button should be "not displayed"

    Scenario: #7 Verify buttons when user is logged in
    Given User is logged in
    Then Logo button should be "displayed"
    And Home button should be "displayed"
    And Sign in button should be "not displayed"
    And Sign up button should be "not displayed"
    And New Post button should be "displayed"
    And Settings button should be "displayed"
    And Profile button should be "displayed"
