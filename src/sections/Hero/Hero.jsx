import styles from './HeroStyles.module.css';
import heroImg from '../../assets/hero-img.png';
import themeIcon from '../../assets/sun.svg';

function Hero() {
  return <section id="hero" className={styles.container}>
    <div className={styles.colorModeContainer}>
      <img 
      className={styles.hero} 
      src={heroImg} 
      alt="Profile picture of Sandra Lavenda" 
      />

      <img 
      className={styles.colorMode} 
      src={themeIcon} 
      alt="Color mode icon" 
      />

<div className={styles.info}>
  <h1>Sandra <br /> Lavenda</h1>
  <h2>Web Developer</h2>
</div>
    </div>
  </section>;
}

export default Hero;