export default class InfoSection {
  static checkImage() {
    cy.get('[data-test="infoSection"]')
      .find('img')
      .should('have.attr', 'src')
      .should('not.empty')
  }

  static checkText() {
    cy.get('[data-test="infoSection"]')
      .find('.about-des')
      .should('not.empty')
  }
}
