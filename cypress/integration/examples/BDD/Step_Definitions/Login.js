/// <reference types="cypress" />
import {Given,When,Then} from "cypress-cucumber-preprocessor/steps"
import Login from '../../../../support/PageObject/Login'

const login = new Login()

Given('I open Ecommerce Page',()=>
    {
        cy.visit(Cypress.env('url'))
    })

When('I login to ecommerce website', function(datatable){

    datatable.hashes().forEach((element) => {

        login.getLogin().click()
        login.getUsername().type(element.username)
        login.getPassword().type(element.password)
        login.getLoginButton().click({force:true})
    })

}) 

Then('Verify login is successfully', function(datatable) {

     cy.get("#nameofuser").should('have.text','Welcome test@123')
    
})