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

    checkUserIsLoggedIn(){
        cy.get("a.nav-link[href='#login']", {timeout: 5000}).should('be.exist')
    }
}

export default SettingsPageAsserts