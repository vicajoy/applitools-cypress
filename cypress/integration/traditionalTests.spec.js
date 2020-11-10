/// <reference types="cypress" />

context('Login Form Test', () => {
    before(() => {
      cy.visit('https://demo.applitools.com/hackathon.html')
    })
  
    it('Displays page title correctly', () => {
      cy.get('.auth-header')
        .should('contain', 'Login Form')
    })
  
    it('Displays username label correctly', () => {
      cy.get('#username').parent().find('label')
        .should('contain', 'Username')
    })

    it('Displays password label correctly', () => {
        cy.get('#password').parent().find('label')
          .should('contain', 'Password')
    })

    it('Displays username icon', () => {
        cy.get('.os-icon-user-male-circle')
        .should('be.visible')
    })

    it('Displays password icon', () => {
        cy.get('.os-icon-fingerprint')
        .should('be.visible')
    })

    it('Displays Remember Me checkbox', () => {
        cy.get('.form-check-label')
        .should('be.visible')
    })

    it('Displays Twitter icon', () => {
        cy.get('img[src="img/social-icons/twitter.png"]')
        .should('be.visible')
    })

    it('Diplays Facebook icon', () => {
        cy.get('img[src="img/social-icons/facebook.png"]')
        .should('be.visible')
    })

    it('Displays Linkedin icon', () => {
        cy.get('img[src="img/social-icons/linkedin.png"]')
        .should('be.visible')
    })

context('Data Driven Test', () => {
    before(() => {
        cy.visit('https://demo.applitools.com/hackathon.html')
    })
        
    it('Shows message that username and password are not entered', () => {
        cy.get('#username').clear()
        cy.get('#password').clear()
        cy.get('#log-in').click()
        cy.get('.alert-warning').should('contain', 'Both Username and Password must be present')
    })
      
    it('Shows message that username is not entered', () => {
        cy.get('#username').clear().type('aaa')
        cy.get('#password').clear()
        cy.get('#log-in').click()
        cy.get('.alert-warning').should('contain', 'Password must be present')
    })
    
    it('Shows message that password is not entered', () => {
        cy.get('#username').clear()
        cy.get('#password').clear().type('aaa')
        cy.get('#log-in').click()
        cy.get('.alert-warning').should('contain', 'Username must be present')
        })
    
    it('Navigates to home page after successful login', () => {
        cy.get('#username').clear().type('aaa')
        cy.get('#password').clear().type('aaa')
        cy.get('#log-in').click()
        cy.get('.logo').should('exist')
    })
  })
})

context('Table Sort Test', () => {
    it('Shows table amounts sorted in ascending order', () => {
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