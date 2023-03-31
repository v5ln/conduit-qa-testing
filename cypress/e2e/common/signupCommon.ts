
import { When } from "@badeball/cypress-cucumber-preprocessor";
import SignupPageAction from "../../pageObjects/signupPage/actions";
import { uniqueNamesGenerator, adjectives, colors, animals } from 'unique-names-generator';
import AccountData from "../../fixtures/accontData";

const signupPageAction = new SignupPageAction();

When("[COMMON]: User visit signup page", ()=>{
    signupPageAction.visitSignupPage();
})

When("[COMMON]: User signup to the system with {string} username and {string} email and {string} password",
(username: string, email: string, password: string)=>{
    if(username == "existing")
        username = AccountData.username;
    else if(username == "valid")
        username = uniqueNamesGenerator({ dictionaries: [adjectives, colors, animals] });
    
    if(email == "existing")
        email = AccountData.email;
    else if(email == "valid")
        email = uniqueNamesGenerator({ dictionaries: [adjectives, colors, animals] }) + "@uniqeTC.com";

    signupPageAction
    .visitSignupPage()
    .signup(username, email, password);
})

When("[COMMON]: User fill signup form with {string} username and {string} email and {string} password",
(username: string, email: string, password: string)=>{ 
    if(username == "existing")
        username = AccountData.username;
    else if(username == "valid")
        username = uniqueNamesGenerator({ dictionaries: [adjectives, colors, animals] });
    
    if(email == "existing")
        email = AccountData.email;
    else if(email == "valid")
        email = uniqueNamesGenerator({ dictionaries: [adjectives, colors, animals] }) + "@uniqeTC.com";

    signupPageAction
    .signup(username, email, password);
})