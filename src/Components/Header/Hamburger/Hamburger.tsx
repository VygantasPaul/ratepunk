import React, { useState } from "react";
import styles from "./Hamburger.module.scss";
type HamburgerType = {
  onClick: (isOpen: boolean) => void;
};
const Hamburger: React.FC<HamburgerType> = ({ onClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
    if (onClick) {
      onClick(!isOpen);
    }
  };
  return (
    <button
      className={`${styles.hamburgermenu} ${isOpen ? styles.close : ""}`}
      onClick={handleClick}
    ></button>
  );
};

export default Hamburger;
