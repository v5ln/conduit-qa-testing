class SettingsPageAsserts {


    checkProfileImage(username: string, image: string){
        cy.visit('/@'+username);
        cy.get('img').should('have.attr', 'src', image);
        return this
    }

    checkEmail(email: string){
        cy.get('input[placeholder="Email"]').should('have.value', email);
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

export default SettingsPageAsserts