import { Given, And, When, Then } from 'cypress-cucumber-preprocessor/steps'
import CheckOutCompletePage from '../pages/checkout-complete-page'

const complete = new CheckOutCompletePage()

And("The confirmation text {string} should be displayed", (text)=>{
    complete.confirmationSubtitle(text)
})
