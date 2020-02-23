import React from 'react'
import axios from 'axios'
import App from 'next/app'
import uuidv4 from 'uuid/v4'
import Loading from '../components/loading'
import pages from '../api/pages.json'
import contacts from '../api/contacts.json'
import TagManager from 'react-gtm-module'

class MyApp extends App {
  state = {
    isRouteChanging: false,
    loadingKey: null,
  }
  static async getInitialProps({ Component, ctx }) {
    const pageProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {}

    return { pageProps, pages: pages, contacts: contacts }
  }

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const { router } = this.props

    const routeChangeStartHandler = () => {
      this.setState(() => ({
        isRouteChanging: true,
        loadingKey: uuidv4().substr(0, 8),
      }))
    }

    const routeChangeEndHandler = () => {
      this.setState(() => ({
        isRouteChanging: false,
      }))
    }

    router.events.on('routeChangeStart', routeChangeStartHandler)
    router.events.on('routeChangeComplete', routeChangeEndHandler)
    router.events.on('routeChangeError', routeChangeEndHandler)

    if (process.env.CARNICA_IS_PRODUCTION) {
      const tagManagerArgs = {
        gtmId: 'GTM-KBTF4RX',
      }

      TagManager.initialize(tagManagerArgs)
    }
  }

  render() {
    const { Component, pageProps, pages, contacts } = this.props
    return (
      <>
        <Loading {...this.state} />
        <Component {...pageProps} pages={pages} contacts={contacts} />
      </>
    )
  }
}

export default MyApp
