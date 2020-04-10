import React from 'react'
import styles from './index.module.scss'
import FireIcon from '../../public/icons/fire.svg'

const HotProposal = ({ text, title = 'Горячее предложение' }) => {
  const getContent = text => {
    return { __html: text }
  }
  return (
    text && (
      <div className={styles.hot}>
        <div className={`${styles.boxContainer} container`}>
          <div className={styles.box}>
            <div className={styles.title}>
              <img className={styles.icon} src={FireIcon} alt="Fire icon" />
              <div className={styles.text}>{title}</div>
            </div>
            <div
              className={styles.content}
              dangerouslySetInnerHTML={getContent(text)}
            ></div>
          </div>
        </div>
      </div>
    )
  )
}

export default HotProposal
