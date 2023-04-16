import AccountData from "../../fixtures/accountData";

class TopBarComponentAction {

    visitHomePage(){
        cy.visit("")
        return this
    }

    clickLogoButton(){
        cy.get("a.navbar-brand").click({force: true});
        return this
    }

    clickHomeButton(){
        cy.get("a.nav-link[href='#/']").click({force: true});
        return this
    }

    clickSignInButton(){
        cy.get("a.nav-link[href='#login']").click({force: true});
        return this
    }

    clickSignUpButton(){
        cy.get("a.nav-link[href='#register']").click({force: true});
        return this
    }

    clickNewPostButton(){
        cy.get("a.nav-link[href='#editor']").click({force: true});
        return this
    }

    clickSettingsButton(){
        cy.get("a.nav-link[href='#settings']").click({force: true});
        return this
    }

    clickProfileButton(username: String = AccountData.username){
        cy.get("a.nav-link[href='#@"+username+"']").click({force: true});
        return this
    }
}

export default TopBarComponentAction