import SignUp from "../../support/PageObject/SignUp"
import Login from "../../support/PageObject/Login"
import HomePage from "../../support/PageObject/HomePage"
import Cart from "../../support/PageObject/Cart"
import PlaceOrder from "../../support/PageObject/PlaceOrder"


describe('My First Test Suite', function() {

    before(function () {
        // runs once before all tests in the block
        cy.fixture('example').then(function (data) {
          this.data = data
        })
      })

    it('My First Test Case', function () {

        cy.visit(Cypress.env('url'))

        const signUp = new SignUp()
        const login = new Login()
        const homePage = new HomePage()
        const cart = new Cart()
        const placeOrder = new PlaceOrder()

        signUp.getSignUp().click()
        signUp.getUsername().type(this.data.signUpUsername)
        signUp.getPassword().type(this.data.signUpPassword)
        signUp.getSignUpButton().click()
        signUp.getCancelIcon().click()

        login.getLogin().click()
        login.getUsername().type(this.data.loginUsername)
        login.getPassword().type(this.data.loginPassword)
        login.getLoginButton().click({force:true})

        cy.wait(6000)

        //cy.get("#nameofuser").should('have.text','Welcome test@123')

        cy.wait(3000)

        homePage.getHomeIcon().click({force:true})
        homePage.getProduct().click()
        homePage.getAddToCart().click()

        cart.getCartIcon().click()
        cart.getPlaceOrder().click()

        placeOrder.getName().type(this.data.name)
        placeOrder.getCountry().type(this.data.country)
        placeOrder.getCity().type(this.data.city)
        placeOrder.getCreditCard().type(this.data.creditcard)
        placeOrder.getMonth().type(this.data.month)
        placeOrder.getYear().type(this.data.year)
        placeOrder.getPurchase().click()
        placeOrder.getVerifyMsg().should('have.text','Thank you for your purchase!')

        cy.get(".confirm.btn.btn-lg.btn-primary").click({force:true})

        cy.get('#logout2').click({force:true})

    })
})