import React from "react";
import Image from "next/image";
import styles from "./SocialLinks.module.scss";
const SocialLinks = () => {
  return (
    <div>
      <h2>SOCIAL</h2>
      <div className={styles.socialicons}>
        <a href="https://www.instagram.com" className={styles.icon}>
          <Image
            src="./assets/instagram.svg"
            height={20}
            width={20}
            alt="instagram"
          ></Image>
        </a>
        <a href="https://www.facebook.com" className={styles.icon}>
          <Image
            src="./assets/facebook.svg"
            height={10}
            width={10}
            alt="facebook"
          ></Image>
        </a>
        <a href="https://www.linkedin.com" className={styles.icon}>
          <Image
            src="./assets/linkedin.svg"
            height={20}
            width={20}
            alt="linkedin"
          ></Image>
        </a>
        <a href="https://www.twitter.com" className={styles.icon}>
          <Image
            src="./assets/twitter.svg"
            height={18}
            width={18}
            alt="twitter"
          ></Image>
        </a>
        <a href="https://www.tiktok.com" className={styles.icon}>
          <Image
            src="./assets/tiktok.svg"
            height={15}
            width={15}
            alt=""
          ></Image>
        </a>
      </div>
    </div>
  );
};

export default SocialLinks;
