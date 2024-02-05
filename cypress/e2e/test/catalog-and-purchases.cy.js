import { CommonPageData } from "../pages/common-page/common.page.data";
import { CommonPageMethods } from "../pages/common-page/common.page.methods";
import { HomeMethods } from "../pages/home/home.methods";
import { LoginData } from "../pages/login/login.data";
import { LoginMethods } from "../pages/login/login.methods";
import { Logger } from "../useful/logger";

const userValid = LoginData.validCredentials;

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
})