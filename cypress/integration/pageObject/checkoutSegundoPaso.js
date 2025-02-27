class checkoutSegundoPaso {
    getCartListDivs() {
        return cy.xpath('//div[@class="cart_list"]/div[@class="cart_item"]')
    }

    getDeletedItemByProductName(productName) {
        return cy.xpath(`//div[@class="cart_list"]/div[@class="cart_item"]/div[@class="cart_item_label"]//div[@class="inventory_item_name" and text()="${productName}"]`)
    }

    getFinishButton() {
        return cy.xpath('//button[@id="finish"]')
    }
}

export default checkoutSegundoPaso