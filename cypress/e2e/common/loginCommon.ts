import { When, Given } from "@badeball/cypress-cucumber-preprocessor";
import LoginPageAction from "../../pageObjects/loginPage/actions";
import AccountData from "../../fixtures/accountData";

const loginPageAction = new LoginPageAction();


When("[COMMON]: User visit login page", ()=>{
    loginPageAction.visitLoginPage();
})


When("[COMMON]: User fill login form with {string} email and {string} password",
(email: string, password: string)=>{
    cy.get('input[type="email"]').clear().type(email == "valid" ? AccountData.email : email);
    cy.get('input[type="password"]').clear().type(password == "valid" ? AccountData.password : password);
})