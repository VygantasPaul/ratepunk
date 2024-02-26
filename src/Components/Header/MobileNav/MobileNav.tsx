import React from "react";
import styles from "./MobileNav.module.scss";
import { Noto_Sans } from "next/font/google";
const notosans = Noto_Sans({ subsets: ["latin"], weight: "400" });
const MobileNav = () => {
  return (
    <nav className={`${styles.navmobile} ${notosans.className}`}>
      <ul>
        <li>
          <a href="">Chrome Extension</a>
        </li>
        <li>
          <a href="">Price comparison</a>
        </li>
        <li>
          <a href="">Blog</a>
        </li>
      </ul>
    </nav>
  );
};

export default MobileNav;
