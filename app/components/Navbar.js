import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <div className="flex justify-center items-center mt-7   ">
      <div className="   w-fit  rounded-lg  max-w-2xl h-16 bg-[#24173866] border-[2px] border-[#24173866] sm:rounded-full flex gap-5 justify-center items-center mb-6 px-4">
        <ReusableNav text="Home" Url="/" />
        <ReusableNav text="Projects" />
        <ReusableNav text="certificate" />
        <ReusableNav
          text="Resume"
          Url="https://taqdpudyhenvaibczyar.supabase.co/storage/v1/object/public/forme/Blue%20and%20Gray%20Simple%20Professional%20CV%20Resume%20(1).pdf"
        />
      </div>
    </div>
  );
}

const ReusableNav = ({ text, Url }) => {
  return (
    <Link
      href={Url || text}
      className="group/item relative cursor-pointer flex flex-col items-center"
    >
      <p className="text-white text-[10px] font-bold sm:text-lg ">{text}</p>
      <p className="invisible bg-white rounded-full w-[7px] h-[7px] absolute bottom-[-6px] left-[50%] transform -translate-x-1/2 group-hover/item:visible transition-all duration-300"></p>
    </Link>
  );
};

export default Navbar;
