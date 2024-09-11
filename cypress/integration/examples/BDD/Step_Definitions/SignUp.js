/// <reference types="cypress" />
import {Given,When} from "cypress-cucumber-preprocessor/steps"
import SignUp from '../../../../support/PageObject/SignUp'

const signUp = new SignUp()

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

    })