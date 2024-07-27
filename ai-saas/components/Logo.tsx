import Image from "next/image";
import React from "react";

import { MuseoModerno } from "next/font/google";

const Museo = MuseoModerno({
  weight: "700",
  subsets: ["latin"],
});

const Logo = () => {
  return (
    <div>
      <Image
        src="/logo.svg"
        width={64}
        height={64}
        alt="logo"
        className="pt-4"
      />
      <h2>Magic Social</h2>
    </div>
  );
};

export default Logo;
Logo;
