import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';

import global from '../../global.module.scss';
import styles from './Footer.module.scss';

import btnSubmit from '../../assets/logos/submit-button.png';

const Footer = () => {
  const app = useRef();
  const formRef = useRef();
  const navRef = useRef();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(formRef.current.children, 0.75, {
        autoAlpha: 0, y: 30, stagger: 0.25,
        scrollTrigger: {
          trigger: formRef.current,
          start: 'center bottom'
        }
      })

      gsap.from(navRef.current.children, 0.75, {
        autoAlpha: 0, y: 30, stagger: 0.25,
        scrollTrigger: {
          trigger: navRef.current,
          start: 'center bottom'
        }
      })
    }, app)
  
    return () => ctx.revert();
  }, [])

  return (
    <footer className={styles.container}>
      <div className={global.container}>
        <form ref={formRef}>
          <h2 className={`${global.title} ${global.light}`}>Stay Connected</h2>
          <p className={`${global.paragraph} ${global.xsm} ${global.light}`}>
            Let us share all you need to know about health and wellness straight
            to your inbox
          </p>
          <div>
            <input type="email" placeholder='Enter your email address' />
            <button onClick={e => e.preventDefault()}>
              <img src={btnSubmit} alt="" />
            </button>
          </div>
        </form>
        <nav>
          <ul ref={navRef}>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Faqs</a></li>
            <li><a href="#">Membership</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Events</a></li>
            <li><a href="#">Carrers</a></li>
            <li><a href="#">Terms & Conditions</a></li>
          </ul>
        </nav>
      </div>
    </footer>
  )
}

export default Footer