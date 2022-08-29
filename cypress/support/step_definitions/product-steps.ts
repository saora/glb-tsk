import { Given, And, When, Then } from 'cypress-cucumber-preprocessor/steps'
import ProductPage from '../pages/product-page'

const product = new ProductPage()

Then("The user adds items with price equal to {string}", (price)=>{
    product.addProduct(price)
})

And("He goes to the shoping cart", ()=>{
    product.navigateToShopingCart()
})

