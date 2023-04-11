Feature: Settings Page Functionality

  Background: User visit Settings page
    Given [COMMON]: User visit Settings page
@focus 
  Scenario: #1 User can update their profile picture URL
    When the user updates their profile picture URL
    Then the profile picture URL should be successfully updated
@focus     
  Scenario: #2 User can update their username
    When the user updates their username
    Then the username should be successfully updated
@focus 
  Scenario: #3 User can update their email
    When the user updates their email
    Then the email should be successfully updated
@focus 
  Scenario: #4 User can update their password
    When the user updates their password
    Then the password should be successfully updated
@focus 
  Scenario: #5 User can log out from the settings page
    When the user clicks the logout button in the settings page
    Then the user should be logged out