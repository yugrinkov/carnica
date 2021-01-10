import React from 'react'
import styles from './index.module.scss'

interface Props {
  bannerData?: any
  children?: any
}

const HeroImage: React.FC<Props> = ({ bannerData = {}, children }) => {
  const getText = text => {
    return { __html: text }
  }
  return (
    <>
      <div data-test="heroImage" className={styles.heroImage}>
        <img src={bannerData.heroImageBanner.url} alt="Hero Image" />
        {children}

        <div className={`${styles.content} container`}>
          <h1>{bannerData.heroImageTitle}</h1>

          <p
            className="mt20"
            dangerouslySetInnerHTML={getText(bannerData.heroImageSubtitle)}
          ></p>
          <div className={styles.arrow}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className={styles.circleWrapper}>
            <a
              href="https://www2.hu-berlin.de/beebreed/ZWS/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className={styles.circle}
                src="https://www2.hu-berlin.de/beebreed/ZWS/assets/img/beebreed128.png"
                alt="logo"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default HeroImage
