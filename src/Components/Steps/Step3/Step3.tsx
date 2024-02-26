import React from "react";
import Image from "next/image";
import styles from "./Step3.module.scss";
import { Noto_Sans } from "next/font/google";
const notosansBold = Noto_Sans({ subsets: ["latin"], weight: "600" });
const Step3 = () => {
  return (
    <div className={styles.step}>
      <div>
        <Image
          src="./assets/voucher.svg"
          height={190}
          width={190}
          alt="invite"
        />
      </div>
      <div>
        <p className={`${styles.steptext} ${notosansBold.className}`}>Step 3</p>
        <h4 className={styles.stepheading}>GET VOUCHER</h4>
        <p className={styles.text}>
          Redeem for a $20 hotel booking voucher once you collect 20 coins.
        </p>
      </div>
    </div>
  );
};

export default Step3;
