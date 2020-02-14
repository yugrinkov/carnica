import React from 'react'
import axios from 'axios'
import Layout from '../components/layout'
import HeroImage from '../components/heroImage'
import Section from '../components/section'
import { NextPage } from 'next'

const PartnerShip: NextPage<any> = ({ contacts, pageData, pages }) => (
  <Layout pages={pages} contact={contacts[0]}>
    <HeroImage bannerData={pageData} />
    <Section image={pageData.sectionImage} text={pageData.sectionText} />
  </Layout>
)

PartnerShip.getInitialProps = async () => {
  const res = await axios.get(
    process.env.CARNICA_PUBLIC_URL + '/api/partnershippages',
  )
  return { pageData: res.data[0] }
}

export default PartnerShip
