import { Logger } from "../../useful/logger";
import { CommonPageMethods } from "../common-page/common.page.methods";
import { LoginMethods } from "../login/login.methods";
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

    //Cambiar cy.wait por esperar que cargue la API
    static deleteAllProducts(){
        cy.intercept('POST', 'https://api.demoblaze.com/deleteitem').as('deleteItem')
        cy.get('a[onclick*="delete"]').each(link=>{
            link.click()
            cy.wait('@deleteItem')
        })
    }

    static emptyCart(username, password){
        Logger.subStep("Navigate to Demoblaze application")
        CommonPageMethods.navigateToDemoBlaze()
        Logger.subStep("Log out")
        CommonPageMethods.LogOut()
        Logger.subStep('Click on "Home"')
        CommonPageMethods.clickOnHomeOption()
        Logger.subStep('Click on "Log in"')
        CommonPageMethods.clickOnLogInOption()
        Logger.subStep(`Login with this credentials ${username}/${password}`)
        LoginMethods.login(username, password)
        Logger.subStep('Click on "Cart"')
        CommonPageMethods.clickOnCartOption()
        Logger.subStep("Delete products from Cart")
        this.deleteAllProducts()
    }
}