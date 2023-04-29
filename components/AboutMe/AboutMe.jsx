import Image from "next/image";

import styles from "../../styles/AboutMe.module.scss";
import AboutSepp from "../../assets/images/about.png";
import CareerStory from "../../assets/images/career.png";
import Hobbies from "../../assets/images/hobbies.png";
import Passion from "../../assets/images/passion.png";

function AboutMe() {
  return (
    <section className={styles.about} id="about">
      <div className={styles.container}>
        <h2 className={styles.title}>ABOUT ME</h2>
        <div className={styles.itemsWrapper}>
          <div className={styles.item}>
            <div className={styles.question}>
              Q: How would you describe yourself and where are you from?
            </div>

            <p className={styles.answer}>
              I am a curious soul in this chaotic world; fascinated by
              languages, human psychology and the world around us. I am Persian
              and{" "}
              <span className={styles.blue}>
                {" "}
                Ive lived in more than 5 countries (red pins)
              </span>{" "}
              and have visited over 30 countries across four continents.
            </p>
            <div className={styles.imageWrapper}>
              <Image
                className={styles.image}
                src={AboutSepp}
                alt="sepp and world map"
              />
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.question}>
              Q: How did you end up in Tech?
            </div>
            <p className={styles.answer}>
              After years of working in the tourism indusry, a certain pandemic
              happened and everything changed. I pivoted to tech. My fascination
              about the industry grew as I learnt more and more about everything
              from design, to digital marketing, SEO and of course development.{" "}
              <span className={styles.blue}>
                I love to bring ideas to life, so the choice was easy.
              </span>
            </p>{" "}
            <div className={styles.imageWrapper}>
              <Image
                className={styles.image}
                src={CareerStory}
                alt="career path"
              />
            </div>
          </div>
        </div>
        <div className={styles.itemsWrapper}>
          <div className={styles.item}>
            <div className={styles.question}>
              Q: What do you like to do in your spare time?
            </div>

            <p className={styles.answer}>
              In my spare time, I enjoy learning human languages{" "}
              <span className={styles.blue}>
                (already speak English, Persian, Russian, Polish and some
                Spanish)
              </span>
              , connecting with nature and playing chess and violin.I adore
              reading. Youll find lots of Haruki Murakami books in my library.
            </p>
            <div className={styles.imageWrapper}>
              <Image
                className={styles.image}
                src={Hobbies}
                alt="chess violin reading languages"
              />
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.question}>
              Q: What makes you happy in life?
            </div>

            <p className={styles.answer}>
              Besides health and happiness of my loved ones, of course, I really
              I love bringing people together. Thats why{" "}
              <span className={styles.answer}>
                I run and manage two popular meetup communities with regular
                in-person events in Toronto.
              </span>
              When People thank me for organizing the gathering and tell me
              stories of the wonderful people they met or the great time they
              had, thats true joy.
            </p>
            <div className={styles.imageWrapper}>
              <Image
                className={styles.image}
                src={Passion}
                alt="happy people at an event"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
