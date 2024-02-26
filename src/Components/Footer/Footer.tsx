import React from "react";
import styles from "./Footer.module.scss";
import FirstColumn from "./FirstColumn/FirstColumn";
import SecondColumn from "./SecondColumn/SecondColumn";
import ThirdColumn from "./ThirdColumn/ThirdColumn";
import LogoColumn from "./LogoColumn/LogoColumn";
import QuickLinks from "./QuickLinks/QuickLinks";
import Contact from "./Contact/Contact";
import SocialLinks from "./SocialLinks/SocialLinks";
const Footer = () => {
  return (
    <div className={styles.footewrapp}>
      <div className={styles.footer}>
        <div className={styles.column}>
          <FirstColumn />
        </div>
        <div className={styles.column}>
          <SecondColumn />
        </div>
        <div className={styles.column}>
          <ThirdColumn />
        </div>
      </div>
      <div className={styles.footersecond}>
        <div className={styles.container}>
          <div className={styles.columntwo}>
            <LogoColumn />
          </div>
          <div className={styles.column}>
            <QuickLinks />
          </div>
          <div className={styles.column}>
            <Contact />

            <div className={styles.social}>
              <SocialLinks />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
