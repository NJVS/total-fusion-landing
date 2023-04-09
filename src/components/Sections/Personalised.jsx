import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';

import global from '../../global.module.scss';
import styles from './Sections.module.scss';

import { assess } from '../../data/assess';

const Personalised = () => {
  const app = useRef();
  const headerRef = useRef();
  const bodyRef = useRef();
  const footerRef = useRef();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(Array.from(headerRef.current.children), 0.75, {
        autoAlpha: 0, y: 30, stagger: 0.25,
        scrollTrigger: {
          trigger: headerRef.current,
          start: 'center bottom',
        }
      })

      gsap.from(Array.from(bodyRef.current.children), 0.75, {
        autoAlpha: 0, y: 30, stagger: 0.25,
        scrollTrigger: {
          trigger: bodyRef.current,
          start: '25% bottom',
        }
      })

      gsap.from(footerRef.current.querySelectorAll('*'), 0.75, {
        autoAlpha: 0, y: 30, stagger: 0.25,
        scrollTrigger: {
          trigger: footerRef.current,
          start: '30px bottom',
        }
      })
    }, app)

    return () => ctx.revert();
  }, []);

  return (
    <section id='services' className={`${styles.container} ${styles.personalised}`}>
      <div ref={headerRef} className={`${styles.header} ${global.container}`}>
        <h1 className={global.title}>Understand your body</h1>
        <p className={global.paragraph} style={{ maxWidth: '980px' }}>
          Our Comprehensive Wellness Assessment will help you and our team to better
          understand your body, genetics, medical history, and lifestyle. With this
          information, we can help you work on range of issues, from stress to nutrion
          to general wellbeing.
        </p>
        <p className={global.paragraph}>
          Let us help you tailor a health program that your body truly needs.
        </p>
        <a href="/" className={`${global.button} ${global.dark}`}>Book now</a>
      </div>
      <div ref={bodyRef} className={`${styles.body}`}>
        <Body />
      </div>
      <div className={styles.footer}>
        <div ref={footerRef} className={global.container}>
          <h2 className={`${global.title} ${global.light}`}>We guarantee</h2>
          <div>
            <h3 className={`${global.title} ${global.light}`}>Secure Medical Platform</h3>
            <h3 className={`${global.title} ${global.light}`}>Complete Patient Confidentiality</h3>
            <h3 className={`${global.title} ${global.light}`}>Convenient Online Process</h3>
            <h3 className={`${global.title} ${global.light}`}>Frequent Monitoring and Support</h3>
          </div>
        </div>
      </div>
    </section>
  )
}

const Body = () => {
  return (
    <>
      <div className={styles.img}>
        <div></div>
      </div>
      <div className={styles.content}>
        <article>
          <h3 className={global.title}>Prevention is better than cure</h3>
          <p className={`${global.paragraph} ${global.xsm}`}>
            Research has shown that the best way to enhance wellness and longevity is to prolong
            good health, before you develop a disease - be it from your genetic makeup, lifestyle
            choices, or old age. Even for individuals with strong genetc longevity, life expectancy
            is compromised once a chronic disease occurs.
          </p>
          <p className={`${global.paragraph} ${global.xsm}`}>
            The best way to live a long, happy life is to PREVENT disease for as long as possible.
            It is in a way, the antithesis of the current healthcare model, which is to treat disease
            symptoms when they appear.
          </p>
          <p className={`${global.paragraph} ${global.xsm}`}>
            It is why we our holistic and complete approach considers all factors and every perspective.
            As a result, we optimise your health and performance helping you to live your best life.
          </p>
        </article>
        <article>
          <h3 className={global.title}>What we assess</h3>
          <ul>
            {assess.map((item, index) => (
              <li key={index}>
                <img src={item.img} />
                <h4 className={global.title}>{item.title}</h4>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </>
  )
}

export default Personalised