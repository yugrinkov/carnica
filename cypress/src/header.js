export default class Header {
  static checkLogo() {
    cy.get('header')
      .find('img')
      .should('have.attr', 'src')
      .should('include', 'logo.png')
  }

  static checkLink($el, index, text, reference) {
    cy.wrap($el)
      .eq(index)
      .contains(text)
      .should('have.attr', 'href')
      .should('include', reference)
  }

  static checkLinks($navBar) {
    Header.checkLink($navBar, 0, 'Главная', 'index.html')
    Header.checkLink($navBar, 1, 'Клуб Карники', 'club.html')
    Header.checkLink($navBar, 2, 'О Карнике', 'carnica.html')
    Header.checkLink($navBar, 3, 'Партнерство', 'partnership.html')
    Header.checkLink($navBar, 4, 'Продукция', 'products.html')
    Header.checkLink($navBar, 5, 'Форум', 'http://carnica.ho.ua/forum')
  }

  static clickLink(text, pathname) {
    cy.get('header')
      .find('li')
      .contains(text)
      .click()
    cy.location('pathname', { timeout: 60000 }).should('include', pathname)
  }
}
