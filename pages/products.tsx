import React from 'react'
import Layout from '../components/layout'
import HeroImage from '../components/heroImage'
import { NextPage } from 'next'

const Products: NextPage<any> = props => (
  <Layout pages={props.pages}>
    <HeroImage />
    <div className="container">
      <h1> {props.data.title} </h1>
    </div>
  </Layout>
)

Products.getInitialProps = async () => {
  return { data: { title: 'Products' } }
}

export default Products
