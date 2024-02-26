import React from "react";
import styles from "./Content.module.scss";
import Form from "@/Components/Form/Form";
import Limits from "@/Components/Limits/Limits";
import ReferText from "@/Components/ReferText/ReferText";
import Step1 from "../Steps/Step1/Step1";
import Step2 from "../Steps/Step2/Step2";
import Step3 from "../Steps/Step3/Step3";
import { Noto_Sans } from "next/font/google";
const notosans = Noto_Sans({ subsets: ["latin"], weight: "400" });
const Content = () => {
  return (
    <div className={styles.container}>
      <div className={`${styles.content} ${notosans.className}`}>
        <div className={styles.column}>
          <div className={styles.inner}>
            <ReferText />
            <Form />
            <Limits />
          </div>
        </div>
        <div className={styles.column}>
          <Step1 />
          <Step2 />
          <Step3 />
        </div>
      </div>
    </div>
  );
};

export default Content;
