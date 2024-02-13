import { CommonPageMethods } from "../common-page/common.page.methods";
import { ProductDetailsElements } from "./product-details.elements";

export class ProductDetailsMethods{
    static clickOnAddCartButton(){
        ProductDetailsElements.buttons.addToCart.click()
        cy.intercept('POST', 'https://api.demoblaze.com/addtocart').as('addtocart')
        cy.wait('@addtocart')
    }

    static verifyProductDetailTitle(productName){
        return cy.contains('h2', productName)
    }

    static verifyProductAddedMessage(){
        CommonPageMethods.verifyAlert("Product added.")
    }
}