export default class Page {
  static checkTitle(title) {
    cy.title().should('eq', title)
  }
}
