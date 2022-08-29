class ProductPage{
    addProduct(price){
        cy.get('[class="pricebar"]').each(prod =>{
           if(prod.find('div').text() == price){
            cy.wrap(prod.find('button')).click()
           }
        })
    }

    navigateToShopingCart(){
        cy.get('[id="shopping_cart_container"]').click()
    }


}

export default ProductPage