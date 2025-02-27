class inventario {
    getAddToCartButtonByProductName(productName) {
        return cy.xpath(`//div[text()="${productName}"]//ancestor::div[@class="inventory_item_description"]//div[@class="pricebar"]//button[text()="Add to cart"]`)
    }

    getShoppingCartButton() {
        return cy.xpath('//a[@class="shopping_cart_link"]')
    }

    getMenuBarBurger() {
        return cy.xpath('//button[@id="react-burger-menu-btn"]')
    }

    getLogoutLinkFromMenuBurger() {
        return cy.xpath('//a[@id="logout_sidebar_link"]')
    }
}

export default inventario