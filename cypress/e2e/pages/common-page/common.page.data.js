export class CommonPageData{
    static get url(){
        cy.clearAllCookies()
        cy.clearLocalStorage()
        return "https://www.demoblaze.com/"
    }

    static get testSuites(){
        return {
            registration: "Registration",
            logIn: "log in",
            catalogAndPurchases: "Catalog and Purchases",
        }
    }
}