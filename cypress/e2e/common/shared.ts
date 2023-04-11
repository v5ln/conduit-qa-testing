import { When } from "@badeball/cypress-cucumber-preprocessor";

When("[COMMON]: User logged in with {string} email and {string} password", (email: string, password: string)=>{
    cy.login(email,password)
})

When("[COMMON]: User logged in with default acconut", ()=>{
    cy.login()
})

When("[COMMON]: User logged out", ()=>{
    cy.logout()
})

When("[COMMON]: User sign up new acconut", ()=>{
    cy.signup()
})

When("[COMMON]: User sign up new acconut with {string} username, {string} email and {string} password", (
    username: string, email: string, password: string)=>{
    cy.signup(username,email,password)
})
