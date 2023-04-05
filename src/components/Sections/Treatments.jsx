import { useState, useEffect } from 'react';
import global from '../../global.module.scss';
import Carousel from '../Carousel/Carousel';
import styles from './Sections.module.scss';

const Treatments = () => {
  // responsive carousel options
  const [windowDimension, setWindowDimension] = useState(window.innerWidth);
  
  const setColHandler = () => {
    if (windowDimension > 975) {
      return 3.5
    } else if (windowDimension > 545) {
      return 2.5
    } else {
      return 1.5
    }
  }

  const setGapHandler = () => {
    if (windowDimension > 975) {
      return 40
    } else {
      return 20
    }
  }

  const setRowHandler = () => {
    if (windowDimension > 425) {
      return 2
    } else {
      return 1
    }
  }

  const [col, setCol] = useState((windowDimension > 975) ? 3.5 : (windowDimension > 545) ? 2.5 : 1.5);
  const [row, setRow] = useState((windowDimension > 975) ? 40 : 20);
  const [gap, setGap] = useState((windowDimension > 425) ? 2 : 1);

  useEffect(() => {
    window.addEventListener('resize', () => {
      setWindowDimension(window.innerWidth);
    })
  }, []);

  useEffect(() => {
    setCol((windowDimension > 975) ? 3.5 : (windowDimension > 545) ? 2.5 : 1.5);
    setGap((windowDimension > 975) ? 40 : 20);
    setRow((windowDimension > 425) ? 2 : 1);
    
  }, [windowDimension])


  return (
    <section id='treatments' className={`${styles.container} ${styles.treatments}`}>
      <div className={styles.header}>
        <h1 className={global.title}>Treatments</h1>
        <p className={global.paragraph}>
          There is nothing ordinary about what we do at Total Fusion. We offer a unique range of
          treatments that can transform your health at a much deeper level. For best results,
          take the Comprehensive Wellness Assessment prior to selecting your treatments.
        </p>
      </div>
      <div className={styles.body}>
        <Carousel col={col} row={row} gap={gap} />
      </div>
      <div id='packages' className={styles.footer}>
        <div className={global.container}>
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