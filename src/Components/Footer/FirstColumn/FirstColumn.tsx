import React from "react";
import Image from "next/image";
import { Noto_Sans } from "next/font/google";
const notosansBold = Noto_Sans({ subsets: ["latin"], weight: "700" });
const FirstColumn = () => {
  return (
    <>
      <Image src="./assets/chrome.svg" height={70} width={70} alt=""></Image>

      <a href="https://chromewebstore.google.com/">
        <p>available in the</p>
        <p className={notosansBold.className}>chrome web store</p>
      </a>
    </>
  );
};

export default FirstColumn;