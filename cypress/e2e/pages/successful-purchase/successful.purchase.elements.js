export class SuccessfulPurchaseElements{
    static get buttons(){
        return{
            get ok(){
                return cy.contains('button', 'OK')
            }
        }
    }
    static get icons(){
        return{
            get greenCheckMarck(){
                return cy.get('.sa-success')
            } 
        }
    }
    
}