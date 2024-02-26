import React from "react";
import styles from "./Input.module.scss";
import Image from "next/image";
type TypeInput = {
  setValue: (value: string) => void;
  value: string;
  placeholder: string;
};
const Input: React.FC<TypeInput> = ({ value, setValue, placeholder }) => {
  return (
    <div className={styles.prepend}>
      <div className={styles.prepend_email}>
        <div className="prepend_email">
          <Image src="./assets/email.svg" height={50} width={20} alt="email" />
        </div>

        <input
          value={String(value || "")}
          onChange={(e) => setValue(e.target.value)}
          type="text"
          className={styles.email}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};

export default Input;
