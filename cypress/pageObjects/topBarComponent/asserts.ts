import AccountData from "../../fixtures/accontData"

class TopBarComponentAsserts {

    checkSignInUrl(isExist = true){
        cy.url().should(isExist ? 'include': 'not.include', '/login')
        return this
    }
    
    checkSignUpUrl(isExist = true){
        cy.url().should(isExist ? 'include': 'not.include', '/register')
        return this
    }

    checkNewPostUrl(isExist = true){
        cy.url().should(isExist ? 'include': 'not.include', '/editor')
        return this
    }

    checkSettingsUrl(isExist = true){
        cy.url().should(isExist ? 'include': 'not.include', '/settings')
        return this
    }

    checkProfileUrl(username = AccountData.username, isExist = true){
        cy.url().should(isExist ? 'include': 'not.include', '/@'+username)
        return this
    }

    checkLogoIsAppeard(isExist = true){
        cy.get("a.navbar-brand").should(isExist ? 'be.exist': 'not.be.exist')
        return this
    }

    checkHomeIsAppeard(isExist = true){
        cy.get("a.nav-link[href='#']").should(isExist ? 'be.exist': 'not.be.exist')
        return this
    }

    checkSignInIsAppeard(isExist = true){
        cy.get("a.nav-link[href='#login']").should(isExist ? 'be.exist': 'not.be.exist')
        return this
    }

    checkSignUpIsAppeard(isExist = true){
        cy.get("a.nav-link[href='#register']").should(isExist ? 'be.exist': 'not.be.exist')
        return this
    }

    checkNewPostIsAppeard(isExist = true){
        cy.get("a.nav-link[href='#editor']").should(isExist ? 'be.exist': 'not.be.exist')
        return this
    }

    checkSettingsIsAppeard(isExist = true){
        cy.get("a.nav-link[href='#settings']").should(isExist ? 'be.exist': 'not.be.exist')
        return this
    }

    checkProfileIsAppeard(username = AccountData.username, isExist = true){
        cy.get("a.nav-link[href='#@"+username+"']").should(isExist ? 'be.exist': 'not.be.exist')
        return this
    }
}

export default TopBarComponentAsserts