class SignUp
{
    getSignUp()
    {
      return cy.get('#signin2')
    }

    getUsername()
    {
       return cy.get('#sign-username')
    }

    getPassword()
    {
        return cy.get('#sign-password')
    }

    getSignUpButton()
    {
        return cy.get("button[onclick='register()']")
    }

    getCancelIcon()
    {
        return cy.get("div[id='signInModal'] span[aria-hidden='true']")
        
    }
}

export default SignUp;