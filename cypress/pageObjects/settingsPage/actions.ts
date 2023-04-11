class SettingsPageAction {
    visitSettingsPage(){
        cy.visit('/settings')
        return this
    }

    typeInImageField(url: string){
        cy.get('input[placeholder="URL of profile picture"]').clear()
        .type(url);
        return this
    }

    typeInUsernameField(username: string){
        cy.get('input[placeholder="Username"]').clear()
        .type(username);
        return this
    }

    typeInBioField(bio: string){
        cy.get('textarea[placeholder="Short bio about you"]').clear()
        .type(bio);
        return this
    }

    typeInEmailField(bio: string){
        cy.get('input[placeholder="Email"]').clear()
        .type(bio);
        return this
    }

    typeInPasswordField(password: string){
        cy.get('input[placeholder="New Password"]').clear()
        .type(password);
        return this
    }

    clickLogoutButton(){
        cy.get('button').contains('Or click here to logout.').click();
    }

    clickSubmitButton(){
        cy.get('button[type="submit"]').click();
        return this
    }
}

export default SettingsPageAction