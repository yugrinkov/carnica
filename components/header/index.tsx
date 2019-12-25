import React from 'react'
import Menu from '../menu'
import cc from 'classcat'
import styles from './index.module.scss'

import forumIcon from '../../public/icons/forum.svg'

const Header: React.FC = () => {
    return (
        <header>
            <div className={cc({
                ['container']: true,
                [styles.headerContainer]: true
            })}>
                
                <div className={styles.headerContent}>
                    <div className={styles.leftSide}>
                        <Menu />
                        <h2>Клуб Карника Украина</h2>
                    </div>
                    <a className={styles.forumLink} href="http://carnica.ho.ua/forum">
                        <img src={forumIcon} alt="Forum icon" />
                        <div className={styles.linkText}>
                            <p className={styles.line1}>Форум</p>
                            <p className={styles.line2}>24/7</p>
                        </div>
                    </a>
                </div>
            </div>
        </header>
    )
}

export default Header
