import { withRouter } from 'next/router'
import Link from 'next/link'
import React, { Children } from 'react'

const ActiveLink = ({ router, children, href, activeClassName = 'active' }) => {
  const child = Children.only(children)

  let className = child.props.className || ''
  if (router.pathname === href && activeClassName) {
    className = `${className} ${activeClassName}`.trim()
  }

  const asLink = href === '/' ? href : href + '.html'

  return (
    <Link as={asLink} href={href}>
      {React.cloneElement(child, { className })}
    </Link>
  )
}

export default withRouter(ActiveLink)
