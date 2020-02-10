import React from 'react'
import styles from './index.module.scss'

interface Props {
  bannerData?: any
}

const HeroImage: React.FC<Props> = ({ bannerData = {} }) => {
  return (
    <div className={styles.heroImage}>
      <img src={bannerData.heroImageBanner.url} alt="Hero Image" />

      <div className={`${styles.content} container`}>
        <h1>{bannerData.heroImageTitle}</h1>

        <p className="mt20">{bannerData.heroImageSubtitle}</p>
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
  )
}

export default HeroImage
