import React, { useState } from "react";
import Button from "./Button/Button";
import axios from "axios";
import { useRouter } from "next/router";
import Input from "./Input/Input";
import AllertFail from "../AlertFail/AlertFail";
import AllertSuccess from "../AllertSuccess/AllertSuccess";
const Form = () => {
  const [email, setEmail] = useState<string>("");
  const [failAlert, setFailAlert] = useState<string | null>(null);
  const [successAlert, setSuccessAlert] = useState<string | null>(null);
  const router = useRouter();
  const checkValidation = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      setFailAlert("Please fill input");
      return false;
    } else if (!emailRegex.test(email)) {
      setFailAlert("Please enter correct email format");
      return false;
    } else {
      setSuccessAlert("Email added successfully!");
      return true;
    }
  };
  const onAddEmail = async () => {
    try {
      const isValid = checkValidation();
      if (isValid) {
        const newEmail = {
          email: email,
        };

        const response = await axios.post(
          "https://ccac2bfa277e4afab01f2b2abb76806e.api.mockbin.io/",
          newEmail,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (response.status === 200 || response.status === 201) {
          setTimeout(() => {
            router.push("/");
          }, 1000);
        } else {
          console.error("Failed to add email. Server returned:", response);
        }
      }
    } catch (error) {
      console.error("Error adding email:", error);
    }
  };

  return (
    <form>
      <AllertFail alert={failAlert} setAlert={setFailAlert} />
      <AllertSuccess alert={successAlert} setAlert={setSuccessAlert} />
      <Input
        placeholder="Enter your email address"
        value={email}
        setValue={setEmail}
      />
      <Button onClick={onAddEmail} text="Get Referral Link" />
    </form>
  );
};

export default Form;
