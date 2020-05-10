/// <reference types="cypress" />

context('Login Form Test', () => {
    before(() => {
      cy.visit('https://demo.applitools.com/hackathon.html')
    })
  
    it('Page title is correct', () => {
      cy.get('.auth-header')
        .should('contain', 'Login Form')
    })
  
    it('Username label is correct', () => {
      cy.get('#username').parent().find('label')
        .should('contain', 'Username')
    })

    it('Password label is correct', () => {
        cy.get('#password').parent().find('label')
          .should('contain', 'Password')
    })

    it('Username icon is present', () => {
        cy.get('.os-icon-user-male-circle')
        .should('be.visible')
    })

    it('Password icon is present', () => {
        cy.get('.os-icon-fingerprint')
        .should('be.visible')
    })

    it('Remember Me checkbox is present', () => {
        cy.get('.form-check-label')
        .should('be.visible')
    })

    it('Twitter checkbox is present', () => {
        cy.get('img[src="img/social-icons/twitter.png"]')
        .should('be.visible')
    })

    it('Facebook checkbox is present', () => {
        cy.get('img[src="img/social-icons/facebook.png"]')
        .should('be.visible')
    })

    it('Linkedin checkbox is present', () => {
        cy.get('img[src="img/social-icons/linkedin.png"]')
        .should('be.visible')
    })


context('Data Driven Test', () => {
    before(() => {
        cy.visit('https://demo.applitools.com/hackathon.html')
    })
      
        
    it('Username and password are not entered', () => {
        cy.get('#username').clear()
        cy.get('#password').clear()
        cy.get('#log-in').click()
        cy.get('.alert-warning').should('contain', 'Both Username and Password must be present')
    })
      
    it('Password is not entered', () => {
        cy.get('#username').clear().type('aaa')
        cy.get('#password').clear()
        cy.get('#log-in').click()
        cy.get('.alert-warning').should('contain', 'Password must be present')
    })
    
    it('Username is not entered', () => {
        cy.get('#username').clear()
        cy.get('#password').clear().type('aaa')
        cy.get('#log-in').click()
        cy.get('.alert-warning').should('contain', 'Username must be present')
        })
    
    it('Username and password are entered', () => {
        cy.get('#username').clear().type('aaa')
        cy.get('#password').clear().type('aaa')
        cy.get('#log-in').click()
        cy.get('.logo').should('exist')
    })
  })
})

context('Table Sort Test', () => {

    it('Table amounts are sorted ascending', () => {
        cy.visit('https://demo.applitools.com/hackathon.html')
        cy.get('#username').clear().type('aaa')
        cy.get('#password').clear().type('aaa')
        cy.get('#log-in').click()

        let sortedListofAmounts = []
        cy.get("td[class='text-right bolder nowrap']").find('span').each(element => {
            sortedListofAmounts.push(element)
        })
        sortedListofAmounts.sort()

        cy.get("#amount").click()

        let sortedTableAmounts = []
        cy.get("td[class='text-right bolder nowrap']").find('span').each(element => {
            sortedTableAmounts.push(element)
        })
        
        sortedTableAmounts.forEach(element => {
            sortedListofAmounts.forEach(amount => {
                expect(element).to.eq(amount)
            })
        })
    })
})