import { LoginElements } from "./login.elements";

//Clase LoginMethods: para insertar los métodos posibles en la pagina de login
export class LoginMethods {
    //Método para insertar un nombre de usuario
     static insertUsername(username){
        LoginElements.input.username.invoke("val", username)
     }
     //Método para insertar una contraseña de usuario
     static insertPassword(password){
        LoginElements.input.password.invoke("val", password)
     }
     //Método para hacer click en el botón de login
     static clickOnLoginButton(){
        LoginElements.buttons.login.click()
     }
     //Metodo completo para loguearse
     static login(username, password){
        this.insertUsername(username)
        this.insertPassword(password)
        this.clickOnLoginButton()
     }
}