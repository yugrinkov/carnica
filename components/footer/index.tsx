import React from 'react'
import Link from 'next/link'
import styles from './index.module.scss'

const Footer = props => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className={`col-md-10 col-sm-4 ${styles.info}`}>
            <img src="images/logo.png" className={styles.img} alt="logo" />

            <p>
              <a href={`tel:${props.contact.phone}`}>
                <i className="fa fa-phone"></i> {props.contact.phone}
              </a>
            </p>
            <p>
              <a href={`mailto:${props.contact.email}`}>
                <i className="fa fa-envelope-o"></i> {props.contact.email}
              </a>
            </p>
            <p>
              <Link href={`/`}>
                <a>
                  <i className="fa fa-globe"></i> {props.contact.site}
                </a>
              </Link>
            </p>
          </div>

          <div className="col-md-2 col-sm-4">
            <h3>Полезные ссылки</h3>
            <p>
              <a href="http://apijournal.com">Пасічний Журнал</a>
            </p>
            <p>
              <a href="https://www2.hu-berlin.de/beebreed/ZWS/">
                www.BeeBreed.eu
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
