import React, { useState, useEffect } from "react";
import styles from "./AllertSuccess.module.scss";
import Image from "next/image";
type AllertSuccessType = {
  alert: string | null;
  setAlert: React.Dispatch<React.SetStateAction<string | null>>;
};
const AllertSuccess: React.FC<AllertSuccessType> = ({ alert, setAlert }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(null);
    }, 3000);

    return () => {
      clearTimeout(timeout);
    };
  }, [alert, setAlert]);
  return alert ? (
    <div className={styles.success}>
      <Image src="/assets/success.svg" height={50} width={50} alt="Success" />{" "}
      <div className={styles.successtext}>{alert}</div>
    </div>
  ) : null;
};

export default AllertSuccess;
