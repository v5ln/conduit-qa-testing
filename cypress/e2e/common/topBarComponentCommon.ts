import { When, Given } from "@badeball/cypress-cucumber-preprocessor";
import TopBarComponentAction from "../../pageObjects/topBarComponent/actions";

const topBarComponentAction = new TopBarComponentAction();


When("[COMMON]: User visit home page", ()=>{
    topBarComponentAction.visitHomePage();
})

When("[COMMON]: User clicks the logo button", () => {
    topBarComponentAction.clickLogoButton()
})

When("[COMMON]: User clicks the Home button", () => {
    topBarComponentAction.clickHomeButton()
})

When("[COMMON]: User clicks the Sign in button", () => {
    topBarComponentAction.clickSignInButton()
})

When("[COMMON]: User clicks the Sign up button", () => {
    topBarComponentAction.clickSignUpButton()
})

When("[COMMON]: User clicks the New Post button", () => {
    topBarComponentAction.clickNewPostButton()
})

When("[COMMON]: User clicks the Settings button", () => {
    topBarComponentAction.clickSettingsButton()
})

When("[COMMON]: User clicks the Profile button", () => {
    topBarComponentAction.clickProfileButton()
})