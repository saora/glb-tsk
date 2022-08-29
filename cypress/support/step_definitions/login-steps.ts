import { Given, And, When, Then } from 'cypress-cucumber-preprocessor/steps'
import LoginPage from '../pages/login-page'
import ProductPage from '../pages/product-page'


const login = new LoginPage()
const product = new ProductPage()
Given("The user opens the swaglabs page", ()=>{
    cy.visit('/')
})

When("He types the username {string}", (user)=>{
    login.typeUsername(user)


})

And("He types the password {string}", (pass)=>{
    login.typePassword(pass)

})
And("He cliks on the login button",()=>{
    login.clickOnLogin()

})
Then("He should see the product list", ()=>{


})

And("He logs into the application as standard user", () =>{
    login.loginAsStandardUser()
    
})