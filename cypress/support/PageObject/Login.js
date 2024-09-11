class Login
{
    getLogin()
    {
        return cy.get('#login2')
    }

    getUsername()
    {
        return cy.get('#loginusername')
    }

    getPassword()
    {
        return cy.get('#loginpassword')
    }

    getLoginButton()
    {
       return cy.get("button[onclick='logIn()']")
    }
}

export default Login;