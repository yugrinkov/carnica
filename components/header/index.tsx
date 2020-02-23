import React from 'react'
import Link from 'next/link'

const Header: React.FC<any> = ({ pages = [] }) => {
  const getPageLink = ref => {
    if (
      ref === 'http://carnica.ho.ua/forum' ||
      !process.env.CARNICA_IS_PRODUCTION
    )
      return ref
    return ref === '/' ? ref + 'index.html' : ref + '.html'
  }
  return (
    <header>
      <div className="container">
        <div
          className="navbar navbar-default navbar-static-top"
          role="navigation"
        >
          <div className="navbar-header">
            <button
              className="navbar-toggle"
              data-toggle="collapse"
              data-target=".navbar-collapse"
            >
              <span className="icon icon-bar"></span>
              <span className="icon icon-bar"></span>
              <span className="icon icon-bar"></span>
            </button>
            <Link href="/">
              <a href="#" className="navbar-brand">
                <img
                  src="/images/logo.png"
                  className="img-responsive logo"
                  alt="logo"
                />
              </a>
            </Link>
          </div>
          <div className="collapse navbar-collapse">
            <ul className="nav navbar-nav navbar-right">
              {pages.map(page => (
                <li key={page.id}>
                  {page.linkTarget === '_self' ? (
                    <Link href={getPageLink(page.linkReference)}>
                      <a>{page.linkText}</a>
                    </Link>
                  ) : (
                    <a href={page.linkReference}>{page.linkText}</a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
