export default class Feature {
  static checkIcon($feature, index = 0) {
    cy.wrap($feature)
      .eq(index)
      .find('.fa')
  }

  static checkTitle($feature, index = 0) {
    cy.wrap($feature)
      .eq(index)
      .find('h2')
      .should('not.empty')
  }

  static checkPriceLabel($feature, index = 0) {
    cy.wrap($feature)
      .eq(index)
      .find('h3')
      .should('not.empty')
  }

  static checkSellers($feature, index = 0) {
    cy.wrap($feature)
      .eq(index)
      .find('[data-test="sellers"]')
      .should('not.empty')
  }
}
