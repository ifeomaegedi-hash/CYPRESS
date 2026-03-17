describe('automation exercise', () => { 
})
it('sign up', () => {
        cy.visit('https://www.automationexercise.com/login')
        cy.get('[data-qa="signup-name"]').type('Micheal').should('have.value','Micheal')
        cy.get('[data-qa="signup-email"]').type('amanda8@mailinator.com').should('have.value','amanda8@mailinator.com')
        cy.get('[data-qa="signup-button"]').click().should('be.visible')    
        cy.get('#id_gender2').should('be.visible').click().should('be.checked')
        cy.get('[data-qa="password"]').type(342123).should('have.value', '342123')
        cy.get('[data-qa="days"]').select('14').should('have.value', '14')
        cy.get('[data-qa="months"]').select('May').should('have.value', '5')
        cy.get('[data-qa="years"]').select('1995').should('have.value', '1995')
        cy.get('#newsletter').click().should('be.checked')
        cy.get('#optin').click().should('be.checked')
        cy.get('[data-qa="first_name"]').type('Gloria').should('have.value', 'Gloria')
        cy.get('[data-qa="last_name"]').type('Nkwocha').should('have.value', 'Nkwocha')
        cy.get('[data-qa="company"]').type('Glow Enterprices').should('have.value', 'Glow Enterprices')
        cy.get('[data-qa="address"]').type('13, Bishop Street').should('have.value', '13, Bishop Street')
        cy.get('[data-qa="address2"]').type('Lagos').should('have.value', 'Lagos')
        cy.get('[data-qa="country"]').select('United States').should('have.value', 'United States')
        cy.get('[data-qa="state"]').type('Lagos').should('have.value', 'Lagos')
        cy.get('[data-qa="city"]').type('Lagos').should('have.value', 'Lagos')
        cy.get('[data-qa="zipcode"]').type('101241').should('have.value', '101241')
        cy.get('[data-qa="mobile_number"]').type('08123456798').should('have.value', '08123456798')
        cy.get('[data-qa="create-account"]').click().should('be.visible')
        cy.get('body').should('be.visible').should('contain', 'Account Created!')
        cy.get('[data-qa="continue-button"]').click().should('be.visible')

})
   it ('Login', () => {
    cy.visit('https://www.automationexercise.com/login')
        cy.get('[data-qa="login-email"]').should('be.visible').and('be.empty').type('lindy@mailinator.com')
        cy.get('[data-qa="login-password"]').should('be.visible').and('be.empty').type('secret_sauce')
        cy.get('[data-qa="login-button"]').should('be.visible').and('be.enabled').click()
        })

       it ('first add to cart', () => {
    cy.visit('https://www.automationexercise.com/login')
    cy.get('.material-icons.card_travel').click().should('be.visible')
    cy.get('a > img').first().click().should('be.visible')
    cy.get('.shop-menu > .nav > :nth-child(2) > a').should('be.visible').click()
    cy.get('#sale_image').should('be.visible').click()
    cy.get('#search_product').should('be.visible').click()
    cy.get(':nth-child(3) > .product-image-wrapper > .single-products > .productinfo > img').should('be.visible')
    cy.get(':nth-child(3) > .product-image-wrapper > .choose > .nav > li > a').click().and('be.visible')
    cy.get(':nth-child(5) > .btn').click().should('be.visible')
    cy.get('.modal-footer > .btn').click()

       })
      it ('second add to cart', () => {
     cy.visit('https://www.automationexercise.com/login')
     cy.get('.material-icons.card_travel').click().should('be.visible')
     cy.get(':nth-child(4) > .product-image-wrapper > .single-products > .productinfo > img').should('be.visible')
     cy.get(':nth-child(4) > .product-image-wrapper > .single-products > .productinfo > p').should('be.visible')
     cy.get(':nth-child(4) > .product-image-wrapper > .single-products > .productinfo > .btn').should('be.visible').click()     
     cy.get('.modal-footer > .btn').click()
     cy.get(':nth-child(4) > .product-image-wrapper > .choose > .nav > li > a').should('be.visible').click()

      })

    it ('third add to cart', () => {
     cy.visit('https://www.automationexercise.com/login')
     cy.get('.material-icons.card_travel').click().should('be.visible')
     cy.get(':nth-child(5) > .product-image-wrapper > .single-products > .productinfo > h2').should('be.visible')
     cy.get(':nth-child(5) > .product-image-wrapper > .single-products > .productinfo > .btn').should('be.visible').click()
     cy.get('u').should('be.visible').click()
     cy.get('.col-sm-6 > .btn').should('be.visible').click()
     cy.get('.modal-footer > .btn').click()
     cy.get('.single-widget').should('be.visible').click()
    })

    it ('fourth add to cart', () => {
     cy.visit('https://www.automationexercise.com/login')
     cy.get('.material-icons.card_travel').click().should('be.visible')
     cy.get(':nth-child(6) > .product-image-wrapper > .single-products > .productinfo > h2').should('be.visible')
     cy.get(':nth-child(6) > .product-image-wrapper > .single-products > .productinfo > p').should('be.visible')
     cy.get(':nth-child(6) > .product-image-wrapper > .single-products > .productinfo > .btn').should('be.visible').click()
     cy.get('.icon-box > .material-icons').should('be.visible').click()
     cy.get('.modal-body > :nth-child(1)').should('be.visible').click()
     cy.get('u').should('be.visible').click()
     cy.get('.col-sm-6 > .btn').should('be.visible').click()
     cy.get('.icon-box > .material-icons').should('be.visible').click()
     cy.get('.modal-body > :nth-child(1)').should('be.visible').click()
     cy.get('.modal-body > :nth-child(2) > a > u').should('be.visible').click()
     cy.get('.login-form > h2').should('be.visible').click()
     cy.get('[data-qa="login-email"]').should('be.visible').and('be.empty').type('lindy@mailinator.com')
     cy.get('[data-qa="login-password"]').should('be.visible').and('be.empty').type('secret_sauce')
     cy.get('[data-qa="login-button"]').should('be.visible').and('be.enabled').click()

    })

     it ('fifth add to cart', () => {
     cy.visit('https://www.automationexercise.com/login')
     cy.get('.material-icons.card_travel').click().should('be.visible')
     cy.get(':nth-child(7) > .product-image-wrapper > .single-products > .productinfo > h2').should('be.visible')
     cy.get(':nth-child(7) > .product-image-wrapper > .single-products > .productinfo > p').should('be.visible')
     cy.get(':nth-child(7) > .product-image-wrapper > .single-products > .productinfo > .btn').should('be.visible').click()
     cy.get('.icon-box > .material-icons').should('be.visible').click()
     cy.get('.modal-title').should('be.visible').click()
    cy.get('.modal-body > :nth-child(1)').should('be.visible').click()
    cy.get('u').should('be.visible').click()
    cy.get('.col-sm-6 > .btn').should('be.visible').click()
    cy.get('.icon-box > .material-icons').should('be.visible').click()
    cy.get('.modal-title').should('be.visible').click()
    cy.get('.modal-body > :nth-child(1)').should('be.visible').click()
    cy.get('.modal-body > :nth-child(2) > a > u').should('be.visible').click()
    cy.get('.login-form > h2').should('be.visible').click()
    cy.get('[data-qa="login-email"]').should('be.visible').and('be.empty').type('lindy@mailinator.com')
    cy.get('[data-qa="login-password"]').should('be.visible').and('be.empty').type('secret_sauce')
    cy.get('[data-qa="login-button"]').should('be.visible').and('be.enabled').click()




    
    

    
     })

