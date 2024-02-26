import React from "react";
import Image from "next/image";
import styles from "./Step2.module.scss";
import { Noto_Sans } from "next/font/google";
const notosansBold = Noto_Sans({ subsets: ["latin"], weight: "600" });
const Step2 = () => {
  return (
    <div className={styles.step}>
      <div className={styles.order1}>
        <p className={`${styles.steptext} ${notosansBold.className}`}>Step 2</p>
        <h4 className={styles.stepheading}>COLLECT COINS</h4>
        <p className={styles.text}>
          Get 1 coin for each friend that installs our extension using your
          referral link.
        </p>
      </div>
      <div className={styles.order2}>
        <Image
          src="./assets/collect-coins.svg"
          height={190}
          width={190}
          alt="invite"
        />
      </div>
    </div>
  );
};

export default Step2;
