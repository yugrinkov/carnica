import { withRouter } from 'next/router'
import Link from 'next/link'
import React, { Children } from 'react'

const ActiveLink = ({ router, children, href, activeClassName = 'active' }) => {
  const child = Children.only(children)

  let className = child.props.className || ''
  if (router.pathname === href && activeClassName) {
    className = `${className} ${activeClassName}`.trim()
  }

  return <Link href={href}>{React.cloneElement(child, { className })}</Link>
}

export default withRouter(ActiveLink)
