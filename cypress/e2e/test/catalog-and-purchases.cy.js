import { CartElements } from "../pages/cart/cart.elements";
import { CartMethods } from "../pages/cart/cart.methods";
import { CommonPageData } from "../pages/common-page/common.page.data";
import { CommonPageMethods } from "../pages/common-page/common.page.methods";
import { HomeMethods } from "../pages/home/home.methods";
import { LoginData } from "../pages/login/login.data";
import { LoginMethods } from "../pages/login/login.methods";
import { PlaceOrderData } from "../pages/place-order/place.order.data";
import { PlaceOrderMethods } from "../pages/place-order/place.order.methods";
import { ProductDetailsMethods } from "../pages/product-details/product-details.methods";
import { SuccessfulPurchaseMethods } from "../pages/successful-purchase/successful.purchase.methods";
import { Logger } from "../useful/logger";

const userValid = LoginData.validCredentials;
const product = "MacBook Pro";

describe(CommonPageData.testSuites.catalogAndPurchases, ()=>{
    
    it("Category Navigation", ()=>{
        Logger.stepAndDescription(1, "Navigate to the Home page")
        CommonPageMethods.navigateToDemoBlaze()

        Logger.stepAndDescription(2, "Log in as a registered user")
        Logger.subStep('Click on "log in" link')
        CommonPageMethods.clickOnLogInOption()
        LoginMethods.login(userValid.username, userValid.password)

        Logger.stepAndDescription(3, "Select a product category from the navigation menu")
        HomeMethods.clickOnMonitorsOption()

        Logger.stepAndDescription(4, "Verify that the list of products corresponding to the category is displayed")
        HomeMethods.virifyProductDisplayed("Apple monitor 24")
        HomeMethods.virifyProductDisplayed("ASUS Full HD")

        Logger.postCondition("Logout")
        CommonPageMethods.LogOut()
    })

    it("Add Product to Cart", ()=>{
        Logger.stepAndDescription(1, "Navigate to the Home page")
        CommonPageMethods.navigateToDemoBlaze()

        Logger.stepAndDescription(2, "Log in as a registered user")
        Logger.subStep('Click on "log in" link')
        CommonPageMethods.clickOnLogInOption()
        LoginMethods.login(userValid.username, userValid.password)

        Logger.stepAndDescription(3, "Select a product category from the navigation menu")
        HomeMethods.clickOnLaptopsOption()

        Logger.stepAndDescription(4, "Click on a specific product")
        HomeMethods.clickOnProductLink(product)
        Logger.verification("Verify that the product details page is displayed")
        ProductDetailsMethods.verifyProductDetailTitle(product)

        Logger.stepAndDescription(5, 'Click the "Add to cart" button')
        ProductDetailsMethods.clickOnAddCartButton()

        Logger.stepAndDescription(6, "Verify that a confirmation message is displayed and the product is added to the cart")
        ProductDetailsMethods.verifyProductAddedMessage()
        CommonPageMethods.clickOnCartOption()
        CartMethods.verifyProductAdded(product)

        Logger.postCondition("Empty cart and logout")
        CartMethods.emptyCart(userValid.username, userValid.password)
        CommonPageMethods.LogOut()
    })

    it("Make a Purchase", ()=>{
        Logger.stepAndDescription(1, "Navigate to the Home page")
        CommonPageMethods.navigateToDemoBlaze()

        Logger.stepAndDescription(2, "Log in as a registered user")
        Logger.subStep('Click on "log in" link')
        CommonPageMethods.clickOnLogInOption()
        LoginMethods.login(userValid.username, userValid.password)

        Logger.stepAndDescription(3, "Select a product category from the navigation menu")
        HomeMethods.clickOnLaptopsOption()

        Logger.stepAndDescription(4, "Click on a specific product")
        HomeMethods.clickOnProductLink(product)
        Logger.verification("Verify that the product details page is displayed")
        ProductDetailsMethods.verifyProductDetailTitle(product)

        Logger.stepAndDescription(5, 'Click the "Add to cart" button')
        ProductDetailsMethods.clickOnAddCartButton()

        Logger.stepAndDescription(6, "Verify that a confirmation message is displayed and the product is added to the cart")
        ProductDetailsMethods.verifyProductAddedMessage()
        CommonPageMethods.clickOnCartOption()
        CartMethods.verifyProductAdded(product)

        Logger.stepAndDescription(7, 'Click "Cart" in the navigation bar')
        CommonPageMethods.clickOnCartOption()

        Logger.stepAndDescription(8, "Verify that the shopping cart page is displayed")
        CartMethods.verifyCartPageIsShown()

        Logger.stepAndDescription(9, 'Click on the "Place Order" button')
        CartMethods.clickOnPaceOrderButton()

        Logger.stepAndDescription(10, "Complete the required fields on the shipping information page")
        PlaceOrderMethods.insertOrderInformation(PlaceOrderData.testDate)
        
        Logger.stepAndDescription(11, 'Click the "Purchase" button')
        PlaceOrderMethods.clickOnPurchaseButton()
        
        Logger.stepAndDescription(12, "Verify that a confirmation message is displayed and the user is redirected to the home page")
        SuccessfulPurchaseMethods.verifyGreenCheckMarckIsDisplayed()
        //BORRAR
        cy.wait(5000)
        SuccessfulPurchaseMethods.clickOnOkButton()
        HomeMethods.verifyHomePageIsShown()

        Logger.postCondition("Logout")
        CommonPageMethods.LogOut()
    })
})