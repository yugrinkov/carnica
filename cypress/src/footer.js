export default class Footer {
  static checkImage() {
    cy.get('footer')
      .find('img')
      .should('have.attr', 'src')
      .should('not.empty')
  }

  static checkPhone() {
    cy.get('footer')
      .find('[data-test="phone"]')
      .should('not.empty')
  }

  static checkEmail() {
    cy.get('footer')
      .find('[data-test="email"]')
      .should('not.empty')
  }
}
