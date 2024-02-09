export class Logger{
    static stepNumber(number){
        const text = `Step # ${number}`
        cy.log(text)
        cy.allure().step(text)
    }

    static step(description){
        const text = `Step - ${description}`
        cy.log(text)
        cy.allure().step(text)
    }

    static stepAndDescription(number, description){
        const text = `Step #${number}: ${description}`
        cy.log(text)
        cy.allure().step(text)
    }

    static verification(description){
        const text = `Verification - ${description}`
        cy.log(text)
        cy.allure().step(text)
    }

    static subStep(description){
        const text = `Sub Step - ${description}`
        cy.log(text)
        cy.allure().step(text)
    }

    static subVerification(description){
        const text = `Sub Verification - ${description}`
        cy.log(text)
        cy.allure().step(text)
    }

    static postCondition(description){
        const text = `POSTCONDITION - ${description}`
        cy.log(text)
        cy.allure().step(text)
    }
}