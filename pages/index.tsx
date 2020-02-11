import React from 'react'
import axios from 'axios'
import Layout from '../components/layout'
import HeroImage from '../components/heroImage'
import Features from '../components/features'
import { NextPage } from 'next'

interface Journal {
  title: string
}

interface HomePage {
  title?: string
}

interface Feature {
  title?: string
}

interface IndexProps {
  homePageData: HomePage[]
  features: Feature[]
  pages?: any
  contacts?: any
}

const Home: NextPage<IndexProps> = props => {
  return (
    <Layout pages={props.pages} contact={props.contacts[0]}>
      <HeroImage bannerData={props.homePageData} />
      <Features features={props.features} />
    </Layout>
  )
}

Home.getInitialProps = async () => {
  const res = await axios.get(process.env.CARNICA_PUBLIC_URL + '/api/homepages')
  const features = await axios.get(
    process.env.CARNICA_PUBLIC_URL + '/api/features',
  )

  return {
    homePageData: res.data[0],
    features: features.data,
  }
}

export default Home
