import { CommonPageData } from "../pages/common-page/common.page.data"
import { CommonPageMethods } from "../pages/common-page/common.page.methods"
import { SignupMethods } from "../pages/signup/signup.methods"
import { Logger } from "../useful/logger"

describe(CommonPageData.testSuites.catalogAndPurchases, ()=>{
    it("Valid user registration", ()=>{

        Logger.stepAndDescription(1, "Navigate to the Home page")
        CommonPageMethods.navigateToDemoBlaze()
        
        Logger.stepAndDescription(2, 'Click "Sign up" in the navigation bar')
        CommonPageMethods.clickOnSignUpOption()

        Logger.stepAndDescription(3, "Complete all required fields with valid information")
        SignupMethods.insertUsername("Teixeira")
        SignupMethods.insertPassword("123456")

        Logger.stepAndDescription(4, 'Click "Sign up" to register the user')
        SignupMethods.clickOnSignupButton()

        Logger.stepAndDescription(5, 'Verify that the message "Sign up successful." is displayed')
        SignupMethods.verifySignupSuccesfulMessageIsDisplayed()
    })
})