import React from 'react'
import styles from './index.module.scss'
import Link from 'next/link'

const Features = props => {
  const { features = [] } = props
  const getDescription = description => {
    return { __html: '*' + description }
  }

  const benefitsClassName = props.isBenefits && 'benefits'
  const iconClassName = props.isBenefits ? 'fa-check' : 'fa-cart-arrow-down'

  const buildItem = (feature, index) => (
    <div className="col-md-4 col-sm-6">
      <div className={`divider-wrapper divider-${index + 1}`}>
        <div className={styles.feature}>
          <i className={`fa ${iconClassName}`}></i>
          <h2>{feature.title}</h2>
          {feature.priceLabel && <h3>{feature.priceLabel}*</h3>}
        </div>
        <p
          className={styles.description}
          dangerouslySetInnerHTML={getDescription(feature.description)}
        ></p>
      </div>
    </div>
  )

  return (
    <div className={`divider ${benefitsClassName}`}>
      {props.isBenefits ? (
        <h2>Преимущества материала «made in Ukraine»</h2>
      ) : (
        ''
      )}
      <div className="container">
        <div className="row">
          {features.map((feature, index) =>
            !props.isBenefits ? (
              <Link key={feature.id} href="/products">
                {buildItem(feature, index)}
              </Link>
            ) : (
              buildItem(feature, index)
            ),
          )}
        </div>
      </div>
    </div>
  )
}

export default Features
