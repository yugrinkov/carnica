import React from 'react'
import Layout from '../components/layout'
import HeroImage from '../components/heroImage'
import Features from '../components/features'
import { NextPage } from 'next'
import Head from 'next/head'
import productspages from '../api/productspages.json'
import products from '../api/products.json'

const Products: NextPage<any> = ({ pageData, pages, contacts, products }) => (
  <Layout pages={pages} contact={contacts[0]}>
    <Head>
      <title>Клуб Карники (Украина) - Продукция</title>
      <meta
        name="Description"
        content="Предложение материала карники от членов* Клуба Карники (Украина) на 2020г."
      ></meta>
    </Head>
    <HeroImage bannerData={pageData} />
    <Features features={products} isProducts={true} />
  </Layout>
)

Products.getInitialProps = async () => {
  return { pageData: productspages[0], products: products.reverse() }
}

export default Products
