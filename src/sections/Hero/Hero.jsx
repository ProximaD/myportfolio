import styles from './HeroStyles.module.css';
import heroImg from '../../assets/hero-img.png';
import themeIcon from '../../assets/sun.svg';

function Hero() {
  return <section id="hero">
    <div className={styles.colorModeContainer}>
      <img 
      className={styles.hero} 
      src={heroImg} a
      lt="Profile picture of Sandra Lavenda" 
      />

      <img 
      className={styles.colorMode} 
      src={themeIcon} 
      alt="Color mode icon" 
      />

    </div>
  </section>;
}

export default Hero;