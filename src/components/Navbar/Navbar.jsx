import { useState, useRef, useLayoutEffect, useEffect } from 'react';
import { gsap } from 'gsap';

import global from '../../global.module.scss';
import styles from './Navbar.module.scss';
import logo from '../../assets/logos/main-logo-lg.png';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(window.matchMedia("(max-width: 796px)").matches);
  const [scrolled, setScrolled] = useState(document.documentElement.scrollTop > 150);
  const [navToggled, setNavToggled] = useState(false);

  useEffect(() => {
    // MATCH MEDIA MOBILE
    window.matchMedia("(max-width: 796px)").addEventListener('change', matchMediaHandler);
    // NAV SCROLL EFFECT
    window.addEventListener('scroll', scrollEventHandler);

    return () => {
      window.matchMedia("(max-width: 796px)").removeEventListener('change', matchMediaHandler);
      window.removeEventListener('scroll', scrollEventHandler);
    }
  }, [])
  
  // GSAP ANIMATION
  const app = useRef();
  const nav = useRef();
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // onload animation
      gsap.from(nav.current, 0.75, { autoAlpha: 0, y: 30, stagger: 0.25 })
    }, app)

    return () => ctx.revert()
  }, []);

  // HANDLERS
  const matchMediaHandler = (e) => setIsMobile(e.matches);
  const scrollEventHandler = () => setScrolled(document.documentElement.scrollTop > 150);
  const toggleNavHandler = () => setNavToggled(!navToggled);

  return (
    <nav ref={nav} className={`${styles.container} ${scrolled ? styles.scrolled : ''}`} style={{ backgroundColor: `${navToggled ? 'var(--c-neutral-900)' : ''}` }}>
      {
        isMobile ? (
          <div>
            <ul className={`${global.container} ${styles.nav_links}`}>
              <li className={styles.nav_toggler}>
                <button className={navToggled ? styles.active : ''} onClick={toggleNavHandler}>
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