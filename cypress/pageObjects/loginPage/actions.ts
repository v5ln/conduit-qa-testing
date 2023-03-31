import AccountData from "../../fixtures/accontData"

class LoginPageAction {

    visitLoginPage(){
        cy.visit('/login')
        return this
    } 

    login(email: string = AccountData.email, password: string = AccountData.password){
        cy.get('input[type="email"]').clear().type(email)
        cy.get('input[type="password"]').clear().type(password)
        cy.get('button[type="submit"]').click()
        return this
    }

    typeInEmailField(email: string){
        cy.get('input[type="email"]').clear().type(email)
        return this
    }

    typeInPassword(password: string){
        cy.get('input[type="password"]').clear().type(password)
        return this
    }

    clickSignInButton(){
        cy.get('button[type="submit"]').click()
        return this
    }
}

export default LoginPageAction