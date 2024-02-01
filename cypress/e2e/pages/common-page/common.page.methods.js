import { CommonPageData } from "./common.page.data";
import { CommonPageElements } from "./common.page.elements";

export class CommonPageMethods{
    static navigateToDemoBlaze(){
        cy.visit(CommonPageData.url)
    }

    static clickOnHomeOption(){
        CommonPageElements.menu.home.click()
    }
    static clickOnContactOption(){
        CommonPageElements.menu.contact.click()
    }
    static clickOnAboutUsOption(){
        CommonPageElements.menu.aboutUs.click()
    }
    static clickOnCartOption(){
        CommonPageElements.menu.cart.click()
    }
    static clickOnLogInOption(){
        CommonPageElements.menu.logIn.click()
    }
    static clickOnSignUpOption(){
        CommonPageElements.menu.signUp.click()
    }
    static verifyAlert(message){
        cy.on('window:alert', (str) => {
            expect(str).to.equal(message)
          })
    }
}