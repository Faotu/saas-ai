import Image from "next/image";
import React from "react";

import { MuseoModerno } from "next/font/google";
import Link from "next/link";
import { cn } from "../lib/utils";

const museo = MuseoModerno({
  weight: "700",
  subsets: ["latin"],
});

const Logo = () => {
  return (
    <Link href="/" className="flex flex-col items-center ">
      <Image
        src="/logo.svg"
        width={64}
        height={64}
        alt="logo"
        className="pt-4"
      />
      <h2 className={cn(museo.className, "text-xl")}>AI SaaS App</h2>
    </Link>
  );
};

export default Logo;
Logo;
