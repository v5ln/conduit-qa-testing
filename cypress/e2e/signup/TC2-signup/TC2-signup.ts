import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import SignupPageAction from "../../../pageObjects/signupPage/actions";
import SignupPageAsserts from "../../../pageObjects/signupPage/asserts";

const signupPageAction = new SignupPageAction();
const signupPageAssert = new SignupPageAsserts();

When("User clicks the Have an account? link", () => {
    cy.get
    ("a[href='#login']").contains("Have an account?").click();
});

When("User clicks the Sign up button", () => {
    signupPageAction.clickSignupButton()
})

When("User leaves the {string} field empty", (input: string) => {
    if (!input.includes("username")) 
        signupPageAction.typeInUsernameField("QniqueUserTC");
    
    if (!input.includes("email")) 
        signupPageAction.typeInEmailField("QniqueUserTC@QniqueUserTC.com");

    if (!input.includes("password")) 
        signupPageAction.typeInPassword("password123");
});  

Then("User should see the Sign Up header", () => {
    cy.get("h1.text-xs-center").should("contain", "Sign Up");
});

Then("The url should be valid for Sign Up page", () => {
    signupPageAssert.checkUrl();
});

Then("Username and Email and password and Sign up button input fields should be displayed and enabled", () => {
    signupPageAssert
        .checkSignupButtonIsAppeard()
        .checkUsenameInputIsAppeard()
        .checkEmailInputIsAppeard()
        .checkPasswordInputIsAppeard();
});

Then("User should be redirected to the login page", () => {
    cy.url().should("include", "/login");
});

Then("Username input field should have the placeholder {string}", (placeholder: string) => {
    cy.get('input[placeholder="Username"]').should("have.attr", "placeholder", placeholder);
});

Then("Email input field should have the placeholder {string}", (placeholder: string) => {
    cy.get('input[placeholder="Email"]').should("have.attr", "placeholder", placeholder);
});

Then("Password input field should have the placeholder {string}", (placeholder: string) => {
    cy.get('input[placeholder="Password"]').should("have.attr", "placeholder", placeholder);
});

Then("User should be signed up successfully", () => {
    cy.url().should('not.include', '/register')
    // user name should appear in top bar (top bar assert)
});

Then("User should see an error message", () => {
    signupPageAssert.checkInvalidMsgIsAppeard();
});
  
  Then("Sign up button should have the text {string}", (text: string) => {
    cy.get('button[type="submit"]').should("contain", text);
  });