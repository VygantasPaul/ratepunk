import React from "react";
import styles from "./QuickLinks.module.scss";
const QuickLinks = () => {
  return (
    <div className={styles.quicklinkswrap}>
      <h2>QUICK LINKS</h2>
      <ul>
        <li>
          <a href="">Price Comparison</a>
        </li>
        <li>
          <a href="">Chrome Extension</a>
        </li>
        <li>
          <a href="">How It Works</a>
        </li>
        <li>
          <a href="">Ratepunk Blog</a>
        </li>
        <li>
          <a href="">Privacy Policy</a>
        </li>
      </ul>
    </div>
  );
};

export default QuickLinks;
