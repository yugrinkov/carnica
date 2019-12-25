import React from 'react'
import styles from './index.module.scss'
import Image from '../../public/images/landing.png'


const HeroImage: React.FC = () => {
    return (
        <div className={styles.heroImage}>
            <img src={Image} alt="Hero Image" />
            <div className={`${styles.content} container`}>
            <h1>Пасека "Карника"</h1>
            
            <p>Селекционная пасека «Карника» – ядро, вокруг которого возникло объединение «Клуб Карники» (Украина). В минувшем сезоне хозяйство изменилось, как количественно, так и качественно. Подробнее о преобразованиях можно прочитать в «Пасечном Журнале». Как итог, в зиму ушло свыше 150 пчелоединиц (семьи, отводки, нуклеусы), которые размещаются на двух точках: в Киеве и области. Нуклеусный парк – порядка 500 маткомест.</p>
            <div className={styles.arrow}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                </div>
                
            
    </div>
    )
}

export default HeroImage
