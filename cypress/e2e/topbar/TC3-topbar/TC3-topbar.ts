import { Then } from "@badeball/cypress-cucumber-preprocessor";
import TopBarComponentAsserts from "../../../pageObjects/topBarComponent/asserts";
import AccountData from "../../../fixtures/accontData";

const topBarComponentAsserts = new TopBarComponentAsserts();

Then("Sign in URL should be {string}", (valid: string) => {
    topBarComponentAsserts.checkSignInUrl(valid == "valid" ? true: false);
});

Then("Sign up URL should be {string}", (valid: string) => {
    topBarComponentAsserts.checkSignUpUrl(valid == "valid" ? true: false);
});

Then("New Post URL should be {string}", (valid: string) => {
    topBarComponentAsserts.checkNewPostUrl(valid == "valid" ? true: false);
});

Then("Settings URL should be {string}", (valid: string) => {
    topBarComponentAsserts.checkSettingsUrl(valid == "valid" ? true: false);
});

Then("Profile URL should be {string}", (valid: string) => {
    topBarComponentAsserts.checkProfileUrl(AccountData.username, valid == "valid" ? true: false);
});

Then("Logo button should be {string}", (displayed: string) => {
    topBarComponentAsserts.checkLogoIsAppeard(displayed == "displayed" ? true: false);
});
  
Then("Home button should be {string}", (displayed: string) => {
    topBarComponentAsserts.checkHomeIsAppeard(displayed == "displayed" ? true: false);
});
  
Then("Sign in button should be {string}", (displayed: string) => {
    topBarComponentAsserts.checkSignInIsAppeard(displayed == "displayed" ? true: false);
});
  
Then("Sign up button should be {string}", (displayed: string) => {
    topBarComponentAsserts.checkSignUpIsAppeard(displayed == "displayed" ? true: false);
});
  
Then("New Post button should be {string}", (displayed: string) => {
    topBarComponentAsserts.checkNewPostIsAppeard(displayed == "displayed" ? true: false);
});
  
Then("Settings button should be {string}", (displayed: string) => {
    topBarComponentAsserts.checkSettingsIsAppeard(displayed == "displayed" ? true: false);
});
  
Then("Profile button should be {string}", (displayed: string) => {
    topBarComponentAsserts.checkProfileIsAppeard(AccountData.username, displayed == "displayed" ? true: false);
});
