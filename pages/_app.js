import React from 'react'
import axios from 'axios'
import App from 'next/app'

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    const pages = await axios.get(process.env.CARNICA_PUBLIC_URL + '/api/pages')
    const contacts = await axios.get(
      process.env.CARNICA_PUBLIC_URL + '/api/contacts',
    )
    const pageProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {}

    return { pageProps, pages: pages.data, contacts: contacts.data }
  }

  constructor(props) {
    super(props)
  }

  render() {
    const { Component, pageProps, pages, contacts } = this.props
    return <Component {...pageProps} pages={pages} contacts={contacts} />
  }
}

export default MyApp
