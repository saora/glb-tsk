class LoginPage{

    typeUsername(username){
        cy.get('[data-test="username"]').type(username)
    }

    typePassword(password){
        password = Cypress.env('password')
        cy.get('[data-test="password"]').type(password)
    }

    clickOnLogin(){
        cy.get('[data-test="login-button"]').click()
    }


    loginAsStandardUser(){
        const username = Cypress.env('stardardUser')
        const password = Cypress.env('password')
        cy.get('[data-test="username"]').type(username)
        cy.get('[data-test="password"]').type(password)
        cy.get('[data-test="login-button"]').click()
    }

}

export default LoginPage