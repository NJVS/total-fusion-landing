import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';

import global from '../../global.module.scss';
import styles from './Header.module.scss';

import heroImg from '../../assets/images/hero-img.jpg'

const Header = () => {

  const app = useRef();
  const bg = useRef();
  const img = useRef();
  const heading = useRef();
  const parag = useRef();
  const btn = useRef();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // onload animation
      gsap.from(
        [img.current, heading.current, parag.current, btn.current],
        0.75,
        { autoAlpha: 0, y: 30, stagger: 0.25 }
      )

      // paralax animation
    }, app)

    return () => ctx.revert();
  }, [])

  return (
    <header id='hero' className={styles.container}>
      {/* images */}
      <div className={styles.hero}>
        <div ref={bg} className={styles.bg}></div>
        <img ref={img} src={heroImg} className={styles.img} alt="beach waves" />
      </div>
      {/* contents */}
      <div className={`${global.container} ${styles.content}`}>
        <h1 ref={heading} className={`${global.title} ${global.light}`}>
          Unlock your potential. <br /> Live your best Life.
        </h1>
        <p ref={parag} className={`${global.paragraph} ${global.light}`}>
          There is so much more to health and wellness than meets the eye, Experience world-class health
          coaching and functional medicine services with our team of holistic wellness experts. Open to
          both members and non-members, discover how you can optimise your health and live well, at the
          touch of button.
        </p>
        <a ref={btn} href="/" className={`${global.button} ${global.light}`}>Book now</a>
      </div>
    </header>
  )
}

export default Header