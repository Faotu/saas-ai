import Auth from "@/src/components/Auth";
import { SearchIcon } from "lucide-react";
import React from "react";

const SearchDashboard = () => {
  return (
    <div className="mx-5 py-2">
      <div className="flex  md:flex-row gap-2 mt-5 py-6 px-4 bg-white">
        <div className="flex gap-2 items-center p-2 border rounded-full bg-white w-full md:w-[20%]">
          <SearchIcon />
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none text-black"
          />
        </div>
        <div className="ml-auto">
          <Auth />
        </div>
      </div>
    </div>
  );
};

export default SearchDashboard;
