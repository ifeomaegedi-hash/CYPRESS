describe('LOGIN', () => {

  it('standard user', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('[data-test="shopping-cart-link"]').click()
    cy.get('[data-test="remove-sauce-labs-backpack"]').click()
    cy.get('[data-test="checkout"]').click()
    cy.get('[data-test="firstName"]').click().type('gloria')
    cy.get('[data-test="lastName"]').click().type('nkwocha')
    cy.get('[data-test="postalCode"]').click().type('234')
    cy.get('[data-test="continue"]').click()
    cy.get('[data-test="finish"]').click()
  


  })

})