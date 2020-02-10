import React from 'react'
import Layout from '../components/layout'
import { NextPage } from 'next'

const PartnerShip: NextPage<any> = props => (
  <Layout pages={props.pages}>
    <div className="container">
      <h1> {props.data.title} </h1>
    </div>
  </Layout>
)

PartnerShip.getInitialProps = async () => {
  return { data: { title: 'Partnership' } }
}

export default PartnerShip
