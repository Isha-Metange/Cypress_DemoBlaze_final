class Cart
{
   getCartIcon()
   {
    return cy.get("#cartur")
   }
   
   getPlaceOrder()
   {
    return cy.get(".btn.btn-success")
   }
}

export default Cart;