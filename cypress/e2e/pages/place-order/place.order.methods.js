import { Logger } from "../../useful/logger";
import { PlaceOrderData } from "./place.order.data";
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
    static insertYear(year){
        PlaceOrderElements.input.year.invoke("val", year)
    }
    static clickOnCloseButton(){
        PlaceOrderElements.buttons.close.click()
    }
    static clickOnPurchaseButton(){
        PlaceOrderElements.buttons.purchase.click()
    }

    static insertOrderInformation(data){
        Logger.subStep("Insert Name")
        this.insertName(data.name)
        Logger.subStep("Insert Country")
        this.insertCountry(data.country)
        Logger.subStep("Insert City")
        this.insertCity(data.city)
        Logger.subStep("Insert Credit card")
        this.insertCreditCard(data.creditCardNumber)
        Logger.subStep("Insert Month")
        this.insertMonth(data.month)
        Logger.subStep("Insert Year")
        this.insertYear(data.year)
    }
}