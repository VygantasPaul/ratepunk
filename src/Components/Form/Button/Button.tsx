import React from "react";
import styles from "./Button.module.scss";
import { Noto_Sans } from "next/font/google";
const notosansBold = Noto_Sans({ subsets: ["latin"], weight: "700" });
type TypeSubmit = {
  onClick: () => void;

  text: string;
};
const Submit: React.FC<TypeSubmit> = ({ onClick, text }) => {
  return (
    <div>
      <button
        onClick={onClick}
        type="button"
        className={`${styles.button} ${notosansBold.className}`}
      >
        {text}
      </button>
    </div>
  );
};

export default Submit;
