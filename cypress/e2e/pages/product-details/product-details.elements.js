export class ProductDetailsElements{
    static get buttons(){
        return {
            get addToCart(){
                return cy.contains('a', 'Add to cart')
            }
        }
    }

    static productDetails(productName){
        return cy.contains('h2', productName)
    }
}