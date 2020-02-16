import React from 'react'
import axios from 'axios'
import Layout from '../components/layout'
import HeroImage from '../components/heroImage'
import Section from '../components/section'
import { NextPage } from 'next'
import Head from 'next/head'

const Carnica: NextPage<any> = ({ pageData, pages, contacts }) => (
  <Layout pages={pages} contact={contacts[0]}>
    <Head>
      <title>Клуб Карники (Украина) - О карнике</title>
      <meta
        name="Description"
        content="A.m. carnica – порода (раса) пчел, одна из наиболее распространенных в мире. Исторический ареал обитания карники – это область Krajina, которая находится в современной Словении на границе с Австрией. В Украине отселекционированная карника разводится уже более 10 лет."
      ></meta>
    </Head>
    <HeroImage bannerData={pageData} />
    <Section image={pageData.sectionImage} text={pageData.sectionText} />
  </Layout>
)

Carnica.getInitialProps = async () => {
  const res = await axios.get(
    process.env.CARNICA_PUBLIC_URL + '/api/aboutpages',
  )
  return { pageData: res.data[0] }
}

export default Carnica
