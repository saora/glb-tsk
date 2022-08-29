import { Given, And, When, Then } from 'cypress-cucumber-preprocessor/steps'
import CartPage from '../pages/cart-page'

const cart = new CartPage()

And("He clicks on checkout button", ()=>{
    cart.checkout()
})
