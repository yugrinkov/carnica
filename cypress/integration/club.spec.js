import Page from '../src/page'
import Header from '../src/header'
import HeroImage from '../src/heroImage'
import Feature from '../src/feature'
import InfoSection from '../src/infoSection'
import Footer from '../src/footer'

describe('Club Page', () => {
  beforeEach(() => {
    cy.visit('/club.html')
  })

  it('Check document title', () => {
    Page.checkTitle('Клуб Карники (Украина) - О нас')
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

  it('Check info section', () => {
    InfoSection.checkImage()
    InfoSection.checkText()
  })

  it('Check features', () => {
    cy.get('[data-test="features"]')
      .find('[data-test="feature"]')
      .then($feature => {
        for (const i of [0, 1, 2]) {
          Feature.checkIcon($feature, i)
          Feature.checkTitle($feature, i)
        }
      })
  })

  it('Check footer', () => {
    Footer.checkImage()
    Footer.checkPhone()
    Footer.checkEmail()
  })
})
