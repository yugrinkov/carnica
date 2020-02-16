import React from 'react'
import axios from 'axios'
import Layout from '../components/layout'
import HeroImage from '../components/heroImage'
import Section from '../components/section'
import Features from '../components/features'
import { NextPage } from 'next'
import Head from 'next/head'

const Club: NextPage<any> = ({ pageData, pages, contacts, benefits = [] }) => (
  <Layout pages={pages} contact={contacts[0]}>
    <Head>
      <title>Клуб Карники (Украина) - О нас</title>
      <meta
        name="Description"
        content="Мы – Клуб Карники (Украина) – объединение ведущих карниководов нашей страны. Начинали вчетвером – Дмитрий Гриньков (Киев), Андрей Пискорский (Николаевская обл.), Андрей Коноплин и Александр Чумаков (оба – Луганская обл.). Позже к нам присоединились другие ведущие карниководы страны - Андрей Голод (Сумчанин), Богдан Болюбаш (Львовщина), Виталий Липатов и Владимир Меланченко (оба - Киевщина)."
      ></meta>
    </Head>
    <HeroImage bannerData={pageData} />
    <Section image={pageData.sectionImage} text={pageData.sectionText} />
    <Features features={benefits} isBenefits={true} />
  </Layout>
)

Club.getInitialProps = async () => {
  const res = await axios.get(process.env.CARNICA_PUBLIC_URL + '/api/clubpages')
  const benefits = await axios.get(
    process.env.CARNICA_PUBLIC_URL + '/api/benefits',
  )
  return { pageData: res.data[0], benefits: benefits.data }
}

export default Club
