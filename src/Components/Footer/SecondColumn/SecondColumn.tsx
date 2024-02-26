import React from "react";
import Image from "next/image";
import { Noto_Sans } from "next/font/google";
const notosansBold = Noto_Sans({ subsets: ["latin"], weight: "700" });
const SecondColumn = () => {
  return (
    <>
      <Image
        src="./assets/apple.svg"
        height={70}
        width={70}
        alt="chrome"
      ></Image>

      <a href="https://apps.apple.com/app/ratepunk/id1607823726">
        <p>available in the</p>
        <p className={notosansBold.className}>apple app store</p>
      </a>
    </>
  );
};

export default SecondColumn;
