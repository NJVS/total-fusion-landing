import global from '../../global.module.scss';
import styles from './Header.module.scss';

import heroImg from '../../assets/images/hero-img.jpg'

const Header = () => {
  return (
    <header id='hero' className={styles.container}>
      {/* images */}
      <div className={styles.hero}>
        <div className={styles.bg}></div>
        <img src={heroImg} className={styles.img} alt="beach waves" />
      </div>
      {/* contents */}
      <div className={`${global.container} ${styles.content}`}>
        <h1 className={`${global.title} ${global.light}`}>
          Unlock your potential. <br /> Live your best Life.
        </h1>
        <p className={`${global.paragraph} ${global.light}`}>
          There is so much more to health and wellness than meets the eye, Experience world-class health 
          coaching and functional medicine services with our team of holistic wellness experts. Open to 
          both members and non-members, discover how you can optimise your health and live well, at the 
          touch of button.
        </p>
        <a href="/" className={`${global.button} ${global.light}`}>Book now</a>
      </div>
    </header>
  )
}

export default Header