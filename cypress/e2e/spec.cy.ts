describe('Navigate Cypress App', () => {
  it('Home Page', () => {
    cy.visit('https://cypress.io')
  })

  it('Go to Docs tab', () => {
    cy.get('.styled__MenuWrapper-sc-16oj5lj-1 > :nth-child(2) > :nth-child(3) > .Link-sc-5cc5in-0').click()
  })
})