import { CommonPageData } from "../pages/common-page/common.page.data";
import { CommonPageMethods } from "../pages/common-page/common.page.methods";
import { LoginData } from "../pages/login/login.data";
import { LoginMethods } from "../pages/login/login.methods";
import { Logger } from "../useful/logger";
const passwordInvalid = CommonPageMethods.generateRandomString(7)

describe(CommonPageData.testSuites.logIn, () => {

    it("Valid Login", () => {
        Logger.stepAndDescription(1, "Navigate to the Home page")
        CommonPageMethods.navigateToDemoBlaze()

        Logger.stepAndDescription(2, 'Click "Log in" in the navigation bar')
        CommonPageMethods.clickOnLogInOption()

        Logger.stepAndDescription(3, "Enter a valid username and password")
        LoginMethods.insertUsername(LoginData.validCredentials.username)
        LoginMethods.insertPassword(LoginData.validCredentials.password)

        Logger.stepAndDescription(4, 'Click the "Log in" button to log in')
        LoginMethods.clickOnLoginButton()

        Logger.stepAndDescription(5, "Verify that the user is logged in")
        CommonPageMethods.verifySignedUser(LoginData.validCredentials.username)

        Logger.postCondition("Log out")
        CommonPageMethods.LogOut()
    })

    it("Invalid login", () => {
        Logger.stepAndDescription(1, "Navigate to the Home page")
        CommonPageMethods.navigateToDemoBlaze()

        Logger.stepAndDescription(2, 'Click "Log in" in the navigation bar')
        CommonPageMethods.clickOnLogInOption()

        Logger.stepAndDescription(3, "Enter an invalid password")
        LoginMethods.insertUsername(LoginData.validCredentials.username)
        LoginMethods.insertPassword(passwordInvalid)

        Logger.stepAndDescription(4, 'Click the "Log in" button to log in')
        LoginMethods.clickOnLoginButton()

        Logger.stepAndDescription(5, "Verify that an error message is displayed indicating that the login has failed")
        LoginMethods.verifyLoginWrongPasswordMessage()
    })
})