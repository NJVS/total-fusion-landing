import { useState } from 'react';

import global from '../../global.module.scss';
import styles from './Navbar.module.scss';
import logo from '../../assets/logos/main-logo-lg.png';

const Navbar = ({ blured }) => {
  const [isMobile, setIsMobile] = useState(
    window.matchMedia("(max-width: 796px)").matches
  )
  const [navToggled, setNavToggled] = useState(false);

  useState(() => {
    window
      .matchMedia("(max-width: 796px)")
      .addEventListener('change', e => setIsMobile(e.matches));
  }, [])

  const toggleNav = () => setNavToggled(!navToggled);

  return (
    <nav className={styles.container} style={{ backgroundColor: `${navToggled ? 'var(--c-neutral-900)' : ''}` }}>
      {
        isMobile ? (
          <div>
            <ul className={`${global.container} ${styles.nav_links}`}>
              <li className={styles.nav_toggler}>
                <button className={navToggled ? styles.active : ''} onClick={toggleNav}>
                  <span></span>
                  <span></span>
                  <span></span>
                </button>
              </li>
              <li className={styles.nav_logo}>
                <a href="#hero">
                  <img src={logo} alt="beyond total fusion" />
                </a>
              </li>
              <li className={styles.nav_item}>
                <a href="/" style={{ textDecoration: 'underline' }}>Book Now</a>
              </li>
            </ul>
            <ul className={`${styles.nav_links_mobile} ${navToggled ? styles.toggled : ''}`}>
              <li className={styles.nav_item}>
                <a href="#treatments">Treatment</a>
              </li>
              <li className={styles.nav_item}>
                <a href="#packages">Packages & Prices</a>
              </li>
              <li className={styles.nav_item}>
                <a href="#services">Personalised Services</a>
              </li>
              <li className={styles.nav_item}>
                <a href="#difference">Our Difference</a>
              </li>
            </ul>
          </div>
        ) : (
          <ul className={`${global.container} ${styles.nav_links}`}>
            <li className={styles.nav_item}>
              <a href="#treatments">Treatment</a>
            </li>
            <li className={styles.nav_item}>
              <a href="#packages">Packages & Prices</a>
            </li>
            <li className={styles.nav_logo}>
              <a href="#hero">
                <img src={logo} alt="beyond total fusion" />
              </a>
            </li>
            <li className={styles.nav_item}>
              <a href="#services">Personalised Services</a>
            </li>
            <li className={styles.nav_item}>
              <a href="#difference">Our Difference</a>
            </li>
            <li className={`${styles.nav_item} ${styles.abs_right}`}>
              <a href="/">Book Now</a>
            </li>
          </ul>
        )
      }
    </nav >

  )
}

export default Navbar