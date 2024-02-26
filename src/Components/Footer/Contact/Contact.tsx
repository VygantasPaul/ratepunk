import React from "react";
import Image from "next/image";
import styles from "./Contact.module.scss";
const Contact = () => {
  return (
    <>
      <h2>CONTACT</h2>
      <p>
        <a href="mailto:hi@ratepunk.com">
          <span className={styles.emailwrap}>
            <Image
              src="./assets/email-footer.svg"
              height={20}
              width={20}
              className={styles.email}
              alt=""
            ></Image>
            hi@ratepunk.com
          </span>
        </a>
      </p>
    </>
  );
};

export default Contact;
