class SignupPageAction {

    visitSignupPage(){
        cy.visit("/register")
        return this
    }

    signup(username: string, email: string, password: string){
        cy.get('input[placeholder="Username"]').clear().type(username)
        cy.get('input[type="email"]').clear().type(email)
        cy.get('input[type="password"]').clear().type(password)
        return this
    }

    typeInUsernameField(username: string){
        cy.get('input[placeholder="Username"]').clear().type(username)
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

    clickSignupButton(){
        cy.get('button[type="submit"]').click()
        return this
    }
}

export default SignupPageAction