import React from 'react'
import axios from 'axios'
import Layout from '../components/layout'
import HeroImage from '../components/heroImage'
import { NextPage } from 'next'

interface Journal {
  title: string
}

interface IndexProps {
  data: Journal[]
  pages?: any
}

const Home: NextPage<IndexProps> = props => {
  return (
    <Layout pages={props.pages}>
      <HeroImage />
      <div className="container">
        <h1> {props.data[0].title} </h1>
      </div>
    </Layout>
  )
}

Home.getInitialProps = async () => {
  const res = await axios.get(process.env.CARNICA_PUBLIC_URL + '/api/journals')
  return { data: res.data }
}

export default Home
