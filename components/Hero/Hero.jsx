import Image from "next/image";
import styles from "../../styles/Hero.module.scss";
import Sepp from "../../assets/images/sepp.png";
import LetterIcon from "../../assets/icons/letter.svg";
import Typewriter from "typewriter-effect";

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.tabletContainer}>
          <div className={styles.textWrapper}>
            <h1 className={styles.title}>
              <Typewriter
                options={{
                  strings: ["Hello, I am Sepp Nasri"],
                  autoStart: true,
                  loop: true,
                  pauseFor: 455500,
                }}
              />
            </h1>

            <h2 className={styles.subtitle}>
              <Typewriter
                options={{
                  wrapperClassName: styles.subtitle,
                  cursorClassName: styles.subtitle,
                  delay: 200,
                  strings: [
                    "A Product Manager",
                    "A Digital Strategist",
                    "A Casual Writer",
                    "A Front-End Enthusiast",
                    "A Polyglot",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h2>

            <p className={styles.descriptionTablet}>
              Love bringing complex ideas, plans and designs to life.
            </p>
            <a
              className={styles.emailWrapperTablet}
              href="mailto:seppnasri@gmail.com"
              id="email_cta_desktop"
            >
              <Image
                src={LetterIcon}
                alt="letter icon"
                className={styles.letter}
              />
              <p className={styles.email}>seppnasri@gmail.com</p>
            </a>
          </div>
          <div className={styles.imageWrapper}>
            <Image
              className={styles.image}
              src={Sepp}
              alt="sepp looking somewhere"
            />
            <p className={styles.description}>
              Love bringing complex and dynamic ideas and designs to life.
            </p>
          </div>
        </div>
        <a
          className={styles.emailWrapper}
          href="mailto:seppnasri@gmail.com"
          id="email_cta_mobile"
        >
          <Image src={LetterIcon} alt="letter icon" className={styles.letter} />
          <p className={styles.email}>seppnasri@gmail.com</p>
        </a>
      </div>
    </section>
  );
}

export default Hero;
