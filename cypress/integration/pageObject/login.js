class login {
    getUsernameInput() {
        return cy.xpath('//input[@id="user-name"]')
    }

    getPasswordInput() {
        return cy.xpath('//input[@id="password"]')
    }

    getLoginButton() {
        return cy.xpath('//input[@id="login-button"]')
    }
}

export default login