import React from 'react'
import Layout from '../components/layout'
import { NextPage } from 'next'

const Club: NextPage<any> = props => (
  <Layout pages={props.pages}>
    <div className="container">
      <h1> {props.data.title} </h1>
    </div>
  </Layout>
)

Club.getInitialProps = async () => {
  return { data: { title: 'Club' } }
}

export default Club
