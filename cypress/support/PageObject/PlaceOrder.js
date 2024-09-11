class PlaceOrder
{
    getName()
    {
     return cy.get("#name")
    }
 
    getCountry()
    {
     return cy.get("#country")
    }

    getCity()
    {
       return cy.get("#city")
    }

    getCreditCard()
    {
        return cy.get("#card")
    }

    getMonth()
    {
        return cy.get("#month")
    }

    getYear()
    {
        return cy.get("#year")
    }

    getPurchase()
    {
        return cy.get("button[onclick='purchaseOrder()']")
    }

    getVerifyMsg()
    {
        return cy.get("body > div:nth-child(19) > h2:nth-child(6)")
    }
}

export default PlaceOrder;