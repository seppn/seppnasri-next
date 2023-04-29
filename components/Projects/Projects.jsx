import styles from "../../styles/Projects.module.scss";
import Carousel from "better-react-carousel";
import LangulifeEvents from "../../assets/images/langulife-events.png";
import Techinto from "../../assets/images/techinto.png";
import Tennis from "../../assets/images/tennis.png";
import ChainIcon from "../../assets/icons/chain.svg";
import GitHubIcon from "../../assets/icons/github.svg";

function Projects() {
  return (
    <section className={styles} id="projects">
      <div className={styles.container}>
        <h2 className={styles.title}>WEB PROJECTS</h2>
        <Carousel
          cols={3}
          rows={1}
          gap={15}
          responsiveLayout={[{ breakpoint: 768, cols: 1, rows: 1, gap: 15 }]}
        >
          <Carousel.Item>
            <div className={styles.itemWrapper}>
              <image
                src={LangulifeEvents}
                alt="langulife events"
                className={styles.image}
              />
              <h3 className={styles.header}>Langulife Events</h3>
              <p className={styles.summary}>
                A promotional and ticket sales website for a popular meetup
                community which holds regular language exchange social events
              </p>
              <h5 className={styles.tech}>
                <span className={styles.techTitle}>Tech stack:</span> HTML,
                JavaScript, SASS, React
              </h5>
              <div className={styles.linkWrapper}>
                <div className={styles.linkItemWrapper}>
                  <image
                    src={ChainIcon}
                    className={styles.icon}
                    alt="chain icon"
                  />
                  <a
                    href="https://events.langulife.com"
                    className={styles.link}
                  >
                    Live Preview
                  </a>
                </div>
                <div className={styles.linkItemWrapper}>
                  <image
                    src={GitHubIcon}
                    className={styles.icon}
                    alt="github icon"
                  />
                  <a
                    href="https://github.com/seppn/langulife-events-frontend"
                    className={styles.link}
                  >
                    View Code
                  </a>
                </div>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className={styles.itemWrapper}>
              <image
                src={Techinto}
                alt="techinto logo"
                className={styles.image}
              />
              <h3 className={styles.header}>TechinTO</h3>
              <p className={styles.summary}>
                A promotional website for Torontos most popular tech community
                event which connects tech-workers and enthusiasts.{" "}
              </p>
              <h5 className={styles.tech}>
                <span className={styles.techTitle}>Tech stack:</span> HTML,
                JavaScript, SASS, React
              </h5>
              <div className={styles.linkWrapper}>
                <div className={styles.linkItemWrapper}>
                  <image
                    src={ChainIcon}
                    className={styles.icon}
                    alt="chain icon"
                  />
                  <a href="https://techinto.ca" className={styles.link}>
                    Live Preview
                  </a>
                </div>
                <div className={styles.linkItemWrapper}>
                  <image
                    src={GitHubIcon}
                    className={styles.icon}
                    alt="github icon"
                  />
                  <a
                    href="https://github.com/seppn/techinto"
                    className={styles.link}
                  >
                    View Code
                  </a>
                </div>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className={styles.itemWrapper}>
              <image
                src={Tennis}
                alt="tennis bootcamp homepage"
                className={styles.image}
              />
              <h3 className={styles.header}>Tennis Bootcamp</h3>
              <p className={styles.summary}>
                A promotional website for Tennis Bootcamp course program
                available in summer of 2023.{" "}
                <span className={styles.status}>COMING SOON</span>
              </p>
              <h5 className={styles.tech}>
                <span className={styles.techTitle}>Tech stack:</span>{" "}
                HTML,JavaScript, SASS, React, Supabase
              </h5>
              <div className={styles.linkWrapper}>
                <div className={styles.linkItemWrapper}>
                  <image
                    src={ChainIcon}
                    className={styles.icon}
                    alt="chain icon"
                  />
                  <a href="https://tennisbootcamp.ca" className={styles.link}>
                    Coming Soon
                  </a>
                </div>
                <div className={styles.linkItemWrapper}>
                  <image
                    src={GitHubIcon}
                    className={styles.icon}
                    alt="github icon"
                  />
                  <a
                    href="https://github.com/seppn/tennis-bootcamp"
                    className={styles.link}
                  >
                    View Code
                  </a>
                </div>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </section>
  );
}

export default Projects;
