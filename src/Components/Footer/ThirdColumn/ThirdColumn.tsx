import React from "react";
import styles from "./ThirdColumn.module.scss";
const ThirdColumn = () => {
  return (
    <>
      <div className={styles.stars}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div>
        <p>Chrome Store reviews</p>
      </div>
    </>
  );
};

export default ThirdColumn;
