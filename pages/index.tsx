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

interface IndexProps {
  homePageData: HomePage[]
  pages?: any
}

const Home: NextPage<IndexProps> = props => {
  return (
    <Layout pages={props.pages}>
      <HeroImage bannerData={props.homePageData} />
      <Features />
    </Layout>
  )
}

Home.getInitialProps = async () => {
  const res = await axios.get(process.env.CARNICA_PUBLIC_URL + '/api/homepages')
  return { homePageData: res.data[0] }
}

export default Home
