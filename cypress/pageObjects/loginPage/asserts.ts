class LoginPageAsserts {

    checkUrl(){
        cy.url().should('include', '/login')
        return this
    } 

    checkEmailInputIsAppeard(){
        cy.get('input[type="email"]').should("be.visible")
        return this
    }

    checkPasswordInputIsAppeard(){
        cy.get('input[type="password"]').should("be.visible")
        return this
    }

    checkSigninButtonIsAppeard(){
        cy.get('button[type="submit"]').should("be.visible").and("not.be.disabled");
        return this
    }

    checkInvalidMsgIsAppeard(){
        cy.get('ul[class="error-messages"]').should("be.visible");
        return this
    }
}

export default LoginPageAsserts