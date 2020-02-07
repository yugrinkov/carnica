import React from 'react'
import Layout from '../components/layout'
import HeroImage from '../components/heroImage'
import { NextPage } from 'next'

const Club: NextPage<any> = props => (
  <Layout pages={props.pages}>
    <HeroImage />
    <div className="container">
      <h1> {props.data.title} </h1>
    </div>
  </Layout>
)

Club.getInitialProps = async () => {
  return { data: { title: 'Club' } }
}

export default Club
