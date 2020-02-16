import React from 'react'
import axios from 'axios'
import Layout from '../components/layout'
import HeroImage from '../components/heroImage'
import Features from '../components/features'
import { NextPage } from 'next'
import Head from 'next/head'

const Products: NextPage<any> = ({ pageData, pages, contacts, products }) => (
  <Layout pages={pages} contact={contacts[0]}>
    <Head>
      <title>Клуб Карники (Украина) - Продукция</title>
    </Head>
    <HeroImage bannerData={pageData} />
    <Features features={products} isProducts={true} />
  </Layout>
)

Products.getInitialProps = async () => {
  const res = await axios.get(
    process.env.CARNICA_PUBLIC_URL + '/api/productspages',
  )
  const products = await axios.get(
    process.env.CARNICA_PUBLIC_URL + '/api/products',
  )
  return { pageData: res.data[0], products: products.data.reverse() }
}

export default Products
