import {Before, Given, And, When, Then} from 'cypress-cucumber-preprocessor/steps'

import login from "../../pageObject/login"
import inventario from "../../pageObject/inventario"
import carrito from "../../pageObject/carrito"
import checkoutPrimerPaso from "../../pageObject/checkoutPrimerPaso"
import checkoutSegundoPaso from "../../pageObject/checkoutSegundoPaso"
import checkoutCompleto from "../../pageObject/checkoutCompleto"

//page object models
const loginPOM = new login()
const inventarioPOM = new inventario()
const carritoPOM = new carrito()
const checkoutPrimerPasoPOM = new checkoutPrimerPaso()
const checkoutSegundoPasoPOM = new checkoutSegundoPaso()
const checkoutCompletoPOM = new checkoutCompleto()

Given('que ingreso a la pagina de login', () => {
    cy.visit('/')
})

When('ingreso los datos de login', () => {
    loginPOM.getUsernameInput().type(Cypress.env('USERNAME'))
    loginPOM.getPasswordInput().type(Cypress.env('PASSWORD'))
    loginPOM.getLoginButton().click()
})

Then('valido que este en la pagina de inventario', () => {
    cy.url().should('include', 'inventory')
})

And('agrego los productos al carrito', () => {
    for (const productName of Cypress.env("PRODUCTOS")) {
        inventarioPOM.getAddToCartButtonByProductName(productName).should('be.visible')
        inventarioPOM.getAddToCartButtonByProductName(productName).click()
    }
})

When('voy al carrito de compras', () => {
    inventarioPOM.getShoppingCartButton().click()
    cy.url().should('include', 'cart')
})

Then('valido que hayan 3 productos', () => {
    carritoPOM.getCartListDivs().should('have.length', 3)
})

When('elimino el tercer producto', () => {
    carritoPOM.getRemoveButtonByProductName(Cypress.env('PRODUCTOS')[2]).click()
})

Then('valido que solo esten 2 productos', () => {
    carritoPOM.getCartListDivs().should('have.length', 2)
    carritoPOM.getRemoveButtonByProductName(Cypress.env('PRODUCTOS')[2]).should('not.exist')
})

And('continua con el checkout', () => {
    carritoPOM.getCheckoutButton().click()
    cy.url().should('include', 'checkout-step-one')
})

When('llena los datos del checkout', () => {
    checkoutPrimerPasoPOM.getFirstnameInput().type('Lady')
    checkoutPrimerPasoPOM.getLastnameInput().type('Suarez')
    checkoutPrimerPasoPOM.getPostalCodeInput().type('050026')
})

Then('finaliza el primer paso del checkout', () => {
    checkoutPrimerPasoPOM.getContinueButton().click()
    cy.url().should('include', 'checkout-step-two')
})

And('valida la lista de productos en el segundo paso del checkout', () => {
    checkoutSegundoPasoPOM.getCartListDivs().should('have.length', 2)
    checkoutSegundoPasoPOM.getDeletedItemByProductName(Cypress.env('PRODUCTOS')[2]).should('not.exist')
})

And('finaliza el segundo paso del checkout', () => {
    cy.scrollTo('bottom')
    checkoutSegundoPasoPOM.getFinishButton().click()
})

Then('valida el checkout completado', () => {
    cy.url().should('include', 'checkout-complete')
})

And('regresa a la pagina de inventario', () => {
    checkoutCompletoPOM.getBackToInventoryButton().click()
    cy.url().should('include', 'inventory')
})

And('presiona el boton de menu', () => {
    inventarioPOM.getMenuBarBurger().click()
    inventarioPOM.getLogoutLinkFromMenuBurger().should('be.visible')
})

Then('cierra sesion', () => {
    inventarioPOM.getLogoutLinkFromMenuBurger().click()
    cy.url().should('include', '/')
})



