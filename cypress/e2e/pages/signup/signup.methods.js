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
}