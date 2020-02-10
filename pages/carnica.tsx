import React from 'react'
import Layout from '../components/layout'
import { NextPage } from 'next'

const Carnica: NextPage<any> = props => (
  <Layout pages={props.pages}>
    <div className="container">
      <h1> {props.data.title} </h1>
    </div>
  </Layout>
)

Carnica.getInitialProps = async () => {
  return { data: { title: 'Carnica' } }
}

export default Carnica
