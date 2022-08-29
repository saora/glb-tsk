class CheckoutOverviewPage{
    clickOnFinish(){
        cy.get('[data-test="finish"]').click()
    }

    clickOnCancel(){
        cy.get('[data-test="cancel"]').click()
    }
}

export default CheckoutOverviewPage