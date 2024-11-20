"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import Link from "next/link";
import ButtonSort from "../components/ButtonSort";
import { DataCard } from "../data";

function Gf({ filter }) {
  console.log(filter);

  const sortData = DataCard.filter((card) => card.type === filter);

  return (
    <div className="flex  flex-col  gap-20 shadow-md  shadow-[#7d5692] mx-2  sm:mx-10  p-8  ">
      <ButtonSort />
      <div className=" relative flex  gap-8  flex-wrap  ">
        {sortData.map((card) => (
          <>
            <Box
              imGweb={card.img}
              Demo={card.Demo}
              Code={card.Code}
              type={card.type}
              icons={card.icons}
            />
          </>
        ))}
      </div>
    </div>
  );
}

const Box = ({ imGweb, Demo, Code, type, icons }) => {
  return (
    <div className="max-w-sm mx-auto bg-transparent rounded-xl shadow-md overflow-hidden  h-fit    shadow-[#7d5692]">
      <motion.div
        className="flex flex-col items-center  p-5  "
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div className=" relative w-full h-48">
          <Image
            fill
            className=" w-full object-cover "
            alt="jj"
            src={imGweb}
            quality={100}
          />
        </div>
        <div className="p-8 text-center">
          <h1 className="block mt-1 text-lg leading-tight font-medium text-white hover:underline cursor-pointer">
            Card Title
          </h1>
          <div className="mt-2 text-gray-400 flex justify-center items-center  flex-wrap gap-4">
            {icons?.map((icon) => icon)}
          </div>

          <div className=" flex gap-5 justify-center items-center">
            <Link href={`${Demo}`}>
              <motion.button
                className="mt-4 text-white px-4 py-2 rounded bg-[#7d5692]"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                Demo
              </motion.button>
            </Link>
            <Link href={`${Code}`}>
              <motion.button
                className="mt-4 text-white px-4 py-2 rounded bg-[#7d5692]"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                Code
              </motion.button>
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Gf;
