import Page from '../src/page'
import Header from '../src/header'
import HeroImage from '../src/heroImage'
import Feature from '../src/feature'
import InfoSection from '../src/infoSection'
import Footer from '../src/footer'

describe('Products Page', () => {
  beforeEach(() => {
    cy.visit('/products.html')
  })

  it('Check document title', () => {
    Page.checkTitle('Клуб Карники (Украина) - Продукция')
  })

  it('Check logo', () => {
    Header.checkLogo()
  })

  it('Check navigation bar', () => {
    cy.get('header')
      .find('li')
      .then($navBar => {
        Header.checkLinks($navBar)
      })
  })

  it('Check hero image', () => {
    HeroImage.checkImage()
    HeroImage.checkTitle()
    HeroImage.checkText()
  })

  it('Check features', () => {
    cy.get('[data-test="features"]')
      .find('[data-test="feature"]')
      .then($feature => {
        Feature.checkIcon($feature)
        Feature.checkTitle($feature)
        Feature.checkSellers($feature)
      })
  })

  it('Check footer', () => {
    Footer.checkImage()
    Footer.checkPhone()
    Footer.checkEmail()
  })
})
