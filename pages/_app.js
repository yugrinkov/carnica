import React from 'react'
import axios from 'axios'
import App from 'next/app'

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    const pages = await axios.get(process.env.CARNICA_PUBLIC_URL + '/api/pages')
    const pageProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {}
    return { pageProps, pages: pages.data }
  }

  constructor(props) {
    super(props)
  }

  render() {
    const { Component, pageProps, pages } = this.props
    return <Component {...pageProps} pages={pages} />
  }
}

export default MyApp
