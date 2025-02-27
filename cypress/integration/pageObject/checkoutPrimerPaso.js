class checkoutPrimerPaso {
    getFirstnameInput() {
        return cy.xpath('//input[@id="first-name"]')
    }
    getLastnameInput() {
        return cy.xpath('//input[@id="last-name"]')
    }
    getPostalCodeInput() {
        return cy.xpath('//input[@id="postal-code"]')
    }

    getContinueButton() {
        return cy.xpath('//input[@id="continue"]')
    }
}

export default checkoutPrimerPaso