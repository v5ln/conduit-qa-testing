
import { When } from "@badeball/cypress-cucumber-preprocessor";
import SignupPageAction from "../../pageObjects/signupPage/actions";
import AccountData from "../../fixtures/accontData";

const signupPageAction = new SignupPageAction();

When("[COMMON]: User visit signup page", ()=>{
    signupPageAction.visitSignupPage();
})

When("[COMMON]: User fill signup form with {string} username and {string} email and {string} password",
(username: string, email: string, password: string)=>{ 
    if(username == "existing")
        username = AccountData.username;
    else if(username == "valid")
        username = AccountData.getNewUsername();
    
    if(email == "existing")
        email = AccountData.email;
    else if(email == "valid")
        email = AccountData.getNewEmail();

    signupPageAction
    .signup(username, email, password);
})