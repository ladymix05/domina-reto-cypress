class checkoutCompleto {
    getBackToInventoryButton() {
        return cy.xpath('//button[@id="back-to-products"]')
    }
}

export default checkoutCompleto