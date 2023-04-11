import { Then, When } from "@badeball/cypress-cucumber-preprocessor";
import SettingsPageAction from "../../../pageObjects/settingsPage/actions";
import User from "../../../fixtures/model/user"
import AccountData from "../../../fixtures/accontData"
import TopBarComponentAsserts from "../../../pageObjects/topBarComponent/asserts";
import Services from "../../../pageObjects/shared/services";

const settingsPageAction = new SettingsPageAction()
const topBarComponentAsserts = new TopBarComponentAsserts()
var editUserData: User;

beforeEach(()=>{
    Services.createNewUser()
    editUserData = AccountData.createNewUserData()
})  

When("the user updates their profile picture URL", () => {
    settingsPageAction
    .typeInImageField(editUserData.image)
    .clickSubmitButton()
});

When("the user updates their username", () => {
    settingsPageAction
    .typeInUsernameField(editUserData.username)
    .clickSubmitButton()
});
  
When("the user updates their email", () => {
    settingsPageAction
    .typeInEmailField(editUserData.email)
    .clickSubmitButton()
});
  
When("the user updates their password", () => {
    settingsPageAction
    .typeInPasswordField(editUserData.password)
    .clickSubmitButton()
});
  
When("the user clicks the logout button in the settings page", () => {
    settingsPageAction
    .clickLogoutButton()
});

Then("the profile picture URL should be successfully updated", () => {
    cy.visit('/@'+AccountData.newUsername);
    cy.get('img').should('have.attr', 'src', editUserData.image);
});
  
Then("the username should be successfully updated", () => {
    cy.visit('')
    topBarComponentAsserts.checkProfileIsAppeard(editUserData.username)
});

Then("the email should be successfully updated", () => {
    cy.visit('/settings');
    cy.get('input[placeholder="Email"]').should('have.value', editUserData.email);
});

Then("the password should be successfully updated", () => {
    cy.logout();
    cy.login(AccountData.newEmail, editUserData.password);
    topBarComponentAsserts.checkProfileIsAppeard(AccountData.newUsername)
});

Then("the user should be logged out", () => {
    cy.get("a.nav-link[href='#login']", {timeout: 5000}).should('be.exist')
});
