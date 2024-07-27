import Logo from "@/src/components/Logo";
import { CreditCard, History, WandSparkles } from "lucide-react";
import Link from "next/link";
import React from "react";

const menuList = [
  {
    name: "Magic Tools",
    icon: WandSparkles,
    path: "/dashboad",
  },
  {
    name: "Output History",
    icon: History,
    path: "/dashboad/history",
  },
  {
    name: "Upgrade",
    icon: CreditCard,
    path: "/dashboad/upgrade",
  },
];

const Sidebar = () => {
  return (
    <div className="p-5 bg-white h-[800px] flex flex-col">
      <Logo />
      <div className="mt10 h-max flex flex-col justify-between">
        {menuList.map((menu) => (
          <Link
            href={menu.path}
            key={menu.name}
            className="flex gap-2 mb-2 p-3 hover:bg-primary hover:text-white cursor-pointer rounded-lg items-center"
          >
            <menu.icon className="h-6 w-6"></menu.icon>
            <h2 className="text-lg">{menu.name}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
