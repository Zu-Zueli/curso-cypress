import { CartMethods } from "../pages/cart/cart.methods";
import { CommonPageData } from "../pages/common-page/common.page.data";
import { CommonPageMethods } from "../pages/common-page/common.page.methods";
import { HomeMethods } from "../pages/home/home.methods";
import { LoginData } from "../pages/login/login.data";
import { LoginMethods } from "../pages/login/login.methods";
import { ProductDetailsMethods } from "../pages/product-details/product-details.methods";
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
    })
})