class CartPage{
    checkout(){
        cy.get('[data-test="checkout"]').click()

    }

    continueShoping(){
        cy.get('[data-test="continue-shopping"]').click()

    }
}

export default CartPage