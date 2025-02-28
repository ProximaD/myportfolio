import styles from './HeroStyles.module.css';
import heroImg from '../../assets/hero-img.png';
import themeIcon from '../../assets/sun.svg'; 
import twitterIcon from '../../assets/twitter-light.svg';
import githubIcon from '../../assets/github-light.svg';
import linkedinIcon from '../../assets/linkedin-light.svg';

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
  <span>
    <a href="https://twitter.com/" target="_blank">
    <img src={twitterIcon} alt="Twitter icon" />
    </a>

    <a href="https://github.com/" target="_blank">
    <img src={githubIcon} alt="Github icon" />
    </a>

    <a href="https://linkedin.com/" target="_blank">
    <img src={linkedinIcon} alt="Linkedin icon" />
    </a>
  </span>
</div>
    </div>
  </section>;
}

export default Hero;