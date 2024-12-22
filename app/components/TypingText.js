"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const TypingText = ({ text }) => {
  const [key, setKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setKey((prevKey) => prevKey + 1);
    }, text.length * 100 + 1000);

    return () => clearInterval(interval);
  }, [text]);

  const letters = text.split("");

  return (
    <AnimatePresence>
      <motion.div
        key={key}
        className=" font-bold text-white absolute text-[3vw]"
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
      >
        {letters.map((letter, index) => (
          <motion.span
            key={index}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
            }}
          >
            {letter}
          </motion.span>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};

const Page = () => {
  return (
    <div className=" h-[20vh]  flex items-center justify-center relative">
      <TypingText text="Hi! I’m Baker, a Frontend Next.js-|-React.js Developer based in Jordan." />
    </div>
  );
};

export default Page;
