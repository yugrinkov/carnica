import React from 'react'
import axios from 'axios'
import App from 'next/app'
import uuidv4 from 'uuid/v4'
import Loading from '../components/loading'

class MyApp extends App {
  state = {
    isRouteChanging: false,
    loadingKey: null,
  }
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
