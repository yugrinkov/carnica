export default class HeroImage {
  static checkImage() {
    cy.get('[data-test="heroImage"]')
      .find('img')
      .should('have.attr', 'src')
      .should('not.empty')
  }

  static checkTitle() {
    cy.get('[data-test="heroImage"]')
      .find('h1')
      .should('not.empty')
  }

  static checkText() {
    cy.get('[data-test="heroImage"]')
      .find('p')
      .should('not.empty')
  }

  static checkTitleContent(text) {
    cy.get('[data-test="heroImage"]')
      .find('h1')
      .contains(text)
  }
}
