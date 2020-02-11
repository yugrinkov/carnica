import React from 'react'
import Header from './header'
import Footer from './footer'
import Copyright from './copyright'

import '../styles/reset.scss'
import '../styles/global.scss'

const Layout = props => {
  return (
    <>
      <Header pages={props.pages} />
      {props.children}
      <Footer contact={props.contact || {}} />
      <Copyright />
    </>
  )
}

export default Layout
