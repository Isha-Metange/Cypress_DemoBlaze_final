/// <reference types="cypress" />
import {Given,When,Then} from "cypress-cucumber-preprocessor/steps"
//import {Given,When,Then} from "@badeball/cypress-cucumber-preprocessor"
import HomePage from '../../../../support/PageObject/HomePage'
import SignUp from '../../../../support/PageObject/SignUp'
import Login from '../../../../support/PageObject/Login'
import Cart from '../../../../support/PageObject/Cart'
import PlaceOrder from '../../../../support/PageObject/PlaceOrder'

const homePage=new HomePage()
const signUp = new SignUp()
const login = new Login()
const cart = new Cart()
const placeOrder = new PlaceOrder()

    Given('I open Ecommerce Page',()=>
    {
        cy.visit(Cypress.env('url'))
    })

    When('I signUp to ecommerce website',function(datatable)
    {
        datatable.hashes().forEach((element) => {

        signUp.getSignUp().click()
        signUp.getUsername().type(element.username)
        signUp.getPassword().type(element.password)
        signUp.getSignUpButton().click()
        signUp.getCancelIcon().click()

        }); 
    When('I login to ecommerce website', function(datatable){

        datatable.hashes().forEach((element) => {

            login.getLogin().click()
            login.getUsername().type(element.username)
            login.getPassword().type(element.password)
            login.getLoginButton().click({force:true})

        })

    }) 
    
    Then('Verify login is successfully', () => {

     

        cy.get("#nameofuser").should('have.text','Welcome test@123')
    })

    // Scenario 2
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
       

    })
    
    
