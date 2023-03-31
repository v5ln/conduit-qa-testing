class SignupPageAsserts {

    checkUrl(){
        cy.url().should('include', '/register')
        return this
    }

    checkUsenameInputIsAppeard(){
        cy.get('input[placeholder="Username"]').should("be.visible")
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

    checkSignupButtonIsAppeard(){
        cy.get('button[type="submit"]').should("be.visible").and("not.be.disabled")
        return this
    }

    checkInvalidMsgIsAppeard(){
        cy.get('ul[class="error-messages"]').should("be.visible")
    }
}

export default SignupPageAsserts