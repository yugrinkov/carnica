import React from 'react'
import axios from 'axios'
import Layout from '../components/layout'
import HeroImage from '../components/heroImage'
import { NextPage } from 'next'

const Club: NextPage<any> = props => (
  <Layout pages={props.pages} contact={props.contacts[0]}>
    <HeroImage bannerData={props.pageData} />
  </Layout>
)

Club.getInitialProps = async () => {
  const res = await axios.get(process.env.CARNICA_PUBLIC_URL + '/api/clubpages')
  return { pageData: res.data[0] }
}

export default Club
