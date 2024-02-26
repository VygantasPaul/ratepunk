import React from "react";
import Image from "next/image";
import styles from "./Step1.module.scss";
import { Noto_Sans } from "next/font/google";
const notosansBold = Noto_Sans({ subsets: ["latin"], weight: "600" });
const Step1 = () => {
  return (
    <div className={styles.step}>
      <div>
        <Image
          src="./assets/invite.svg"
          height={190}
          width={190}
          alt="invite"
        />
      </div>
      <div>
        <p className={`${styles.steptext} ${notosansBold.className}`}>Step 1</p>
        <h4 className={styles.stepheading}>INVITE FRIENDS</h4>
        <p className={styles.text}>
          Refer friends with your unique referral link
        </p>
      </div>
    </div>
  );
};

export default Step1;
