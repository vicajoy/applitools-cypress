/// <reference types="cypress" />

beforeEach(function() {
    cy.eyesOpen({
      testName: this.currentTest.title,
      appName: 'Applitools Demo App',
      batchName: 'Applitools Visual Tests',
    })
});

afterEach(() => cy.eyesClose())

context('Login Form Test', () => {
    it('Displays Login Form correctly', () => {
        cy.visit('https://demo.applitools.com/hackathon.html')
        cy.eyesCheckWindow('Login Form')
    })
})

context('Data Driven Test', () => {
    beforeEach(() => {
        cy.visit('https://demo.applitools.com/hackathon.html')
    })

    it('Shows message that username and password are not entered', () => {
        cy.get('#username').clear()
        cy.get('#password').clear()
        cy.get('#log-in').click()
        cy.eyesCheckWindow('Username and password are not entered')
    })

    it('Shows message that username is not entered', () => {
        cy.get('#username').clear().type('aaa')
        cy.get('#password').clear()
        cy.get('#log-in').click()
        cy.eyesCheckWindow('Username is not entered')
    })

    it('Shows message that password is not entered', () => {
        cy.get('#username').clear()
        cy.get('#password').clear().type('aaa')
        cy.get('#log-in').click()
        cy.eyesCheckWindow('Password is not entered')
    })

    it('Navigates to home page after successful login', () => {
        cy.get('#username').clear().type('aaa')
        cy.get('#password').clear().type('aaa')
        cy.get('#log-in').click()
        cy.eyesCheckWindow('Successful login')
    })
})

context('Table Sort Test', () => {
    it('Shows table amounts sorted in ascending order', () => {
        cy.visit('https://demo.applitools.com/hackathon.html')
        cy.get('#username').clear().type('aaa')
        cy.get('#password').clear().type('aaa')
        cy.get('#log-in').click()
        cy.get('.logo').should('exist')
        cy.get("#amount").click()
        cy.eyesCheckWindow('Sorted table')
    })
})