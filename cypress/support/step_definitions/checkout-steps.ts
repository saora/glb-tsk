import { Given, And, When, Then } from 'cypress-cucumber-preprocessor/steps'
import CheckoutPage from '../pages/checkout-page'

const checkout = new CheckoutPage()

And("He types the first name {string}", (firstName)=>{
    checkout.typeFirstName(firstName)
})

And("He types the last name {string}", (lastName)=>{
    checkout.typeLastName(lastName)
})

And("He types the postal code {string}", (postalCode)=>{
    checkout.typePostalCode(postalCode)
})

And("He clicks on continue button", ()=>{
    checkout.clickOnContinue()
})
