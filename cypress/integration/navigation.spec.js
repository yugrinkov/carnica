import Header from '../src/header'
import HeroImage from '../src/heroImage'

describe('Navigation', () => {
  it('Check site navigation', () => {
    cy.visit('/')

    Header.clickLink('Клуб Карники', 'club.html')
    HeroImage.checkTitleContent('Клуб Карники')

    Header.clickLink('О Карнике', 'carnica.html')

    HeroImage.checkTitleContent('О Карнике')

    Header.clickLink('Партнерство', 'partnership.html')

    HeroImage.checkTitleContent('Партнерство')

    Header.clickLink('Продукция', 'products.html')

    HeroImage.checkTitleContent('Продукция')
  })
})
