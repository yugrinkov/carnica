import React from 'react'
import axios from 'axios'
import Layout from '../components/layout'
import HeroImage from '../components/heroImage'
import { NextPage } from 'next'

const Products: NextPage<any> = ({ pageData, pages, contacts }) => (
  <Layout pages={pages} contact={contacts[0]}>
    <HeroImage bannerData={pageData} />
  </Layout>
)

Products.getInitialProps = async () => {
  const res = await axios.get(
    process.env.CARNICA_PUBLIC_URL + '/api/productspages',
  )
  return { pageData: res.data[0] }
}

export default Products
