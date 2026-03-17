describe('login', () => {
   it('Automation Exercise', () => {
        // Test implementation
        cy.visit('https://www.automationexercise.com/login')
        cy.get('[data-qa="login-email"]').type('lindy@mailinator.com')
        cy.get('[data-qa="login-password"]').type('secret_sauce')
        cy.get('[data-qa="login-password"]').should('have.value','secret_sauce')
        cy.get('[data-qa="login-email"]').should('have.value','lindy@mailinator.com')
        
    // })
    // it('sign up', () => {
    //     cy.visit('https://www.automationexercise.com/login')
    //     cy.get('[data-qa="signup-name"]').type('Micheal').should('have.value','Micheal')
    //     cy.get('[data-qa="signup-email"]').type('amanda7@mailinator.com').should('have.value','amanda7@mailinator.com')
    //     cy.get('[data-qa="signup-button"]').click().should('be.visible')    
        
        // cy.get('#id_gender2').click().should('be.checked')
        

        // cy.get('[data-qa="password"]').type(342123).should('have.value', '342123')


    
        // cy.get('[data-qa="days"]').select('14').should('have.value', '14')
        // cy.get('[data-qa="months"]').select('May').should('have.value', '5')
        // cy.get('[data-qa="years"]').select('1995').should('have.value', '1995')
        // cy.get('#newsletter').click().should('be.checked')
        // cy.get('#optin').click().should('be.checked')
        // cy.get('[data-qa="first_name"]').type('Gloria').should('have.value', 'Gloria')
        // cy.get('[data-qa="last_name"]').type('Nkwocha').should('have.value', 'Nkwocha')
        // cy.get('[data-qa="company"]').type('Glow Enterprices').should('have.value', 'Glow Enterprices')
        // // cy.get(':nth-child(14) > label').click().should('be.checked')
        // cy.get('[data-qa="address"]').type('13, Bishop Street').should('have.value', '13, Bishop Street')
        // cy.get('[data-qa="address2"]').type('Lagos').should('have.value', 'Lagos')
        // cy.get('[data-qa="country"]').select('United States').should('have.value', 'United States')
        // cy.get('[data-qa="state"]').type('Lagos').should('have.value', 'Lagos')
        // cy.get('[data-qa="city"]').type('Lagos').should('have.value', 'Lagos')
        // cy.get('[data-qa="zipcode"]').type('101241').should('have.value', '101241')
        // cy.get('[data-qa="mobile_number"]').type('08123456798').should('have.value', '08123456798')
        // cy.get('[data-qa="create-account"]').click().should('be.visible')
        // cy.get('body').should('be.visible').should('contain', 'Account Created!')
        // cy.get('[data-qa="continue-button"]').click().should('be.visible')

    

})
     it('Login and add products to cart', () => {

    // Visit homepage
    cy.visit('https://www.automationexercise.com/')

    // Click Signup / Login
    cy.contains('Signup / Login').click()

    // Login using custom command
    cy.login('lindy@mailinator.com', 'secret_sauce')

    // Verify homepage again
    cy.get('.features_items').should('be.visible')

    // Add 5 products
    cy.addProductsToCart(5)

    // Go to cart
    cy.get('a[href="/view_cart"]').click()

    // Assertions
    cy.url().should('include', '/view_cart')
    cy.get('.cart_item').should('have.length.at.least', 5)
    
    cy.get('.features_items').find('.product-image-wrapper').eq(0).trigger('mouseover')
    cy.get('.features_items').find('.product-image-wrapper').eq(0).find('.add-to-cart').click().should('be.visible')
    cy.get('.features_items').find('.product-image-wrapper').eq(1).trigger('mouseover')
    cy.get('.features_items').find('.product-image-wrapper').eq(1).find('.add-to-cart').click().should('be.visible')
    cy.get('.features_items').find('.product-image-wrapper').eq(2).trigger('mouseover')
    cy.get('.features_items').find('.product-image-wrapper').eq(2).find('.add-to-cart').click().should('be.visible')
    cy.get('.features_items').find('.product-image-wrapper').eq(3).trigger('mouseover')
    cy.get('.features_items').find('.product-image-wrapper').eq(3).find('.add-to-cart').click().should('be.visible')
    cy.get('.features_items').find('.product-image-wrapper').eq(4).trigger('mouseover')
    cy.get('.features_items').find('.product-image-wrapper').eq(4).find('.add-to-cart').click().should('be.visible')
    cy.get('.features_items').find('.product-image-wrapper').eq(5).trigger('mouseover')
    cy.get('.features_items').find('.product-image-wrapper').eq(5).find('.add-to-cart').click().should('be.visible')
    

  })

})
 
