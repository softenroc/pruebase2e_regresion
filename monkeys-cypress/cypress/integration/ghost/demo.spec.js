/// <reference types="cypress" />

context('Window', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3001/ghost')
      cy.login('equipo24@mail.com','equipo24equipo24')
    })
  
    it('Test', () => {
        cy.log('Test ghost');
      })

  })
  