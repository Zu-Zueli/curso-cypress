import { PlaceOrderElements } from "./place.order.elements";

export class PlaceOrderMethods{
    static insertName(name){
        PlaceOrderElements.input.name.invoke("val", name)
    }
    static insertCountry(country){
        PlaceOrderElements.input.country.invoke("val", country)
    }
    static insertCity(city){
        PlaceOrderElements.input.city.invoke("val", city)
    }
    static insertCreditCard(creditCard){
        PlaceOrderElements.input.creditCard.invoke("val", creditCard)
    }
    static insertMonth(month){
        PlaceOrderElements.input.month.invoke("val", month)
    }
    static insertCountry(country){
        PlaceOrderElements.input.country.invoke("val", country)
    }
    static insertYear(year){
        PlaceOrderElements.input.year.invoke("val", year)
    }
    static clickOnCloseButton(){
        PlaceOrderElements.buttons.close.click()
    }
    static clickOnPurchaseButton(){
        PlaceOrderElements.buttons.purchase.click()
    }
}