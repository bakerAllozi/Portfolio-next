"use client";
import { motion } from "framer-motion";

const RIcon = ({ iconColor, delayIcon, icon, icon1 = true }) => {
  return (
    <>
      {icon1 ? (
        <motion.li
          className=" border-[1px] border-[#7d5692] rounded-md w-[120px] h-[120px] text-[60px]  bg-transparent  flex justify-center items-center p-3 shadow-md  shadow-[#7d5692]"
          animate={{
            color: [iconColor, "#aaa", iconColor, iconColor, "#aaa", iconColor],
          }}
          transition={{
            duration: 0.5,
            delay: delayIcon,
            repeat: Infinity,
            repeatType: "loop",
            repeatDelay: 1,
          }}
        >
          {icon}
        </motion.li>
      ) : (
        <motion.li
          className="   rounded-md  text-[8vw]   sm:text-[7vw] md:text-[5vw]  bg-transparent  flex justify-center items-center p-3     "
          animate={{
            color: [iconColor, "#aaa", iconColor, iconColor, "#aaa", iconColor],
          }}
          transition={{
            duration: 0.5,
            delay: delayIcon,
            repeat: Infinity,
            repeatType: "loop",
            repeatDelay: 1,
          }}
        >
          {icon}
        </motion.li>
      )}
    </>
  );
};
export default RIcon;
