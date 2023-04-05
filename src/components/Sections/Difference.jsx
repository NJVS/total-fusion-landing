import global from '../../global.module.scss';
import styles from './Sections.module.scss';

import wheelImg from '../../assets/images/potential-wheel.png';

const Difference = () => {
  return (
    <section id='difference' className={`${styles.container} ${styles.difference}`}>
      <div className={`${styles.difference_inner} ${global.container}`}>
        <div className={styles.header}>
          <h1 className={global.title}>Our Difference</h1>
          <p className={global.paragraph}>
            Beyond Total Fusion is a paradigm shift in healthcare, an innovative
            space focused on health optimisation and unlocking one's full potential.
          </p>
          <p className={global.paragraph}>
            We acieve this through a fusion of holistic,integrated services and products.
            They combine ancestral wisdom and modern science, to provide a comprehensive,
            tailored approach to health and wellbeing.
          </p>
        </div>
        <div className={styles.body}>
          <img src={wheelImg} alt="total fusion potential wheel" />
        </div>
      </div>
      <div className={styles.footer}>
        <div className={global.container}>
          <h2 className={global.title}>Book your Wellness Assessment</h2>
          <p className={global.paragraph}>
            When you a book a time with us, we will call to discuss your health goals
            and converns, underlying causes, areas for improvement and how we can
            help. Why wait any longer? Start living your best life today.
          </p>
          <a href="/" className={`${global.button} ${global.dark}`}>Book now</a>
        </div>
      </div>
    </section>
  )
}

export default Difference