import React, { useRef, useEffect, useState } from 'react'
import styles from './index.module.scss'
import menuIcon from '../../public/icons/menu.svg'

const Menu = () => {
  const [hidden, setHidden] = useState(true)
  const menu = useRef<HTMLInputElement>(null)
  const menuButton = useRef<HTMLInputElement>(null)
  let ab = 12

  function useOutsideAlerter(ref, callback?) {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (!hidden && ref.current && !ref.current.contains(event.target)) {
        if (callback) callback()
      }
    }

    useEffect(() => {
      // Bind the event listener
      document.addEventListener('mousedown', handleClickOutside)
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener('mousedown', handleClickOutside)
      }
    })
  }

  const showMenu = () => {
    const offsetWidth = document.body.offsetWidth
    const containerWidth = 1150

    if (offsetWidth < containerWidth) {
      menu.current.style.width = `60%`
    } else {
      menu.current.style.width = `${menuButton.current.offsetLeft + 55}px`
    }
    setHidden(false)
  }

  const hideMenu = () => {
    menu.current.style.width = '0px'
    setHidden(true)
  }

  useOutsideAlerter(menu, hideMenu)

  return (
    <React.Fragment>
      <div className={styles.menuIcon} onClick={showMenu} ref={menuButton}>
        <img src={menuIcon} alt="Menu Icon" />
      </div>
      <div className={styles.menu} ref={menu}>
        <a className={styles.closebtn} onClick={hideMenu}>
          &times;
        </a>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Clients</a>
        <a href="#">Contact</a>
      </div>
    </React.Fragment>
  )
}

export default Menu
