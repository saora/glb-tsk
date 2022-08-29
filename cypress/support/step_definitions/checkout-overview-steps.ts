import { Given, And, When, Then } from 'cypress-cucumber-preprocessor/steps'
import CheckoutOverviewPage from '../pages/checkout-overview-page'


const overview = new CheckoutOverviewPage()

And("He confirms by clicking on finish button", ()=>{
    overview.clickOnFinish()
})

