import { SuccessfulPurchaseElements } from "./successful.purchase.elements";

export class SuccessfulPurchaseMethods{
    static clickOnOkButton(){
        SuccessfulPurchaseElements.buttons.ok.click()
    }
    static verifyGreenCheckMarckIsDisplayed(){
        SuccessfulPurchaseElements.icons.greenCheckMarck.should("exist")
    }
}