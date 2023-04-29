import Image from "next/image";
import styles from "../../styles/Skills.module.scss";
import HTML from "../../assets/skills/html.svg";
import CSS from "../../assets/skills/css.svg";
import JavaScript from "../../assets/skills/javascript.svg";
import React from "../../assets/skills/react.svg";
import MySQL from "../../assets/skills/mysql.svg";
import Sass from "../../assets/skills/sass.svg";
import Node from "../../assets/skills/node.svg";
import Jira from "../../assets/skills/jira.svg";
import Figma from "../../assets/skills/figma.svg";
import Github from "../../assets/skills/github.svg";
import SEO from "../../assets/skills/seo.svg";
import Analytics from "../../assets/skills/analytics.svg";
import BizDev from "../../assets/skills/business-dev.svg";
import Canva from "../../assets/skills/canva.svg";
import Copywriting from "../../assets/skills/copywriting.svg";
import GoogleAds from "../../assets/skills/google-ads.svg";
import GoogleAnalytics from "../../assets/skills/google-analytics.svg";
import GoogleTM from "../../assets/skills/google-tag-manager.svg";
import Hubspot from "../../assets/skills/hubspot.svg";
import Mailchimp from "../../assets/skills/mailchimp.svg";
import Salesforce from "../../assets/skills/salesforce.svg";
import Trello from "../../assets/skills/trello.svg";
import VideoEditing from "../../assets/skills/video-editing.svg";
import Wordpress from "../../assets/skills/wordpress.svg";

function Skills() {
  return (
    <section className={styles.skills} id="skills">
      <div className={styles.container}>
        <h2 className={styles.title}>SKILLS</h2>
        <div className={styles.desktopWrapper}>
          {/* <div className="skills__tablet-wrapper"> */}
          <div className={styles.mobileWrapper}>
            <div className={styles.itemWrapper}>
              <Image className={styles.item} src={HTML} alt="html" />
              <h4>HTML 5</h4>
            </div>
            <div className={styles.itemWrapper}>
              <Image className={styles.item} src={CSS} alt="css" />
              <h4>CSS 3</h4>
            </div>
            <div className={styles.itemWrapper}>
              <Image
                className={styles.item}
                src={JavaScript}
                alt="javascript"
              />
              <h4>JavaScript 5</h4>
            </div>
          </div>
          <div className={styles.mobileWrapper}>
            <Image className={styles.item} src={MySQL} alt="mysql" />
            <Image className={styles.item} src={Sass} alt="sass" />
            <Image className={styles.item} src={Node} alt="node" />
          </div>
          {/* </div> */}
          {/* <div className="skills__tablet-wrapper"> */}
          <div className={styles.mobileWrapper}>
            <div className={styles.itemWrapper}>
              <Image className={styles.item} src={React} alt="react" />
              <h4>React JS</h4>
            </div>

            <div className={styles.itemWrapper}>
              <Image className={styles.item} src={Wordpress} alt="wordpress" />
              <h4>Wordpress</h4>
            </div>
            <div className={styles.itemWrapper}>
              <Image className={styles.item} src={Github} alt="github" />
              <h4>Github</h4>
            </div>
          </div>
          <div className={styles.mobileWrapper}>
            {" "}
            <div className={styles.itemWrapper}>
              <Image className={styles.item} src={Figma} alt="figma" />
              <h4>Figma</h4>
            </div>{" "}
            <div className={styles.itemWrapper}>
              <Image
                className={styles.item}
                src={VideoEditing}
                alt="video editing"
              />
              <h4>Video Editing</h4>
            </div>
            <div className={styles.itemWrapper}>
              <Image className={styles.item} src={Canva} alt="canva" />
              <h4>Canva</h4>
            </div>{" "}
          </div>
          {/* </div> */}
        </div>
        <div className={styles.desktopWrapper}>
          {/* <div className="skills__tablet-wrapper"> */}
          <div className={styles.mobileWrapper}>
            {" "}
            <div className={styles.itemWrapper}>
              <Image className={styles.item} src={SEO} alt="seo" />
              <h4>SEO</h4>
            </div>
            <div className={styles.itemWrapper}>
              <Image
                className={styles.item}
                src={Copywriting}
                alt="copywriting"
              />
              <h4>Copywriting</h4>
            </div>
            <div className={styles.itemWrapper}>
              <Image
                className={styles.item}
                src={Analytics}
                alt="web analytics"
              />
              <h4>Web Analytics</h4>
            </div>
          </div>
          <div className={styles.mobileWrapper}>
            {" "}
            <div className={styles.itemWrapper}>
              <Image
                className={styles.item}
                src={GoogleTM}
                alt="google tag manager"
              />
              <h4>Tag Manager</h4>
            </div>
            <div className={styles.itemWrapper}>
              <Image
                className={styles.item}
                src={GoogleAnalytics}
                alt="Google Analytics"
              />
              <h4>GA 4</h4>
            </div>
            <div className={styles.itemWrapper}>
              <Image className={styles.item} src={GoogleAds} alt="google ads" />
              <h4>Google Ads</h4>
            </div>
            {/* </div> */}
          </div>

          {/* <div className="skills__tablet-wrapper"> */}
          <div className={styles.mobileWrapper}>
            {" "}
            <div className={styles.itemWrapper}>
              <Image className={styles.item} src={Hubspot} alt="hubspot" />
              <h4>Hubspot</h4>
            </div>{" "}
            <div className={styles.itemWrapper}>
              <Image
                className={styles.item}
                src={BizDev}
                alt="business development"
              />
              <h4>Biz Dev</h4>
            </div>
            <div className={styles.itemWrapper}>
              <Image
                className={styles.item}
                src={Salesforce}
                alt="salesforce"
              />
              <h4>Salesforce</h4>
            </div>
          </div>
          <div className={styles.mobileWrapper}>
            {" "}
            <div className={styles.itemWrapper}>
              <Image className={styles.item} src={Trello} alt="trello" />
              <h4>Trello</h4>
            </div>
            <div className={styles.itemWrapper}>
              <Image className={styles.item} src={Jira} alt="jira" />
              <h4>Jira</h4>
            </div>
            <div className={styles.itemWrapper}>
              <Image className={styles.item} src={Mailchimp} alt="Mailchimp" />
              <h4>Mailchimp</h4>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </section>
  );
}

export default Skills;
