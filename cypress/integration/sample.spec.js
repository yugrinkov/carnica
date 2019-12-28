describe('Home Page', function() {
    it('Check site title', function() {
      cy.visit('/')
      cy.get('[data-test="siteTitle"]').should('contain', 'Клуб Карника Украина')
    })
  })