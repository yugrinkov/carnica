import React from 'react'
import Layout from '../components/layout'
import HeroImage from '../components/heroImage'
import Section from '../components/section'
import Features from '../components/features'
import { NextPage } from 'next'
import Head from 'next/head'
import clubpages from '../api/clubpages.json'
import benefits from '../api/benefits.json'

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
  return { pageData: clubpages[0], benefits: benefits }
}

export default Club
