/// <reference types="cypress" />


class CartPage {

    validateProduct() {
        cy.get('.product-name > a').should('contain', 'Aero Daily Fitness Tee - XS, Brown')   

    }

    


}

module.exports = new CartPage()