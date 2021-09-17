var homePageLocators = {
    loginButton: "[href='/login']",
    userButton: ".utility-nav__item--avatar",
    accountButton: "Account",
    logoutButton: "Logout"
}

class HomePage {
    loginButton() {return cy.get(homePageLocators.loginButton);}
    userButton() {return cy.get(homePageLocators.userButton);}
    accountButton() {return cy.contains(homePageLocators.accountButton);}
    logoutButton() {return cy.contains(homePageLocators.logoutButton);}

    initialGoToHomePage(){
        cy.visit('https://qa.mntd.net/')
    }

    goToLoginPage(){
        this.loginButton().click();
    }

    goToAccountDetails(){
        this.userButton().click();
        this.accountButton().click();
    }

    logout(){
        this.userButton().click();
        this.logoutButton().click();
    }

    verifyUserNotLoggedIn() {
        this.loginButton().should('be.visible')
    }
}

export default HomePage;