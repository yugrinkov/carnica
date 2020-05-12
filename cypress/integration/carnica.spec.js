import Page from '../src/page'
import Header from '../src/header'
import HeroImage from '../src/heroImage'
import InfoSection from '../src/infoSection'
import Footer from '../src/footer'

describe('Carnica Page', () => {
  beforeEach(() => {
    cy.visit('/carnica.html')
  })

  it('Check document title', () => {
    Page.checkTitle('Клуб Карники (Украина) - О карнике')
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

  it('Check footer', () => {
    Footer.checkImage()
    Footer.checkPhone()
    Footer.checkEmail()
  })
})
