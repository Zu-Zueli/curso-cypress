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

    static generateRandomString(length = 10) {
        let result = '';
        const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        let counter = 0;
        while (counter < length) {
          result += characters.charAt(Math.floor(Math.random() * charactersLength));
          counter += 1;
        }
        return result;
    }

    static verifySignedUser(username){
        CommonPageElements.signedUser.should("have.text", `Welcome ${username}`)
    }
}