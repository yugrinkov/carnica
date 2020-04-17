import Header from '../src/header'
import HeroImage from '../src/heroImage'

describe('Navigation', () => {
  it('Check site navigation', () => {
    cy.visit('/')

    Header.clickLink('Клуб Карники')
    HeroImage.checkTitleContent('Клуб Карники')

    Header.clickLink('О Карнике')
    HeroImage.checkTitleContent('О Карнике')

    Header.clickLink('Партнерство')
    HeroImage.checkTitleContent('Партнерство')

    Header.clickLink('Продукция')
    HeroImage.checkTitleContent('Продукция')
  })
})
