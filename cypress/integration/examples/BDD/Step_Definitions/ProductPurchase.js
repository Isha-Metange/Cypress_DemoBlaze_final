/// <reference types="cypress" />
import {When,Then} from "cypress-cucumber-preprocessor/steps"
//import {Given,When,Then} from "@badeball/cypress-cucumber-preprocessor"
import HomePage from '../../../../support/PageObject/HomePage'
import Cart from '../../../../support/PageObject/Cart'
import PlaceOrder from '../../../../support/PageObject/PlaceOrder'

const homePage=new HomePage()
const cart = new Cart()
const placeOrder = new PlaceOrder()

When('I select the Product', ()=> {
        
    homePage.getHomeIcon().click({force:true})
    homePage.getProduct().click()
    homePage.getAddToCart().click()

    cart.getCartIcon().click()
    cart.getPlaceOrder().click()
})

When('I purchase the product', function(datatable) {

    datatable.hashes().forEach((element) => {

    placeOrder.getName().type(element.name)
    placeOrder.getCountry().type(element.country)
    placeOrder.getCity().type(element.city)
    placeOrder.getCreditCard().type(element.creditcard)
    placeOrder.getMonth().type(element.month)
    placeOrder.getYear().type(element.year)
    placeOrder.getPurchase().click()

    })

})

Then('Verify the product is successfully purchased', () => {

    placeOrder.getVerifyMsg().should('have.text','Thank you for your purchase!')

    cy.get(".confirm.btn.btn-lg.btn-primary").click({force:true})

    cy.get('#logout2').click({force:true})

})
   