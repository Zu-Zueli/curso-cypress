import { CommonPageMethods } from "../common-page/common.page.methods";
import { SignupElements } from "./signup.elements";

export class SignupMethods {
    static insertUsername(username){
        SignupElements.inputs.username.invoke("val", username)
    }
    static insertPassword(password){
        SignupElements.inputs.password.invoke("val", password)
    }
    static clickOnSignupButton(){
        SignupElements.buttons.signup.click()
    }
    static signup(username, password){
        this.insertUsername(username)
        this.insertPassword(password)
        this.clickOnSignupButton()
    }

    static verifySignupSuccesfulMessageIsDisplayed(){
        CommonPageMethods.verifyAlert("Sign up successful.")
    }
}