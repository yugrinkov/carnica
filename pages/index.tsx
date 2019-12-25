import React from 'react'
import axios from 'axios'
import Layout from '../components/layout'
import HeroImage from '../components/heroImage'
import { NextPage } from 'next'

interface IndexProps {
  data?: any
}

const Home: NextPage<IndexProps> = ({ data }) => (
  <Layout>
    <HeroImage />
    <div className="container">
      
      <h1> {data[0].title} </h1>
    </div>
  </Layout>
)

Home.getInitialProps = async ({ req }) => {
  const res = await axios.get('https://intense-sands-31533.herokuapp.com/journals')
  return { data: res.data }
}

export default Home
