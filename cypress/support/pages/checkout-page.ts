class CheckoutPage{

    typeFirstName(fname){
        cy.get('[data-test="firstName"]').clear().type(fname)
    }

    typeLastName(lname){
        cy.get('[data-test="lastName"]').clear().type(lname)
    }

    typePostalCode(pcode){
        cy.get('[data-test="postalCode"]').clear().type(pcode)
    }

    clickOnContinue(){
        cy.get('[data-test="continue"]').click()
    }

    clickOnCancel(){
        cy.get('[data-test="cancel"]').click()
    }

}

export default CheckoutPage