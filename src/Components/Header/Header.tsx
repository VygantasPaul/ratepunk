/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import styles from "./Header.module.scss";
import Image from "next/image";
import MobileNav from "./MobileNav/MobileNav";
import DesktopNav from "./DesktopNav/DesktopNav";
import Hamburger from "./Hamburger/Hamburger";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.flex}>
          <Image
            src="/assets/logo.svg"
            alt="ratepunk Logo"
            width={120}
            height={24}
          />

          <Hamburger onClick={toggleMenu} />
        </div>

        {showMenu && <MobileNav />}
        <DesktopNav />
      </div>
    </header>
  );
};

export default Header;
