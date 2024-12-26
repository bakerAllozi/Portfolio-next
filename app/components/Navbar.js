import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <div className="flex justify-center items-center mt-7">
      <div className="w-fit rounded-lg max-w-2xl h-16 bg-gradient-to-r from-purple-700 via-purple-900 to-black shadow-lg sm:rounded-full flex gap-8 justify-center items-center mb-6 px-6 border-[2px] border-purple-800">
        <ReusableNav text="Home" Url="/" />
        <ReusableNav text="Projects" Url="/Projects" />
        <ReusableNav text="Certificate" Url="/certificate" />
      </div>
    </div>
  );
}

const ReusableNav = ({ text, Url }) => {
  return (
    <Link
      href={Url || "/"}
      className="group/item relative cursor-pointer flex flex-col items-center"
    >
      <p className="text-white text-[10px] font-bold sm:text-lg group-hover/item:text-purple-400 transition-all duration-300">
        {text}
      </p>
      <p className="invisible bg-gradient-to-r from-purple-400 to-pink-500 rounded-full w-[7px] h-[7px] absolute bottom-[-6px] left-[50%] transform -translate-x-1/2 group-hover/item:visible transition-all duration-300"></p>
    </Link>
  );
};

export default Navbar;
