import { CommonPageData } from "../pages/common-page/common.page.data"
import { CommonPageMethods } from "../pages/common-page/common.page.methods"
import { SignupMethods } from "../pages/signup/signup.methods"
import { Logger } from "../useful/logger"
const user = CommonPageMethods.generateRandomString();
const password = CommonPageMethods.generateRandomString(7);
const existingUser = "random01";

describe(CommonPageData.testSuites.registration, ()=>{

    it("Valid user registration", ()=>{
        
        Logger.stepAndDescription(1, "Navigate to the Home page")
        CommonPageMethods.navigateToDemoBlaze()
        
        Logger.stepAndDescription(2, 'Click "Sign up" in the navigation bar')
        CommonPageMethods.clickOnSignUpOption()

        Logger.stepAndDescription(3, "Complete all required fields with valid information")
        SignupMethods.insertUsername(user)
        SignupMethods.insertPassword(password)

        Logger.stepAndDescription(4, 'Click "Sign up" to register the user')
        SignupMethods.clickOnSignupButton()

        Logger.stepAndDescription(5, 'Verify that the message "Sign up successful." is displayed')
        SignupMethods.verifySignupSuccesfulMessageIsDisplayed()
    })


    it("Invalid User Registration", ()=>{

        Logger.stepAndDescription(1, "Navigate to the home page")
        CommonPageMethods.navigateToDemoBlaze()
        
        Logger.stepAndDescription(2, 'Click "Sign up" in the navigation bar')
        CommonPageMethods.clickOnSignUpOption()

        Logger.stepAndDescription(3, "Fill in some fields with invalid information")
        SignupMethods.insertUsername(existingUser)
        SignupMethods.insertPassword(password)

        Logger.stepAndDescription(4, 'Click "Sign up" to register the user')
        SignupMethods.clickOnSignupButton()

        Logger.stepAndDescription(5, 'Verify that an error message is displayed indicating the invalid fields')
        SignupMethods.verifySignupSuccesfulMessageIsDisplayed()
    })
})