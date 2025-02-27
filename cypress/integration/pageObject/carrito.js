class carrito {
    getRemoveButtonByProductName(productName) {
        return cy.xpath(`//div[@class="cart_list"]//div[@class="inventory_item_name" and text()="${productName}"]//ancestor::div[@class="cart_item_label"]//div[@class="item_pricebar"]//button[text()="Remove"]`)
    }

    getCheckoutButton() {
        return cy.xpath('//button[@id="checkout"]')
    }

    getCartListDivs() {
        return cy.xpath('//div[@class="cart_list"]/div[@class="cart_item"]')
    }
}

export default carrito