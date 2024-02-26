import React from "react";
import Image from "next/image";
import styles from "./LogoColumn.module.scss";
const LogoColomn = () => {
  return (
    <>
      <Image
        src="/assets/logo.svg"
        alt="ratepunk Logo"
        width={120}
        height={24}
      />
      <div className={styles.description}>
        <p>
          Ratepunk compares hotel room prices across the major online travel
          agencies. When you search for a room, Ratepunk extension scans the top
          booking sites and runs a price comparison, so you can be confident in
          knowing you’re getting the best deal!
        </p>
      </div>
      <div className={styles.copyrights}>
        <p>© 2021 Ratepunk. All Rights Reserved.</p>
      </div>
    </>
  );
};

export default LogoColomn;
