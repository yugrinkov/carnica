import React from 'react'
import styles from './index.module.scss'

const Features = props => {
  const { features = [], isBenefits, isProducts } = props

  const getDescription = description => {
    return { __html: description }
  }

  const benefitsClassName = isBenefits && 'benefits'
  const productsClassName = isProducts && 'products'
  const iconClassName = isBenefits ? 'fa-check' : 'fa-cart-arrow-down'

  const sellers = sellers => {
    return sellers.map(seller => (
      <a key={seller.id} href={`tel:${seller.phone}`}>
        <div className={styles.seller}>
          <i className="fa fa-phone"></i>&nbsp;{seller.phone}&nbsp;(
          {seller.name})
        </div>
      </a>
    ))
  }

  const buildItem = (feature, index) => {
    const cartColorClassName = isProducts ? '' : `divider-${index + 1}`
    return (
      <div key={feature.id} className="col-md-4 col-sm-6">
        <div className={`divider-wrapper ${cartColorClassName}`}>
          <div className={styles.feature}>
            {!feature.sellers && <i className={`fa ${iconClassName}`}></i>}
            <h2>{feature.title}</h2>
            {feature.priceLabel && <h3>{feature.priceLabel}</h3>}
          </div>
          <div
            className={styles.description}
            dangerouslySetInnerHTML={getDescription(feature.description)}
          ></div>
          {feature.sellers && (
            <div className={styles.sellers}>{sellers(feature.sellers)}</div>
          )}
        </div>
      </div>
    )
  }

  return (
    <div className={`divider ${benefitsClassName} ${productsClassName}`}>
      {props.isBenefits ? (
        <h2>Преимущества материала «made in Ukraine»</h2>
      ) : (
        ''
      )}
      <div className="container">
        <div className="row">
          {features.map((feature, index) => buildItem(feature, index))}
        </div>
      </div>
    </div>
  )
}

export default Features
