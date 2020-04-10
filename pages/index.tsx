import React from 'react'
import Layout from '../components/layout'
import HeroImage from '../components/heroImage'
import Features from '../components/features'
import Section from '../components/section'
import HotProposal from '../components/hotProposal'
import { NextPage } from 'next'
import Head from 'next/head'
import homePages from '../api/homepages.json'
import features from '../api/features.json'

interface Journal {
  title: string
}

interface HomePage {
  title?: string
  sectionImage: any
  sectionText: string
  hotProposalTitle: string
  hotProposalText: string
}

interface Feature {
  title?: string
}

interface IndexProps {
  homePageData: HomePage
  features: Feature[]
  pages?: any
  contacts?: any
}

const Home: NextPage<IndexProps> = ({
  homePageData,
  pages,
  features,
  contacts,
}) => {
  return (
    <Layout pages={pages} contact={contacts[0]}>
      <Head>
        <title>Клуб Карники (Украина) - Главная</title>
        <meta
          name="Description"
          content="Селекционная пасека «Карника» – ядро, вокруг которого возникло объединение «Клуб Карники» (Украина). В зиму ушло свыше 150 пчелоединиц (семьи, отводки, нуклеусы), которые размещаются на двух точках: в Киеве и области. Нуклеусный парк – свыше 500 маткомест."
        ></meta>
      </Head>
      <HeroImage bannerData={homePageData}>
        <HotProposal
          title={homePageData.hotProposalTitle}
          text={homePageData.hotProposalText}
        />
      </HeroImage>
      <Features features={features} />
      <Section
        image={homePageData.sectionImage}
        text={homePageData.sectionText}
      />
    </Layout>
  )
}

Home.getInitialProps = async () => {
  return {
    homePageData: homePages[0],
    features: features,
  }
}

export default Home
