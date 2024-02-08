import { CartElements } from "./cart.elements";

export class CartMethods{
    static clickOnDeleteLink(productName){
        CartElements.links.delete(productName).click()
    }
    static clickOnPaceOrderButton(){
        CartElements.buttons.placeOrder.click()
    }

    static verifyProductAdded(productName){
        CartElements.links.delete(productName).should("be.visible")
    }

    static verifyCartPageIsShown(){
        cy.url().should('include', '/cart.html')
    }
}