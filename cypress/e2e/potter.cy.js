describe('login', () => {

    it('standard user', () => {

        cy.visit('https://www.saucedemo.com/')
        cy.get('[data-test="username"]').type('leah_walker')
        cy.get('[data-test="password"]').type('mount_sauce')
        cy.get('[data-test="login-button"]').click()
})
    it('standard user', () => {
        cy.visit('https://www.saucedemo.com/')
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()
        cy.get('[data-test="product-sort-container"]').select('az')
        cy.get('[data-test="product-sort-container"]').select("lohi")
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('.shopping_cart_link').click()
        cy.get('[data-test="remove-sauce-labs-backpack"]').click()
        cy.get('[data-test="checkout"]').click()
        cy.get('[data-test="firstName"]').type('Leah')
        cy.get('[data-test="lastName"]').type('Walker')
        cy.get('[data-test="postalCode"]').type('12345')
        cy.get('[data-test="continue"]').click()
        cy.get('[data-test="finish"]').click()
})
})