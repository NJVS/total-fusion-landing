import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import global from '../../global.module.scss';
import Carousel from '../Carousel/Carousel';
import styles from './Sections.module.scss';

const Treatments = () => {
  const app = useRef();
  const container1 = useRef();
  const container2 = useRef();
  const heading1 = useRef();
  const heading2 = useRef();
  const heading3 = useRef();
  const paragraph1 = useRef();
  const paragraph2 = useRef();
  const button = useRef();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {

      gsap.from(container1.current.children, 0.75, {
        autoAlpha: 0, y: 30, stagger: 0.25,
        scrollTrigger: {
          trigger: container1.current,
          start: 'bottom bottom',
        }
      });

      gsap.from(container2.current.children, 0.75, {
        autoAlpha: 0, y: 30, stagger: 0.25,
        scrollTrigger: {
          trigger: container2.current,
          start: 'bottom bottom'
        }
      })

    }, app);

    return () => ctx.revert();
  }, [])

  return (
    <section id='treatments' className={`${styles.container} ${styles.treatments}`}>
      <div ref={container1} className={styles.header}>
        <h1 className={global.title}>Treatments</h1>
        <p className={global.paragraph}>
          There is nothing ordinary about what we do at Total Fusion. We offer a unique range of
          treatments that can transform your health at a much deeper level. For best results,
          take the Comprehensive Wellness Assessment prior to selecting your treatments.
        </p>
      </div>
      <div className={styles.body}>
        <Carousel />
      </div>
      <div id='packages' className={styles.footer}>
        <div ref={container2} className={global.container}>
          <h2 className={global.title}>Value Packages</h2>
          <div>
            <p className={global.paragraph}>
              To experience a combination or treatments, we offer packages valued from $100 to $1000
              for your treatments of choice.
            </p>
            <h3 className={global.title}>
              From $100 to $1,000
            </h3>
          </div>
          <a href="/" className={`${global.button} ${global.dark}`}>View full menu here</a>
        </div>
      </div>
    </section>
  )
}

export default Treatments