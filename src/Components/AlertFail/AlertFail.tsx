import React, { useEffect } from "react";
import styles from "./AlertFail.module.scss";

type AllertFailType = {
  alert: string | null;
  setAlert: React.Dispatch<React.SetStateAction<string | null>>;
};

const AllertFail: React.FC<AllertFailType> = ({ alert, setAlert }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(null);
    }, 3000);

    return () => {
      clearTimeout(timeout);
    };
  }, [alert, setAlert]);
  return alert ? (
    <div className={styles.fail}>
      <div className={styles.failtext}>{alert}</div>
    </div>
  ) : null;
};

export default AllertFail;
