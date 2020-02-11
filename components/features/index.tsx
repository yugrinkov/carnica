import React from 'react'
import styles from './index.module.scss'
import Link from 'next/link'

const Features = props => {
  const { features = [] } = props

  const getDescription = description => {
    return { __html: '*' + description }
  }
  return (
    <div className="divider">
      <div className="container">
        <div className="row">
          {features.map((feature, index) => (
            <Link key={feature.id} href="/products">
              <div className="col-md-4 col-sm-6">
                <div className={`divider-wrapper divider-${index + 1}`}>
                  <div className={styles.feature}>
                    <i className="fa fa-cart-arrow-down"></i>
                    <h2>{feature.title}</h2>
                    <h3>{feature.priceLabel}*</h3>
                  </div>
                  <p
                    className={styles.description}
                    dangerouslySetInnerHTML={getDescription(
                      feature.description,
                    )}
                  ></p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Features
