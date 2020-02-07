import React from 'react'
import Header from './header'

import '../styles/reset.scss'
import '../styles/global.scss'

const Layout = props => {
  return (
    <>
      <Header pages={props.pages} />
      {props.children}
    </>
  )
}

export default Layout
