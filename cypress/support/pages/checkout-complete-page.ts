class CheckOutCompletePage{

    confirmationTitle(text){
        cy.get('[class="complete-header"]').then(textConfirm =>{
            assert.equal(textConfirm.text(), text, "Header")
        })
    }

    confirmationSubtitle(text){
        cy.get('[class="complete-text"]').then(subtitleConfirm =>{
            assert.equal(subtitleConfirm.text(), text, "Text")
        })
    }

    backHome(){
        cy.get('[data-test="back-to-products"]').click()
    }

}

export default CheckOutCompletePage