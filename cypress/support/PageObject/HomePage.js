class HomePage
{

    getHomeIcon()
    {
        return cy.get("li[class='nav-item active'] a[class='nav-link']")
    }

    getProduct()
    {
        return cy.get("body > div:nth-child(6) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > h4:nth-child(1) > a:nth-child(1)")
    }

    getAddToCart()
    {
        return cy.get(".btn.btn-success.btn-lg")
    }
}

export default HomePage;